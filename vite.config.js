import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  /*server: {
    proxy: {
      // '/api'로 시작하는 모든 요청을 프록시
      '/api': {
        target: 'http://api.kaboo.site:8081', // 백엔드 서버 URL로 변경
        changeOrigin: true, // 대상 서버의 호스트 헤더를 원래 호스트로 변경
        secure: false, // HTTPS 사용 시 설정, 보통 로컬 개발 환경에서 false로 설정
        rewrite: (path) => path.replace(/^\/api/, '') // '/api'를 제거하고 백엔드로 전달
      }
    }
  } */
});
