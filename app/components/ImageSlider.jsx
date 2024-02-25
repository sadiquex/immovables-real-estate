"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const images = [
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const interval = useRef(null);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    clearInterval(interval.current);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    if (!isPaused) {
      interval.current = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 1600);
    }
    return () => clearInterval(interval.current);
  }, [isPaused]);

  return (
    <SliderContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ImageSliderContainer
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {images.map((image, index) => (
          <Slide key={index}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Slide>
        ))}
      </ImageSliderContainer>
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
  width: 100%;
  max-height: 80vh;
  overflow: hidden;

  @media (max-width: 480px) {
    max-height: 50vh;
  }
`;

const ImageSliderContainer = styled.div`
  transition: transform 0.8s ease-in-out;
  display: flex;
  position: relative;
`;

const Slide = styled.div`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;

  img {
    object-fit: cover;
  }
`;

const Navigation = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  /* background-color: lightblue; */
  padding: 10px;
  z-index: 1000;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;

  &.active {
    background: #fff;
  }
`;
