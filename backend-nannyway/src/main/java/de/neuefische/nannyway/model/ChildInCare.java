package de.neuefische.nannyway.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "kids")
public class ChildInCare {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private LocalDate birthDate;
    private String infoText;
    private String pickUpPerson;
    private String hoursInCarePerWeek;
    private LocalDate contractTerm;
    private String phoneNumber;
    private String nameParents;
    private String email;
    private String nanny;
}
