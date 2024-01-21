## 환경설정

### react
```bash
pnpm add react react-dom -D
```

### 텔윈드 설치
```bash
pnpm i -D tailwindcss
npx tailwindcss init
pnpm add -D tailwindcss postcss autoprefixer postcss-import
pnpm i lodash --save
```
까지 하면 tailwind.config생성.

### postcss.config생성.
프로젝트때 사용하던거.
```js
export default {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 텔윈드 설정
tailwind.config에서 이 코드 복붙.
프로젝트때 이 코드 사용했습니다.

```js
import { range } from "lodash";
const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) => {
  return range(start, end).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});
};

// 타입을 지정하고 싶은 객체 바로 위에 타입스크립트 구문이 포함된 jsdoc 주석을 써 주셔야 타입스크립트의 지원을 받을 수 있습니다,
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      spacing: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      inset: {
        ...pxToRemFunc(0, 1000),
      },
      fontSize: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      lineHeight: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      screens: {
        mobile: "360px",
        tablet: "768px",
        desktop: "1280px",
      },
    },
    fontFamily: {
      sans: ["noto-sans-kr", "sans-serif"],
    }, // font-family: noto-sans-kr, sans-serif;
  },
  plugins: [],
};

```
그리고 .eslintrc.cjs에서 추가.
```js
env: {
        node: true,
      },
```
추가 안하면 tailwind.config에서
'module is not defined'가 생김.


### vite
```bash
pnpm create vite@latest
```
필요한거 빼고 지울거 지우고.

package.json 안에 설치
```bash
pnpm i
```

## 바닐라 프로젝트 팝업창
![스크린샷 2024-01-21 오후 10 40 02](https://github.com/junghyunlee0922/react-homework/assets/148926098/ac6cc9e1-bfef-4093-8616-65158a3dfaeb)
메인 페이지에 뜨는 팝업창을 리액트로 구현해봤습니다.

### 리액트 팝업창
![스크린샷 2024-01-21 오후 10 42 02](https://github.com/junghyunlee0922/react-homework/assets/148926098/87b881f6-4880-4c75-abfe-384d6c2ca545)
마크업은 <b>dialog</b>태그를 사용했고
tailwind를 사용했습니다.
자바스크립트는 사용안하고 마크업이랑 css만 구현했습니다.


## error 해결사항

### nesting 찾을수 없다 에러떠서 설치

```bash
pnpm i -D postcss-nesting
```

main.jsx에서 html다 하고
계속 css안되서 tailwind.config에
![스크린샷 2024-01-21 오후 10 32 51](https://github.com/junghyunlee0922/react-homework/assets/148926098/6175fc42-f7a1-4896-bde9-5ff2b38ddd2d)
main.jsx를 추가했더니 텔윈드 css적용이 되었다.