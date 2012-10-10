package controllers;

import play.*;
import play.mvc.*;

import java.io.*;
import java.util.*;
import java.util.zip.GZIPOutputStream;

public class Compress extends Controller {

    @Finally
    public static void compress() throws IOException {

        String text = response.out.toString();

        final ByteArrayOutputStream gzip = gzip(text);
        response.setHeader("Content-Encoding", "gzip");
        response.setHeader("Content-Length", gzip.size() + "");
        response.out = gzip;
    }

    public static ByteArrayOutputStream gzip(final String input)
            throws IOException {
        final InputStream inputStream = new ByteArrayInputStream(input.getBytes());
        final ByteArrayOutputStream stringOutputStream = new ByteArrayOutputStream((int) (input.length() * 0.75));
        final OutputStream gzipOutputStream = new GZIPOutputStream(stringOutputStream);

        final byte[] buf = new byte[5000];
        int len;
        while ((len = inputStream.read(buf)) > 0) {
            gzipOutputStream.write(buf, 0, len);
        }

        inputStream.close();
        gzipOutputStream.close();

        return stringOutputStream;
    }

}