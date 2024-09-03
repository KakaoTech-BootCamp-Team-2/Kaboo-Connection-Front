import React from 'react';

function LoginPage() {
    const handleLogin = () => {
        try {
            console.log('Attempting to redirect to OAuth provider...');

            // Redirection URL 로그 추가
            // const redirectUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${redirectUri}&response_type=code`;
            const redirectUrl = "http://localhost:8081/oauth2/authorization/kakao";
            console.log('Redirect URL:', redirectUrl);

            window.location.href = redirectUrl;
            console.log('Redirection triggered.');
        } catch (error) {
            console.error('Error during redirection:', error);
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
