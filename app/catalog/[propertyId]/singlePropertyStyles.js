"use client";

import { styled } from "styled-components";

export const SinglePropertyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  /* border: 2px solid blue; */

  & .left {
    grid-column: span 2;
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Description = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    color: ${(theme) => theme.theme.primary};
  }
  p {
    font-size: 1rem;
    line-height: 1.2;
  }
`;

export const DetailsTable = styled.table`
  width: 100%;
  margin: 20px 0;

  td {
    padding: 12px;
  }
  & .even {
    background: #f5f5f5;
  }

  & .odd {
    background: #e0e0e0;
  }
`;

export const OtherDetails_Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Date_Added = styled.p`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Buttons_Wrapper = styled.div`
  display: flex;
  gap: 10px;

  > * {
    flex: 1;
  }
`;

export const PropertyAgentCard_Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AgentImage = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const AgentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 480px) {
    align-items: center;
  }

  > * {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
