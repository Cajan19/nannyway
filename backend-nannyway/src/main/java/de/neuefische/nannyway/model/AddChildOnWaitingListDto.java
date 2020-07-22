package de.neuefische.nannyway.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddChildOnWaitingListDto {

    @NotEmpty(message = "Bitte gib einen Familiennamen ein!")
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
}
