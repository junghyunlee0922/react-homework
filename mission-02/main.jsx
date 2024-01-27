import React from "react";
import { createRoot } from "react-dom/client";
import App from './src/App'


const mainSwiper = (
  <>
  <h2 className="mb-28pxr inline-block text-center text-28pxr text-content">
    이 상품 어때요?
  </h2>
  <App/>
  </>
  
);

createRoot(document.getElementById('root')).render(mainSwiper);