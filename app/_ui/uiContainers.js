"use client";
import { styled } from "styled-components";

export const MAIN = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  /* border: 2px solid pink; */
  padding: 2px;
  /* height: 100vh; */

  @media (max-width: 480px) {
    /* padding: 66px 8px 0px 8px; */
  }
`;

export const SECTIONCONTENT = styled(MAIN)`
  width: 100%;
`;

export const BACKDROPCONTAINER = styled.section`
  position: relative;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* min-height: 60vh; */
  display: flex;
  align-items: center;
  z-index: 10;
`;
