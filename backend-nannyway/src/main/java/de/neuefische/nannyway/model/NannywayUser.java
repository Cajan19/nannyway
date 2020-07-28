package de.neuefische.nannyway.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "user")
public class NannywayUser {

    @Id
    @Size(min = 5, message = "Mindestlänge 5 Zeichen")
    private String username;
    @Size(min = 8, message = "Mindestlänge 8 Zeichen")
    private String password;
    @Size(min = 2)
    private String firstName;
    @Size(min = 2)
    private String lastName;
    @Email
    private String email;
}
