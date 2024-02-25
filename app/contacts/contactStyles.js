"use client";

import { styled } from "styled-components";
import { MAIN } from "../_ui/uiContainers";
import { BUTTON } from "../_ui/uiComponents";

export const ContactContainer = styled.section`
  background: ${(theme) => theme.theme.secondaryBackgroundColor};
  padding: 60px 0;
  text-align: center;
`;

export const ContactContent = styled(MAIN)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const ContactCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  /* border: 1px solid red; */
`;

export const ContactTitle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

export const ContactIcon = styled.span`
  color: ${(theme) => theme.theme.secondary};
`;

export const ContactValue = styled.p``;

export const Contact_Form_Wrapper = styled.div`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

export const InputField = styled.input`
  padding: 1rem 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  outline: none;
`;

export const Contact_Button = styled(BUTTON)`
  margin: 2rem 0;
`;
