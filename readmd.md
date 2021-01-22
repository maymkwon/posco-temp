1. yarn


공통 패키지 관련

cd packages/<목적지> 

스크립트 설명
```
"scripts": {
    "js:build": "cross-env NODE_ENV=production tsc -p tsconfig.json",
    "build-js:prod": 컴포넌트 빌드,
    "js:watch": 변경사항 감시 
    "storybook": 스토리북 로컬,
    "test": 테스트,
    "test:generate-output": "jest --json --outputFile=.jest-test-results.json || true",
    "prebuild:storybook": "rimraf .jest-test-results.json && yarn test:generate-output",
    "build:storybook": "build-storybook -c .storybook -o dist/ --quiet"
  },
```
