"use client";
import styled from "styled-components";
import { BUTTON } from "./_ui/uiComponents";
import { H1 } from "./_ui/designSystem/textSystem";

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(theme) => theme.theme.secondary};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const HeroTitle = styled(H1)`
  color: ${(theme) => theme.theme.secondaryBackgroundColor};
`;

export const FeatureCardsContainer = styled.div`
  padding: 30px 12px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeatureCard = styled.div`
  background: #fff;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: url("${(props) => props.$bgimage}");
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    opacity: 0;
    transform: translateY(100%) scale(0);
    transition: all 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  &:hover button,
  &:hover p {
    transform: translateY(0);
  }
`;

export const FeatureCardContent = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
`;

export const ThumbnailTitle = styled.p`
  font-size: 24px;
  transform: translateY(20px);
  transition: all 0.4s ease;
`;

export const NoOfProperties = styled.p`
  font-size: 16px;
  transform: translateY(20px);
  transition: all 0.4s ease;
`;

export const FeatureButton = styled(BUTTON)`
  transition: transform 0.4s ease;
  transform: translateY(100vh) scale(0);

  a {
    color: inherit;
    text-decoration: none;
  }
`;
