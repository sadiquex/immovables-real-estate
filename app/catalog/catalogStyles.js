"use client";
import { styled } from "styled-components";
import { MAIN } from "../_ui/uiContainers";

export const CatalogContainer = styled(MAIN)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  .catalog {
    grid-column: span 2;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
