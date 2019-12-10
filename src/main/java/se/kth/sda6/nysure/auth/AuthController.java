package se.kth.sda6.nysure.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.annotation.*;
import se.kth.sda6.nysure.user.User;
import se.kth.sda6.nysure.user.UserService;

@RestController
public class AuthController {
    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (user.getPassword() == null) {
            return new ResponseEntity("Password is missing", HttpStatus.FORBIDDEN);
        }else if (user.getPassword().length() < 5){
            return new ResponseEntity("The password must contain at least 5 characters", HttpStatus.FORBIDDEN);
        }else if (user.getPassword().length() > 100){
            return new ResponseEntity("The password must contain less than 100 characters", HttpStatus.FORBIDDEN);
        }
        User foundUser = userService.findUserByEmail(user.getEmail());
        if (foundUser != null){
            return new ResponseEntity("Email already used", HttpStatus.FORBIDDEN);
        }

        if (userService.getById(user.getId()).isPresent()){
            return new ResponseEntity("Personnummer already used", HttpStatus.FORBIDDEN);
        }

        try {
            userService.register(user);
        } catch (TransactionSystemException | DataIntegrityViolationException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        String token = authService.createAuthToken(user.getEmail());
        AuthResponse authResponse = new AuthResponse(token);

        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthRequest authRequest) {
        try {
            String token = authService.authenticate(authRequest.getEmail(), authRequest.getPassword());
            AuthResponse authResponse = new AuthResponse(token);

            return new ResponseEntity<>(authResponse, HttpStatus.OK);
        } catch (AuthenticationException authenticationException) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}
