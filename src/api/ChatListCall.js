import axios from "axios";
import {instance} from "./instance.js";

export const getChatList = async (username = 'pjh1') => {
    try {
        const response = await instance.get('/chat/rooms', { // '/api' 제거
            params: { username }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching chat list!:", error.message);
        throw error;
    }
};
