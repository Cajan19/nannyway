package de.neuefische.nannyway.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EditChildInCareDto {
    private String infoText;
    private String pickUpPerson;
    private String hoursInCarePerWeek;
    private LocalDate contractTerm;
    private String phoneNumber;
    private String email;
}
