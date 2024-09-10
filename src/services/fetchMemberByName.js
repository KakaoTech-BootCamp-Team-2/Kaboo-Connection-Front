import { instance } from './../api/instance.js';

const fetchMemberByName = async (koreanName) => {
    try {
        const encodedName = encodeURIComponent(koreanName);
        const response = await instance.get(`/api/auth/member?name=${encodedName}`);
        console.log('Received response:', response);

        if (response.data.success) {
            return response.data.data;
        } else {
            throw new Error(response.data.message || "Failed to fetch member data");
        }
    } catch (error) {
        console.error("Error fetching member data:", error.message);
        throw error;
    }
};

export default fetchMemberByName;
