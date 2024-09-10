import React from "react";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div>
      <h2>Login Page</h2>
      <Link
        to={`${import.meta.env.VITE_AUTH_BASE_URL}/oauth2/authorization/kakao?client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`}
      >
        로그인
      </Link>
    </div>
  );
}

export default LoginPage;
