package de.neuefische.nannyway.controller;

import de.neuefische.nannyway.model.NannywayUser;
import de.neuefische.nannyway.service.NannywayUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("auth/register")
public class NannywayUserController {

    private final NannywayUserService userService;

    @Autowired
    public NannywayUserController(NannywayUserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void registerUser(@RequestBody @Valid NannywayUser user) {
        userService.registerNewUser(user);
    }

    @DeleteMapping("{username}")
    public void deleteAccount(@PathVariable String username) {
        userService.deleteUser(username);
    }
}


