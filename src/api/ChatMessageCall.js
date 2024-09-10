import axios from "axios";

import {instance} from "./instance";

const currentUser = 'phj2';

export const getChatMessages = async (roomUUID, page = 0, size = 10) => {
    try {
        const response = await instance.get('/chat/messages', {
            params: {
                roomUUID, // 채팅 방 ID
                page,     // 페이지 번호
                size      // 페이지 당 메시지 수
            }
        });
        return response;
    } catch (error) {
        console.error("채팅방 메세지 불러오기 실패:", error.message);
        throw error;
    }
};