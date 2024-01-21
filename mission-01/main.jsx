import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";


const popupImg = (
<img
src="/src/assets/image/popup.png"
alt="도라에몽 비밀도구박물관 극장판"/>
)

const app = (
  // 팝업창 마크업
  <dialog
    id="dialog"
    className="max-h-672pxr min-h-300pxr overflow-hidden mt-50pxr rounded-[16px]"
    open
  >
    <a href="/">{popupImg}</a>
    <form
      method="dialog"
      className="flex h-86pxr text-16pxr font-normal leading-25pxr text-gray-700"
    >
      <button
        type="button"
        value="cancel"
        className="todayButton  w-220pxr border-r border-gray-100"
      >
        오늘 하루 안보기
      </button>
      <button type="button" value="confirm" className="closeButton w-220pxr">
        닫기
      </button>
    </form>
  </dialog>
);

createRoot(document.getElementById('root')).render(app);

