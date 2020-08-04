package de.neuefische.nannyway.service;

import de.neuefische.nannyway.database.ChildInCareMongoDb;
import de.neuefische.nannyway.model.ChildInCare;
import de.neuefische.nannyway.model.EditChildInCareDto;
import de.neuefische.nannyway.utils.RandomIdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ChildInCareService {
    private final ChildInCareMongoDb kidsDb;
    private final RandomIdUtils randomIdUtils;

    @Autowired
    public ChildInCareService(ChildInCareMongoDb kidsDb, RandomIdUtils randomIdUtils) {
        this.kidsDb = kidsDb;
        this.randomIdUtils = randomIdUtils;
    }

    public ChildInCare addChildInCare(String firstName, String lastName, LocalDate birthDate, String infoText,
                                      String pickUpPerson, String hoursInCarePerWeek, LocalDate contractTerm,
                                      String phoneNumber, String nameParents, String email, String nanny) {
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
        kid.setNanny(nanny);
        return kidsDb.save(kid);
    }

    public void deleteKidById(String id) {
        kidsDb.deleteById(id);
    }

    public List<ChildInCare> getChildByNanny(String nannyUsername) {
        return kidsDb.findByNanny(nannyUsername);
    }

    public ChildInCare getChildById(String id) {
        Optional<ChildInCare> optionalChildInCare = kidsDb.findById(id);
        if (optionalChildInCare.isPresent()) return optionalChildInCare.get();
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    public ChildInCare updateKid(String id, String key, EditChildInCareDto editChildInCareDto) {
        ChildInCare childInCareUpdate = getChildById(id);
        switch (key) {
            case "pickUpPerson" -> childInCareUpdate.setPickUpPerson(editChildInCareDto.getPickUpPerson());
            case "infoText" -> childInCareUpdate.setInfoText(editChildInCareDto.getInfoText());
            case "hoursInCarePerWeek" -> childInCareUpdate.setHoursInCarePerWeek(editChildInCareDto.getHoursInCarePerWeek());
            case "contractTerm" -> childInCareUpdate.setContractTerm(editChildInCareDto.getContractTerm());
            case "phoneNumber" -> childInCareUpdate.setPhoneNumber(editChildInCareDto.getPhoneNumber());
            case "email" -> childInCareUpdate.setEmail(editChildInCareDto.getEmail());
            default -> throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "updateKey not valid");
        }
        return kidsDb.save(childInCareUpdate);
    }
}
