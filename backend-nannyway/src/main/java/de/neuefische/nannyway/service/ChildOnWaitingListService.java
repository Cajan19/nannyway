package de.neuefische.nannyway.service;

import de.neuefische.nannyway.database.ChildOnWaitingListMongoDb;
import de.neuefische.nannyway.model.ChildOnWaitingList;
import de.neuefische.nannyway.utils.RandomIdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

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

    public List<ChildOnWaitingList> getWaitingChildByNanny (String nannyUsername){
        return waitingListDb.findByNanny(nannyUsername);
    }
}


