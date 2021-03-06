package de.neuefische.nannyway.controller;

import de.neuefische.nannyway.database.ChildInCareMongoDb;
import de.neuefische.nannyway.database.UserDb;
import de.neuefische.nannyway.model.AddChildInCareDto;
import de.neuefische.nannyway.model.ChildInCare;
import de.neuefische.nannyway.model.LoginData;
import de.neuefische.nannyway.model.NannywayUser;
import de.neuefische.nannyway.security.JwtUtils;
import de.neuefische.nannyway.utils.RandomIdUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ChildInCareControllerTest {

    @LocalServerPort
    public int port;

    @Autowired
    public TestRestTemplate restTemplate;

    @MockBean
    private RandomIdUtils randomIdUtils;

    @Autowired
    public PasswordEncoder encoder;

    @Autowired
    public ChildInCareMongoDb kidsDb;

    @Autowired
    public UserDb userDb;

    @Autowired
    public JwtUtils jwtUtils;

    @BeforeEach
    public void resetDb() {
        kidsDb.deleteAll();
    }

    private String loginUser() {
        NannywayUser testUser = new NannywayUser("madonna", encoder.encode("music12345"), "Karl", "Quark", "karl@quark.de");
        userDb.save(testUser);

        String loginUrl = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(loginUrl, new LoginData("madonna", "music12345"), String.class);
        return tokenResponse.getBody();
    }

    private String apiUrl(String endpoint) {
        return "http://localhost:" + port + "/api/" + endpoint;
    }

    private AddChildInCareDto testKid = new AddChildInCareDto("Paul", "Wurschtlhuber", LocalDate.of(2018, 1, 17), "Nussallergie",
            "Oma Lotte", "35", LocalDate.of(2021, 8, 31),
            "77777", "Peter und Petra", "kid@nannyway.de");

    private ChildInCare kidInDb = new ChildInCare("some-Id", "Paul", "Wurschtlhuber", LocalDate.of(2018, 1, 17), "Nussallergie",
            "Oma Lotte", "35", LocalDate.of(2021, 8, 31),
            "77777", "Peter und Petra", "kid@nannyway.de", "madonna");

    @Test
    public void addFunctionShouldAddNewChildInCareToOverview() {
//    given
        String token = loginUser();

        when(randomIdUtils.generateRandomID()).thenReturn("some-Id");

        AddChildInCareDto addChildInCareDto = testKid;

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<AddChildInCareDto> requestEntity = new HttpEntity<>(addChildInCareDto, headers);

//    when
        ResponseEntity<ChildInCare> postResponse = restTemplate.exchange(apiUrl("kids"), HttpMethod.POST, requestEntity, ChildInCare.class);

//    then
        ChildInCare expectedChild = kidInDb;
        assertEquals(HttpStatus.OK, postResponse.getStatusCode());
        assertNotNull(postResponse.getBody());
        assertEquals(expectedChild, postResponse.getBody());
    }

    @Test
    public void addFunctionShouldReturnForbiddenErrorWhenNotLoggedIn() {
//    given
        AddChildInCareDto addChildInCareDto = testKid;

        HttpEntity<AddChildInCareDto> requestEntity = new HttpEntity<>(addChildInCareDto);

//    when
        ResponseEntity<ChildInCare> putResponse = restTemplate.exchange(apiUrl("kids"), HttpMethod.POST, requestEntity, ChildInCare.class);

//    then
        assertEquals(HttpStatus.FORBIDDEN, putResponse.getStatusCode());
    }

    @Test
    public void checkForFirstNameFieldNotEmpty() {
//    given
        String token = loginUser();

        AddChildInCareDto addChildInCareDto = new AddChildInCareDto("", "Wurschtlhuber", LocalDate.of(2018, 1, 17),
                "Nussallergie", "Oma Lotte", "35", LocalDate.of(2021, 8, 31),
                "77777", "Peter und Petra", "kid@nannyway.de");

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<AddChildInCareDto> requestEntity = new HttpEntity<>(addChildInCareDto, headers);

//    when
        ResponseEntity<ChildInCare> putResponse = restTemplate.exchange(apiUrl("kids"), HttpMethod.POST, requestEntity, ChildInCare.class);

//    then
        assertEquals(HttpStatus.BAD_REQUEST, putResponse.getStatusCode());
    }

    @Test
    public void deleteFunctionShouldDeleteKidById() {
//        given
        String token = loginUser();

        kidsDb.save(kidInDb);

//        when
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity httpEntity = new HttpEntity(headers);
        restTemplate.exchange(apiUrl("kids/some-Id"), HttpMethod.DELETE, httpEntity, Void.class);

//        then
        assertTrue(kidsDb.findById("some-Id").isEmpty());
    }
}



