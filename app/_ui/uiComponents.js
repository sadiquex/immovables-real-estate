"use client";
import { styled } from "styled-components";

export const BUTTON = styled.button`
  /* border: 2px solid pink; */
  padding: 8px 20px;
  border-radius: 4px;
  border: 2px solid ${(theme) => theme.theme.secondary};
  background-color: transparent;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  color: ${(theme) => theme.theme.color};
  font-size: 16px;
  white-space: nowrap;
  /* z-index: 100; */
  /* display: inline; */

  &:hover {
    color: ${(theme) => theme.theme.primary};
  }

  &:hover:before {
    -webkit-transform: scaleY(1);
    -ms-transform: scaleY(1);
    transform: scaleY(1);
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5;
    background: ${(theme) => theme.theme.secondary};
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-transform: scaleY(0);
    -ms-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
  }

  &:hover:after {
    -webkit-transition-delay: 0.2s;
    -o-transition-delay: 0.2s;
    transition-delay: 0.2s;
    -webkit-transform: scaleY(1);
    -ms-transform: scaleY(1);
    transform: scaleY(1);
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: ${(theme) => theme.theme.secondary};
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-transform: scaleY(0);
    -ms-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
  }
`;
