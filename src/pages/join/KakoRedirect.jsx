import React, { useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

const KakaoRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get("code");

        if (code) {
            console.log("인가 코드:", code);
            // 백엔드로 넘겨주기 구현 필요!
            getAccessToken(code);
        } else {
            console.error("카카오 로그인 실패: 인가 코드를 받지 못했습니다.");
        }
    }, [location]);

    // 인가 코드를 통해 토큰을 받아오는 함수
    const getAccessToken = async (code) => {
        try {
            const response = await axios.post(
                `https://kauth.kakao.com/oauth/token`,
                null, {
                    params: {
                        grant_type: "authorization_code",
                        client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
                        redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
                        code: code,
                    },
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    }
                }
            );
            console.log("Access Token:", response.data.access_token);
            // 쿠키에 Access Token 저장
            document.cookie = `kakao_access_token=${response.data.access_token}`;

            await axios.post('/api.kaboo.site:8081', {
                access_token: response.data.access_token
            });

            localStorage.setItem("kakao_access_token", response.data.access_token);
            navigate("/join")

        } catch (error) {
            console.error("토큰 요청 실패:", error);
        }
    };

    return (
        <div>
            <h2>카카오 로그인 중...</h2>
        </div>
    );
};

export default KakaoRedirect;