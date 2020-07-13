package de.neuefische.nannyway.utils;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class RandomIdUtils {

    public String generateRandomID() {
        return UUID.randomUUID().toString();
    }
}
