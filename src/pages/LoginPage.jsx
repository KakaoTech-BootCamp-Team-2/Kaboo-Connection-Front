import React from "react";
import { Link } from "react-router-dom";
function LoginPage() {
  // const handleLogin = async () => {
  //   try {

  //     // Redirection URL 로그 추가
  //     // const redirectUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${redirectUri}&response_type=code`;
  //     // const redirectUrl = `https://api.kaboo.site:8081/oauth2/authorization/kakao?client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;
  //   } catch (error) {
  //     console.error("Error during redirection:", error);
  //   }
  // };

  return (
    <div>
      <h2>Login Page</h2>
      <form
        method="POST"
        action={`${import.meta.env.VITE_AUTH_BASE_URL}/oauth2/authorization/kakao?client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`}
      >
        <button>테스트</button>
      </form>
      <Link
        to={`${import.meta.env.VITE_AUTH_BASE_URL}/oauth2/authorization/kakao`}
      >
        로그인
      </Link>
      <br />
      <Link
        to={`${import.meta.env.VITE_AUTH_BASE_URL}/oauth2/authorization/kakao?client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`}
      >
        로그인2
      </Link>
    </div>
  );
}

export default LoginPage;
