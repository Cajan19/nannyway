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