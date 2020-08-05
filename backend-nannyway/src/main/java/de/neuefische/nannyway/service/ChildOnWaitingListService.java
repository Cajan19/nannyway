package de.neuefische.nannyway.service;

import de.neuefische.nannyway.database.ChildOnWaitingListMongoDb;
import de.neuefische.nannyway.model.ChildOnWaitingList;
import de.neuefische.nannyway.model.EditChildOnWaitingListDto;
import de.neuefische.nannyway.utils.RandomIdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ChildOnWaitingListService {
    private final ChildOnWaitingListMongoDb waitingListDb;
    private final RandomIdUtils randomIdUtils;

    @Autowired
    public ChildOnWaitingListService(ChildOnWaitingListMongoDb waitingListDb, RandomIdUtils randomIdUtils) {
        this.waitingListDb = waitingListDb;
        this.randomIdUtils = randomIdUtils;
    }

    public ChildOnWaitingList addChildOnWaitingList(String familyName, String firstName, LocalDate birthDate, String phoneNumber,
                                                    String email, LocalDate getToKnowDate, LocalDate startDateOfCare,
                                                    String hoursInCarePerWeek, String prediction, Boolean approval, String infoText, String nanny) {
        ChildOnWaitingList waitingKid = new ChildOnWaitingList();
        waitingKid.setId(randomIdUtils.generateRandomID());
        waitingKid.setFamilyName(familyName);
        waitingKid.setFirstName(firstName);
        waitingKid.setBirthDate(birthDate);
        waitingKid.setPhoneNumber(phoneNumber);
        waitingKid.setEmail(email);
        waitingKid.setGetToKnowDate(getToKnowDate);
        waitingKid.setStartDateOfCare(startDateOfCare);
        waitingKid.setHoursInCarePerWeek(hoursInCarePerWeek);
        waitingKid.setPrediction(prediction);
        waitingKid.setApproval(approval);
        waitingKid.setInfoText(infoText);
        waitingKid.setNanny(nanny);
        return waitingListDb.save(waitingKid);
    }

    public void deleteWaitingKidById(String id) {
        waitingListDb.deleteById(id);
    }

    public List<ChildOnWaitingList> getWaitingChildByNanny(String nannyUsername) {
        return waitingListDb.findByNanny(nannyUsername);
    }

    public ChildOnWaitingList getWaitingChildById(String id) {
        Optional<ChildOnWaitingList> optionalChildOnWaitingList = waitingListDb.findById(id);
        if (optionalChildOnWaitingList.isPresent()) return optionalChildOnWaitingList.get();
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    public ChildOnWaitingList updateWaitingKid(String id, String key, EditChildOnWaitingListDto editWaitingListDto) {
        ChildOnWaitingList childOnWaitingListUpdate = getWaitingChildById(id);
        switch (key) {
            case "phoneNumber" -> childOnWaitingListUpdate.setPhoneNumber(editWaitingListDto.getPhoneNumber());
            case "email" -> childOnWaitingListUpdate.setEmail(editWaitingListDto.getEmail());
            case "getToKnowDate" -> childOnWaitingListUpdate.setGetToKnowDate(editWaitingListDto.getGetToKnowDate());
            case "startDateOfCare" -> childOnWaitingListUpdate.setStartDateOfCare(editWaitingListDto.getStartDateOfCare());
            case "hoursInCarePerWeek" -> childOnWaitingListUpdate.setHoursInCarePerWeek(editWaitingListDto.getHoursInCarePerWeek());
            case "prediction" -> childOnWaitingListUpdate.setPrediction(editWaitingListDto.getPrediction());
            case "infoText" -> childOnWaitingListUpdate.setInfoText(editWaitingListDto.getInfoText());
            default -> throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "updateKey not valid");
        }
        return waitingListDb.save(childOnWaitingListUpdate);
    }
}


