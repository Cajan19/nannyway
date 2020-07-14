package de.neuefische.nannyway.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddChildInCareDto {

    @NotEmpty(message = "Bitte gib einen Vornamen ein!")
    private String firstName;
    private String lastName;
    private LocalDate birthDate;
}
