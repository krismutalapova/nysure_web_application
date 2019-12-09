package se.kth.sda6.nysure.auth;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import se.kth.sda6.nysure.user.User;
import se.kth.sda6.nysure.user.UserRepository;
import se.kth.sda6.nysure.user.UserService;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AuthenticationAPITest {

    @Autowired
    AuthController authController;

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    private String emailOK = "myemail@is.ok";
    private String passwordOK = "mypasswordisok007";

    @BeforeEach
    void setUp() {
        String personnummerOK = "19901024-1111";
        String nameOK = null;
        String addressOK = null;
        String phoneNumberOK = null;

        User u = new User();
        u.setId(personnummerOK);
        u.setEmail(emailOK);
        u.setPassword(passwordOK);
        u.setName(nameOK);
        u.setAddress(addressOK);
        u.setPhone(phoneNumberOK);

        authController.register(u);

    }

    @AfterEach
    void tearDown() {
        User foundUser = userService.findUserByEmail(emailOK);
        userRepository.delete(foundUser);
    }

    @Test
    void loginValid() {
        // + Verify if a user will be able to login with a valid username and valid password
        ResponseEntity responseEntityOK = authController.authenticate(new AuthRequest(emailOK, passwordOK));
        assertEquals(HttpStatus.OK, responseEntityOK.getStatusCode());
    }

    @Test
    void invalidPassword() {
// - Verify if a user cannot login with a valid username and an invalid password
        ResponseEntity wrongResponse = authController.authenticate(new AuthRequest(emailOK, "sdfg"));
        assertEquals(HttpStatus.UNAUTHORIZED, wrongResponse.getStatusCode());
    }

    @Test
    void emptyStringFields() {
// - Verify the login page for both, when the field is blank and Submit button is clicked
        //Empty string
        ResponseEntity emptyField = authController.authenticate((new AuthRequest("", "")));
        assertEquals(HttpStatus.UNAUTHORIZED, emptyField.getStatusCode());
        ResponseEntity nullEmail = authController.authenticate(new AuthRequest(null, passwordOK));
        assertEquals(HttpStatus.UNAUTHORIZED, nullEmail.getStatusCode());
    }

    @Test
    void userNonExistent() {
        ResponseEntity userNonExistent1 = authController.authenticate(new AuthRequest("nonexistent@gmail.com", passwordOK));
        assertEquals(HttpStatus.UNAUTHORIZED, userNonExistent1.getStatusCode());
    }

    @Test
    void badEmailFormat() {
        ResponseEntity badEmailFormat1 = authController.authenticate(new AuthRequest("raeglihdfbcli", passwordOK));
        assertEquals(HttpStatus.UNAUTHORIZED, badEmailFormat1.getStatusCode());
        ResponseEntity badEmailFormat2 = authController.authenticate(new AuthRequest("test.fao.vai", passwordOK));
        assertEquals(HttpStatus.UNAUTHORIZED, badEmailFormat2.getStatusCode());
        ResponseEntity badEmailFormat3 = authController.authenticate(new AuthRequest("oiegjs.vaj@grj", passwordOK));
        assertEquals(HttpStatus.UNAUTHORIZED, badEmailFormat3.getStatusCode());
        ResponseEntity badEmailFormat4 = authController.authenticate(new AuthRequest("gsroij.gsrpij@com", passwordOK));
        assertEquals(HttpStatus.UNAUTHORIZED, badEmailFormat4.getStatusCode());
    }

// + Verify the ‘Forgot Password’ functionality

// + Verify the messages for invalid login

// + Verify the ‘Remember Me’ functionality

// + Verify if a user is able to login with a new password only after he/she has changed the password

// - Verify the login page by pressing ‘Back button’ of the browser. It should not allow you to enter into the system once you log out
// -> works manuallyprivate static String personnummerOK = "19901024-1111";
}