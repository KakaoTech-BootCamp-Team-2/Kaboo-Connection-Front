import {instance} from './../api/instance.js';

const fetchMembersList = async () => {
    try {
        const cookies = document.cookie;
        console.log('Sending cookies:', cookies);

        const response = await instance.get('/api/auth/member/all', {
        });
        console.log('들어오는 응답',response);
        return response;
    } catch (error) {
        console.error("Error fetching chat list!:", error.message);
        throw error;
    }
};

export default fetchMembersList;