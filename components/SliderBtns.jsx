"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const SliderBtns = ({ containerStyle, btnStyle, iconStyle }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyle}>
      <button onClick={() => swiper.slidePrev()} className={btnStyle}>
        <PiCaretLeftBold className={iconStyle} />
      </button>
      <button onClick={() => swiper.slideNext()} className={btnStyle}>
        <PiCaretRightBold className={iconStyle} />
      </button>
    </div>
  );
};

export default SliderBtns;
