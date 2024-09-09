// src/utils/api.js
import { instance } from "./instanceAuth"; // 설정된 Axios 인스턴스 임포트

export async function postMemberData(data) {
    const url = `/api/auth/member?name=${encodeURIComponent(data.koreanName)}`;

    try {
        const response = await instance.post(url, data); // Axios 인스턴스 사용
        return response.data; // 서버로부터 받은 응답 데이터를 반환
    } catch (error) {
        console.error("회원정보 보내기 실패:", error);
        throw error; // 오류를 호출자에게 다시 던짐
    }
}
