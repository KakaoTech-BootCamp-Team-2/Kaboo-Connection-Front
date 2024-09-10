import axios from "axios";
import { instance } from "./instance.js";

export const getChatList = async (username) => {
  try {
    const response = await instance.get(`/chat/rooms?username=${username}`);
    console.log('apicall',username, response);
    return response;
  } catch (error) {
    console.error("Error fetching chat list!:", error.message);
    throw error;
  }
};