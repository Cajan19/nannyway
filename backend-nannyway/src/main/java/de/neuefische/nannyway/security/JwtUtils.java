package de.neuefische.nannyway.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.Instant;
import java.util.Date;
import java.util.Map;

@Service
public class JwtUtils {

    @Value("${auth.jwt.secret}")
    private String secret;

    public String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().plus(Duration.ofDays(5))))
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    }

    private Boolean isTokenExpired(String token) {
        Claims claims = extractAllClaims(token);
        return claims.getExpiration().before(new Date());
    }

    public String extractUserName(String token) {
        Claims claims = extractAllClaims(token);
        return claims.getSubject();
    }

    public Boolean validateToken(String token, String username) {
        final String extractUserName = extractUserName(token);
        return (extractUserName.equals(username) && !isTokenExpired(token));
    }
}
