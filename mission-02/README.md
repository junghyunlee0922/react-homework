## 2주차 과제 환경설정
1. 기존 1주차 과제랑 동일하게 설정. <br/>
[1주차 환경설정](https://github.com/junghyunlee0922/react-homework/tree/main/mission-01)
2. swiper추가.

```bash
pnpm install swiper
```

## swiper 참고
```js
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

```


## 소개
10조 프로젝트 도라에몽 main페이지<br/>
상품 스와이퍼 구현하기.

## 후기
swiper왜 작동이 안될까..<br/>
2시간 넘게 작동이 안되고 겨우 했다..<br/>
할렐루야..