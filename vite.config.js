import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  define: {
    global: 'window', // 글로벌 변수를 브라우저 환경에서 사용할 수 있도록 설정
  },
});
