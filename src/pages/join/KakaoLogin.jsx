import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Common/Layout.jsx";
import MiniLayout from "../../components/Common/miniLayout.jsx";
import kakaologin from "../../assets/images/kakaologin.png";

function KakaoLogin() {
    const CLIENT_ID = import.meta.env.REACT_APP_KAKAO_CLIENT_ID; // 환경변수에 CLIENT_ID 설정
    const REDIRECT_URL = import.meta.env.REACT_APP_KAKAO_REDIRECT_URL; // 환경변수에 REDIRECT_URL 설정

    const handleKakaoLogin = () => {

        const kakaoLoginUrl = `https://api.kaboo.site:8081/oauth2/authorization/kakao?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`;
        window.location.href = kakaoLoginUrl; // URL로 리디렉션
    };

    return (
        <Layout>
            <MiniLayout>
                <button
                    style={{ border: "none", background: "none", padding: 0, margin: 0, outline: "none", width: "50%" }}
                    onClick={handleKakaoLogin}
                >
                    <img src={kakaologin} style={{ width: "80%" }} alt="Kakao Login" />
                </button>
            </MiniLayout>
        </Layout>
    );
}

export default KakaoLogin;