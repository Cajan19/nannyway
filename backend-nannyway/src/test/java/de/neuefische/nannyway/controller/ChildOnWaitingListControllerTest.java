package de.neuefische.nannyway.controller;

import de.neuefische.nannyway.database.ChildOnWaitingListMongoDb;
import de.neuefische.nannyway.database.UserDb;
import de.neuefische.nannyway.model.*;
import de.neuefische.nannyway.security.JwtUtils;
import de.neuefische.nannyway.utils.RandomIdUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
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
class ChildOnWaitingListControllerTest {

    @LocalServerPort
    public int port;

    @Autowired
    public TestRestTemplate restTemplate;

    @MockBean
    private RandomIdUtils randomIdUtils;

    @Autowired
    public PasswordEncoder encoder;

    @Autowired
    public ChildOnWaitingListMongoDb waitingListDb;

    @Autowired
    public UserDb userDb;

    @Autowired
    public JwtUtils jwtUtils;

    @BeforeEach
    public void resetDB() {
        waitingListDb.deleteAll();
    }

    private String loginUser() {
        NannywayUser testUser = new NannywayUser("madonna", encoder.encode("music"), "Karl", "Quark", "karl@quark.de");
        userDb.save(testUser);

        String loginUrl = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(loginUrl, new LoginData("madonna", "music"), String.class);
        return tokenResponse.getBody();
    }

    private String apiUrl(String endpoint) {
        return "http://localhost:" + port + "/api/" + endpoint;
    }

    private ChildOnWaitingList waitingKidInDb = new ChildOnWaitingList("some-id", "Wollny", "Loredana", LocalDate.of(2020, 1, 17),
            "88888", "test@test.de", LocalDate.of(2020, 11, 11),
            LocalDate.of(2021, 8, 1), "40", "whatever", false, "info", "madonna");

    private AddChildOnWaitingListDto onWaitingListDto = new AddChildOnWaitingListDto("Wollny", "Loredana", LocalDate.of(2020, 1, 17),
            "88888", "test@test.de", LocalDate.of(2020, 11, 11),
            LocalDate.of(2021, 8, 1), "40", "whatever", false, "info");

    @Test
    @DisplayName("getAllChildren should return all children on waiting list")
    public void getAllChildren() {
//        given
        String token = loginUser();

        when(randomIdUtils.generateRandomID()).thenReturn("some-Id");

        waitingListDb.save(waitingKidInDb);
        waitingListDb.save(new ChildOnWaitingList("safe-id", "Meier", "Uschi", LocalDate.of(2020, 6, 7),
                "123312", "test2@test.de", LocalDate.of(2020, 11, 10),
                LocalDate.of(2021, 7, 31), "40", "nice", true, "more info", "madonna"));

//        when
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<ChildOnWaitingList[]> response = restTemplate.exchange(apiUrl("waitinglist"), HttpMethod.GET, entity, ChildOnWaitingList[].class);

//        then
        assertEquals(response.getStatusCode(), HttpStatus.OK);
        ChildOnWaitingList[] waitingKids = response.getBody();
        assertEquals(2, waitingKids.length);
        assertEquals(waitingKids[0], new ChildOnWaitingList("some-id", "Wollny", "Loredana", LocalDate.of(2020, 1, 17),
                "88888", "test@test.de", LocalDate.of(2020, 11, 11),
                LocalDate.of(2021, 8, 1), "40", "whatever", false, "info", "madonna"));
        assertEquals(waitingKids[1], new ChildOnWaitingList("safe-id", "Meier", "Uschi", LocalDate.of(2020, 6, 7),
                "123312", "test2@test.de", LocalDate.of(2020, 11, 10),
                LocalDate.of(2021, 7, 31), "40", "nice", true, "more info", "madonna"));
    }

    @Test
    public void addFunctionShouldAddNewChildOnWaitingListToOverview() {
//        given
        String token = loginUser();

        when(randomIdUtils.generateRandomID()).thenReturn("some-Id");

        AddChildOnWaitingListDto addChildOnWaitingListDto = onWaitingListDto;

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<AddChildOnWaitingListDto> requestEntity = new HttpEntity<>(addChildOnWaitingListDto, headers);

//        when
        ResponseEntity<ChildOnWaitingList> postResponse = restTemplate.exchange(apiUrl("waitinglist"), HttpMethod.POST, requestEntity, ChildOnWaitingList.class);

//        then
        ChildOnWaitingList expectedChild = new ChildOnWaitingList("some-Id", "Wollny", "Loredana", LocalDate.of(2020, 1, 17),
                "88888", "test@test.de", LocalDate.of(2020, 11, 11),
                LocalDate.of(2021, 8, 1), "40", "whatever", false, "info", "madonna");
        assertEquals(HttpStatus.OK, postResponse.getStatusCode());
        assertNotNull(postResponse.getBody());
        assertEquals(expectedChild, postResponse.getBody());
    }

    @Test
    public void addFunctionShouldReturnForbiddenErrorWhenNotLoggedIn() {
//    given
        AddChildOnWaitingListDto addChildOnWaitingListDto = onWaitingListDto;

        HttpEntity<AddChildOnWaitingListDto> requestEntity = new HttpEntity<>(addChildOnWaitingListDto);

//        when
        ResponseEntity<ChildOnWaitingList> putResponse = restTemplate.exchange(apiUrl("waitinglist"), HttpMethod.POST, requestEntity, ChildOnWaitingList.class);

//        then
        assertEquals(HttpStatus.FORBIDDEN, putResponse.getStatusCode());
    }

    @Test
    public void checkForFamilyNameFieldNotEmpty() {
//        given
        String token = loginUser();

        AddChildOnWaitingListDto addChildOnWaitingListDto = new AddChildOnWaitingListDto("", "Loredana", LocalDate.of(2020, 1, 17),
                "88888", "test@test.de", LocalDate.of(2020, 11, 11),
                LocalDate.of(2021, 8, 1), "40", "whatever", false, "info");

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<AddChildOnWaitingListDto> requestEntity = new HttpEntity<>(addChildOnWaitingListDto, headers);

//        when
        ResponseEntity<ChildOnWaitingList> postResponse = restTemplate.exchange(apiUrl("waitinglist"), HttpMethod.POST, requestEntity, ChildOnWaitingList.class);

//        then
        assertEquals(HttpStatus.BAD_REQUEST, postResponse.getStatusCode());
    }

    @Test
    public void deleteFunctionShouldDeleteKidById() {
//        given
        String token = loginUser();

        waitingListDb.save(waitingKidInDb);

//        when
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity httpEntity = new HttpEntity(headers);
        restTemplate.exchange(apiUrl("waitinglist/some-id"), HttpMethod.DELETE, httpEntity, Void.class);

//        then
        assertTrue(waitingListDb.findById("some-id").isEmpty());
    }
}