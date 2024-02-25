"use client";

import { H1 } from "../_ui/designSystem/textSystem";
import { MAIN } from "../_ui/uiContainers";
import styled from "styled-components";

export default function PageHeader(props) {
  return (
    <CONTAINER $bgimage={props.bgimage}>
      <MAIN>
        <PageHeaderTitle>{props.title}</PageHeaderTitle>
      </MAIN>
    </CONTAINER>
  );
}

export const CONTAINER = styled.section`
  background: url("${(props) => props.bgimage}");
  background-image: url("https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg");

  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow: hidden;
  position: relative;
  z-index: -10;
  min-height: 60vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const PageHeaderTitle = styled(H1)`
  color: ${(theme) => theme.theme.primaryBackgroundColor};
`;
