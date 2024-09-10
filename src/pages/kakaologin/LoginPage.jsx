import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Common/Layout";
import KAKAO_BUTTON from "../../assets/images/kakaoButton.png";

function LoginPage() {
  return (
    <Layout noneHeader={true} isCenter={true}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <h3>카부커넥션 시작하기</h3>
        <Link
          to={`${import.meta.env.VITE_AUTH_BASE_URL}/oauth2/authorization/kakao?client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`}
        >
          <img src={KAKAO_BUTTON} alt="" />
        </Link>
      </div>
    </Layout>
  );
}

export default LoginPage;
