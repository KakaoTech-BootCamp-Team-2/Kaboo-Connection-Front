// src/api/axios.js
import axios from 'axios';

const memberInfo = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // 환경 변수를 사용
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true, // 필요한 경우에만 설정
    timeout: 10000 // 필요에 따라 타임아웃 설정
});

export default memberInfo;
