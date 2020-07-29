package de.neuefische.nannyway.controller;

import de.neuefische.nannyway.model.LoginData;
import de.neuefische.nannyway.security.JwtUtils;
import de.neuefische.nannyway.utils.UserUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;

@Slf4j
@RestController
@RequestMapping("auth/login")
public class LoginController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final UserUtils userUtils;

    public LoginController(AuthenticationManager authenticationManager, JwtUtils jwtUtils, UserUtils userUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.userUtils = userUtils;
    }

    @PostMapping
    public String login(@RequestBody LoginData data) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(data.getUsername(), data.getPassword()));
            HashMap<String, Object> tokenUserData = userUtils.getUserTokenData(data.getUsername());

            return jwtUtils.createToken(tokenUserData, data.getUsername());
        } catch (Exception e) {
            log.error("failed to login", e);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials");
        }
    }
}

