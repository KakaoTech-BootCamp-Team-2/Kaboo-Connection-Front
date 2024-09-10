import axios from "axios";
import { instance } from "./instanceAuth.js";

export const PeopleListCall = async () => {
    try {
        const response = await instance.get(`/api/auth/member/all`);
        console.log('apicall',response);
        return response;
    } catch (error) {
        console.error("Error fetching PeopleList:", error.message);
        throw error;
    }
};