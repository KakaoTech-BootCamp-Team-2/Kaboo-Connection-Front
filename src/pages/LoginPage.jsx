import React from "react";

function LoginPage() {
  const handleLogin = async () => {
    try {
      console.log("Attempting to redirect to OAuth provider...");

      // Redirection URL 로그 추가
      // const redirectUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${redirectUri}&response_type=code`;
      const redirectUrl = `https://api.kaboo.site:8081/oauth2/authorization/kakao?client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;
      console.log("Redirect URL:", redirectUrl);

      window.location.href = redirectUrl;

      console.log(res);
    } catch (error) {
      console.error("Error during redirection:", error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login with kakao</button>
    </div>
  );
}

export default LoginPage;
