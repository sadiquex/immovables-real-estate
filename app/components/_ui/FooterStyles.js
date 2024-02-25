"use client";

import styled from "styled-components";
import { BACKDROPCONTAINER, MAIN } from "../../_ui/uiContainers";

export const FooterContainer = styled(BACKDROPCONTAINER)`
  background: #121212;
  color: #fff;
`;

export const FooterContent = styled(MAIN)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto auto auto auto;
  justify-items: center;
  padding: 40px 0;

  @media (max-width: 480px) {
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
    /* background: greenyellow; */
    padding: 20px 0;
    gap: 20px;
  }
`;

export const GridCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 480px) {
    text-align: center;
    align-items: center;
    gap: 20px;
  }
`;

export const Socials = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;

  > * {
    transition: all 0.4s ease;

    @media (max-width: 480px) {
      color: ${(theme) => theme.theme.secondary};
    }
  }

  > *:hover {
    color: ${(theme) => theme.theme.secondary};
  }

  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;

export const FooterItemsTitle = styled.p`
  font-weight: bold;
`;

export const NewsletterDesc = styled.p`
  font-size: 1rem;
  line-height: 1.3;
`;

export const NewsLetterForm = styled.div`
  display: flex;
  align-items: center;

  input {
    background: #fff;
    padding: 10px 12px;
    border: none;
    outline: none;
    font-size: 16px;
    color: ${(theme) => theme.theme.text};
  }
  button {
    color: ${(theme) => theme.theme.primaryBackgroundColor};
    background: ${(theme) => theme.theme.secondary};
    border-radius: 0 4px 4px 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;

    button {
      width: 100%;
    }
  }
`;

export const EmailIcon = styled.div`
  background: ${(theme) => theme.theme.primary};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  grid-column: 1 / -1;
  padding-top: 20px;
`;
