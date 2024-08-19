import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-plugin-prettier'
import js from '@eslint/js'
import globals from "globals"; // JS 설정을 사용

export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['dist'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules, // JS 기본 규칙
      ...react.configs.recommended.rules, // React 추천 규칙
      ...react.configs['jsx-runtime'].rules, // React JSX-runtime 관련 규칙
      ...reactHooks.configs.recommended.rules, // React Hooks 추천 규칙
      'react/jsx-no-target-blank': 'off', // 규칙 끄기
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "prettier/prettier": "error", // Prettier 규칙 오류로 설정
    },
  },
]
