import "./App.css";

// import Swiper core and required modules
import {
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
  Keyboard,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

export const App = () => {
  return (
    <>
      <Header message={"Hello SwiperJS"} />
      <SwiperSlider />
    </>
  );
};

const Header = ({ message }) => {
  return <h1>{message}</h1>;
};

const SwiperSlider = () => {
  const images = [
    "src/assets/images/1.jpg",
    "src/assets/images/2.jpg",
    "src/assets/images/3.jpg",
    "src/assets/images/4.jpg",
    "src/assets/images/5.jpg",
    "src/assets/images/6.jpg",
    "src/assets/images/7.jpg",
    "src/assets/images/8.jpg",
  ];

  return (
    <div>
      <Swiper
        effect="coverflow"
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        // install Swiper modules
        modules={[Scrollbar, A11y, Autoplay, EffectCoverflow, Keyboard]}
        keyboard={{ enabled: "true" }}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        autoplay={true}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
      >
        {images.map((image) => (
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
