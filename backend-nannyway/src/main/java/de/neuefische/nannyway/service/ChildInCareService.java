package de.neuefische.nannyway.service;

import de.neuefische.nannyway.database.ChildInCareMongoDb;
import de.neuefische.nannyway.model.ChildInCare;
import de.neuefische.nannyway.utils.RandomIdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class ChildInCareService {
    private final ChildInCareMongoDb kidsDb;
    private final RandomIdUtils randomIdUtils;

    @Autowired
    public ChildInCareService(ChildInCareMongoDb kidsDb, RandomIdUtils randomIdUtils) {
        this.kidsDb = kidsDb;
        this.randomIdUtils = randomIdUtils;
    }

    public Iterable<ChildInCare> getAllKids(){
        return kidsDb.findAll();
    }

    public ChildInCare addChildInCare(String firstName, String lastName, LocalDate birthDate, String infoText,
                                      String pickUpPerson, String hoursInCarePerWeek, LocalDate contractTerm,
                                      String phoneNumber, String nameParents, String email){
        ChildInCare kid = new ChildInCare();
        kid.setId(randomIdUtils.generateRandomID());
        kid.setFirstName(firstName);
        kid.setLastName(lastName);
        kid.setBirthDate(birthDate);
        kid.setInfoText(infoText);
        kid.setPickUpPerson(pickUpPerson);
        kid.setHoursInCarePerWeek(hoursInCarePerWeek);
        kid.setContractTerm(contractTerm);
        kid.setPhoneNumber(phoneNumber);
        kid.setNameParents(nameParents);
        kid.setEmail(email);
        return kidsDb.save(kid);
    }
}
