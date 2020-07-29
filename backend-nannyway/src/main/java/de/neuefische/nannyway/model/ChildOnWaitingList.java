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
@Document(collection = "waitinglist")

public class ChildOnWaitingList {
    @Id
    private String id;
    private String familyName;
    private String firstName;
    private LocalDate birthDate;
    private String phoneNumber;
    private String email;
    private LocalDate getToKnowDate;
    private LocalDate startDateOfCare;
    private String hoursInCarePerWeek;
    private String prediction;
    private boolean approval;
    private String infoText;
    private String nanny;
}
