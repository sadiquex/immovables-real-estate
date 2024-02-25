"use client";
/* 
-------------
This file defines all the different UI text styles
*/

import { styled } from "styled-components";

// Titles
export const H1 = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  font-family: var(--font-inter);
  color: ${(theme) => theme.theme.text};
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 3rem;
    text-align: center;
    white-space: normal;
  }
`;
export const H2 = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${(theme) => theme.theme.secondary};

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

// Paragraphs & Captions
export const P = styled.p`
  font-family: var(--font-inter), sans-serif;
  font-size: 1.25rem;
  line-height: 1.4;
  color: ${(theme) => theme.theme.text};
  @media (max-width: 480px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;

// Heading for each section
export const SectionTitle = styled(H1)`
  border-bottom: 3px solid ${(theme) => theme.theme.secondary};
  padding: 24px 0;
  border-width: medium;
  display: inline-block;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`;
