"use client";

import styled from "styled-components";
import { MAIN } from "../_ui/uiContainers";
import { P, SectionTitle } from "../_ui/designSystem/textSystem";
import { useState } from "react";
import data from "../../data";
import Image from "next/image";

const { testimonials } = data;

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    // Ensure that the index stays within the range of available slides
    const maxSlide = Math.floor((testimonials.length - 1) / 2);
    setCurrentSlide(Math.min(Math.max(index, 0), maxSlide));
  };

  return (
    <TestimonialsContent>
      <SectionTitle>Testimonials</SectionTitle>
      <TestimonialSliderContainer
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {testimonials
          .slice(currentSlide * 2, currentSlide * 2 + 2) // Select the testimonials for the current slide
          .map((testimonial, i) => (
            <TestimonyCard key={i}>
              <PersonImage>
                {/* <img src={testimonial.image} /> */}
                <Image
                  src={testimonial.image}
                  alt={`Slide ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </PersonImage>
              <TestimonyText>
                <PersonMessage>{testimonial.testimony}</PersonMessage>
                <PersonName>- {testimonial.name}</PersonName>
              </TestimonyText>
            </TestimonyCard>
          ))}
      </TestimonialSliderContainer>

      <Navigation>
        {testimonials.map((_, index) => (
          <Circle
            key={index}
            className={`${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Navigation>
    </TestimonialsContent>
  );
}

export const TestimonialsContent = styled(MAIN)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 50px;

  @media (max-width: 480px) {
    padding: 20px 0;
    padding-bottom: 50px;
  }
`;

const TestimonialSliderContainer = styled.div`
  position: relative;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 480px) {
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TestimonyCard = styled.div`
  gap: 8px;
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PersonImage = styled.div`
  position: relative;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${(theme) => theme.theme.secondary};

  img {
    object-fit: cover;
    transition: all 0.4s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const TestimonyText = styled.div`
  flex: 1;
`;

const PersonName = styled(P)`
  font-weight: 600;
  font-size: 1rem;
`;

const PersonMessage = styled(P)`
  font-size: 0.8rem;
  line-height: 1.4;
  font-style: italic;
`;

const Navigation = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  padding: 10px;
  z-index: 1000;

  @media (max-width: 480px) {
    bottom: 0;
  }
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(theme) => theme.theme.primary};
  cursor: pointer;

  &.active {
    background: ${(theme) => theme.theme.secondary};
  }
`;
