package de.neuefische.nannyway.controller;

import de.neuefische.nannyway.database.UserDb;
import de.neuefische.nannyway.model.LoginData;
import de.neuefische.nannyway.model.NannywayUser;
import de.neuefische.nannyway.security.JwtUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
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
    public void resetDb() {
        userDb.deleteAll();
    }

    private String authUrl() {
        return "http://localhost:" + port + "/auth/login";
    }

    @Test
    public void loginWithValidCredentials() {
//        given
        NannywayUser testUser = new NannywayUser("madonna", encoder.encode("music99999"), "Karl", "Quark", "karl@quark.de");
        userDb.save(testUser);

//        when
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(authUrl(), new LoginData("madonna", "music99999"), String.class);

//        then
        assertEquals(HttpStatus.OK, tokenResponse.getStatusCode());
        assertTrue(jwtUtils.validateToken(tokenResponse.getBody(), "madonna"));
    }

    @Test
    @DisplayName("login with wrong password should return bad request")
    public void loginWithInvalidCredentials() {
//        given
        NannywayUser testUser = new NannywayUser("madonna", encoder.encode("music99999"), "Karl", "Quark", "karl@quark.de");
        userDb.save(testUser);

//        when
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(authUrl(), new LoginData("madonna", "music999"), String.class);

//        then
        assertEquals(HttpStatus.BAD_REQUEST, tokenResponse.getStatusCode());
    }
}



