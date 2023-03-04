import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import {
  Overlay,
  Global,
  Header,
  CloseBtn,
  ImgWrapper,
  Indicator,
  SliderWrapper,
} from "./style";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose}>X</CloseBtn>
      </Header>
      <SliderWrapper>
        <div>
          <Slider
            // initialSlide={0}
            // afterChange={(slide) => setCurrentSlide(slide)}
            // infinite
            // arrows={false}
            // slidesToShow={1}
            // slidesToScroll={1}
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            afterChange={(slide) => setCurrentSlide(slide)}
          >
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={`${v.src}`} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slider>
          <Indicator>
            <div>
              {currentSlide + 1} / {images.length}
            </div>
          </Indicator>
        </div>
      </SliderWrapper>
    </Overlay>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
