import React, { useEffect } from "react";
import Layout from "../../components/Common/Layout.jsx";
import MiniLayout from "../../components/Common/miniLayout.jsx";
import kakaologin from "../../assets/images/kakaologin.png";
import { useNavigate } from "react-router-dom";

function KakaoLogin() {

    const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const REDIRECT_URL = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem("kakao_access_token");
        console.log(CLIENT_ID, REDIRECT_URL);
        if (accessToken) {
            alert("이미 로그인 되어있습니다!");
            navigate("/join");
        }
        if (!window.Kakao) {
            const script = document.createElement("script");
            script.src = "https://developers.kakao.com/sdk/js/kakao.js";
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                if (!window.Kakao.isInitialized()) {
                    window.Kakao.init(CLIENT_ID);
                    console.log("Kakao SDK initialized");
                }
            };
        } else if (!window.Kakao.isInitialized()) {
            window.Kakao.init(CLIENT_ID);
            console.log("Kakao SDK initialized");
        }
    }, [CLIENT_ID]);

    // 카카오 로그인 버튼 클릭시 인증 요청
    const handleKakaoLogin = () => {
        if (!window.Kakao.isInitialized()) {
            console.error("Kakao SDK가 초기화되지 않았습니다.");
            return;
        }

        window.Kakao.Auth.authorize({
            redirectUri: REDIRECT_URL
        });
        navigate("/join");
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