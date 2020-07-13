package de.neuefische.nannyway.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddChildInCareDto {

    private String firstName;
    private String lastName;
    private LocalDate birthDate;
}
