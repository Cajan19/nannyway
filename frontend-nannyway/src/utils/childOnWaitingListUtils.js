import {getJWTToken} from "./jwt-utils";

export async function fetchAllWaitingKids() {
    const token = getJWTToken();

    const response = await fetch("api/waitinglist", {
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