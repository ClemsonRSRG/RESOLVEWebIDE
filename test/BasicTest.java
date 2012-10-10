import org.junit.*;
import java.util.*;
import models.User;
import play.test.*;
//import models.*;

public class BasicTest extends UnitTest {

    @Test
    public void aVeryImportantThingToTest() {
        User bob = User.find("byEmail", "bob@gmail.com").first();
    
        // Test 
        assertNotNull(bob);
        assertEquals("Bob", bob.firstName);
    }

}
