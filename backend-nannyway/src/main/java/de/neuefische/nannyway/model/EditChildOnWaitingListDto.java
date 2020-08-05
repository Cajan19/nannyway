package de.neuefische.nannyway.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EditChildOnWaitingListDto {
    private String phoneNumber;
    private String email;
    private LocalDate getToKnowDate;
    private LocalDate startDateOfCare;
    private String hoursInCarePerWeek;
    private String prediction;
    private String infoText;
}
