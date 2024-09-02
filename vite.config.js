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
  server: {
    proxy: {
      // 모든 요청을 프록시할 수 있도록 설정
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // '/api' 부분을 제거
        secure: false,
        ws:true,
      },
    },
  },
  define: {
    global: 'window', // 글로벌 변수를 브라우저 환경에서 사용할 수 있도록 설정
  },
});
