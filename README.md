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


프로젝트 내 **로컬** 패키지 설치
```
lerna add <설치할 로컬 패키지 이름> --scope=<설치할 위치>
```


프로젝트 내 패키지 설치

목적지 경로에서 ex) cd apps/posco-admin
```
yarn add <패키지 이름> -W <-D>
```