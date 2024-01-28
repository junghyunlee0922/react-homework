import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import { StrictMode } from "react";

const mainSwiper = (
  <StrictMode>
    <div className="m-auto w-[1050px]">
      <h2 className="my-40pxr text-center text-28pxr text-content">
        이 상품 어때요?
      </h2>
      <App />
    </div>
  </StrictMode>
);

createRoot(document.getElementById("root")).render(mainSwiper);
