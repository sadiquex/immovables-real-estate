"use client";

import { useState } from "react";
import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function ImageSlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(newIndex);
  };

  return (
    <SliderContainer>
      <SliderWrapper
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {images.map((image, index) => (
          <Slide src={image} alt={`Slide ${index + 1}`} key={index} />
        ))}
      </SliderWrapper>
      <NavBtns className="slide-btns">
        <NavButton onClick={prevSlide} className="prev">
          <PrevIcon />
        </NavButton>
        <NavButton onClick={nextSlide} className="next">
          <NextIcon />
        </NavButton>
      </NavBtns>
      <Navigation>
        {images.map((_, index) => (
          <Circle
            key={index}
            className={`${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Navigation>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  position: relative;
  max-height: 400px;
  width: 100%;
  overflow: hidden;

  /* show the left and right nav buttons */
  &:hover {
    & .slide-btns {
      width: 100%;
    }
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

const Slide = styled.img`
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Navigation = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  padding: 10px;
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${(theme) => theme.theme.primary};
  cursor: pointer;

  &.active {
    background: ${(theme) => theme.theme.secondary};
  }
`;

// slide-btns
const NavBtns = styled.div`
  position: absolute;
  transform: translateX(-50%);
  top: 50%;
  left: 50%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  /* move further outside the container */
  width: calc(100% + 200px);
  transition: all 0.3s ease;
`;

const NavButton = styled.button`
  cursor: pointer;
  border: none;
  color: #000;
  font-size: 16px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  background: rgba(255, 255, 255, 0.8);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const PrevIcon = styled(BsChevronLeft)`
  font-size: 24px;
`;

const NextIcon = styled(BsChevronRight)`
  font-size: 24px;
`;
