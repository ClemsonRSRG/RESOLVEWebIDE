
import models.User;
import org.junit.Test;
import play.test.FunctionalTest;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Chuck
 */
public class DatabasePopulator extends FunctionalTest {
    @Test
    public void tryConnectAsUser() {
        // Create a new user and save it
        //new User("chucktc@gmail.com", "12345", "Chuck", "Cook").save();
        //new User("bob@gmail.com", "secret", "Bob", "Jones").save();

        // Test 
        //assertNotNull(User.connect("bob@gmail.com", "secret"));
        //assertNull(User.connect("bob@gmail.com", "badpassword"));
        //assertNull(User.connect("tom@gmail.com", "secret"));
    }
}
