import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5173/api',
});

export const getChatList = async (username = 'pjh1') => {
    try {
        const response = await apiClient.get('/chat/rooms', { // '/api' 제거
            params: { username }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching chat list!:", error.message);
        throw error;
    }
};
