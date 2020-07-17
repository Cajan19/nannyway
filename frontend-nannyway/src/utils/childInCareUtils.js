import {getJWTToken} from "./jwt-utils";

export async function fetchAllKids() {
    const token = getJWTToken();

    const response = await fetch("api/kids", {
        method: `GET`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export function putKid(firstName, lastName, birthDate, infoText, pickUpPerson) {
    const token = getJWTToken();
    const childInCareData = {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        infoText: infoText,
        pickUpPerson: pickUpPerson,
    }
    return fetch("api/kids", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(childInCareData),
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}