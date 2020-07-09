package de.neuefische.nannyway.controller;
import de.neuefische.nannyway.database.UserDb;
import de.neuefische.nannyway.model.LoginData;
import de.neuefische.nannyway.model.NannywayUser;
import de.neuefische.nannyway.security.JwtUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;



@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class LoginControllerTest {

    @LocalServerPort
    public int port;

    @Autowired
    public TestRestTemplate restTemplate;

    @Autowired
    public PasswordEncoder encoder;

    @Autowired
    public UserDb userDb;

    @Autowired
    public JwtUtils jwtUtils;

    @BeforeEach
    public void resetDb(){
        userDb.deleteAll();
    }

    @Test
    public void loginWithValidCredentials(){
//        given
        NannywayUser testUser = new NannywayUser("madonna", encoder.encode("music"), "admin");
        userDb.save(testUser);

//        when
        String url = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(url, new LoginData("madonna", "music"), String.class);

//        then
        assertEquals(HttpStatus.OK, tokenResponse.getStatusCode());
        assertTrue(jwtUtils.validateToken(tokenResponse.getBody(),"madonna"));
    }
    @Test
    public void loginWithInvalidCredentials(){
//        given
        NannywayUser testUser = new NannywayUser("madonna", encoder.encode("music"), "admin");
        userDb.save(testUser);

//        when
        String url = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(url, new LoginData("madonna", "auto"), String.class);

//        then
        assertEquals(HttpStatus.BAD_REQUEST, tokenResponse.getStatusCode());
    }
}



