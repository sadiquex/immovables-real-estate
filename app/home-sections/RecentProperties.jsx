"use client";

import styled from "styled-components";
import { H2, SectionTitle } from "../_ui/designSystem/textSystem";
import { BACKDROPCONTAINER, MAIN } from "../_ui/uiContainers";
import { BUTTON } from "../_ui/uiComponents";
import data from "../../data";
import Link from "next/link";

const { recentProperties } = data;

export default function RecentProperties() {
  return (
    <BACKDROPCONTAINER>
      <RecentContent>
        <SectionTitle>Recent Properties</SectionTitle>
        <RecentCardsContainer>
          {recentProperties.map((card, i) => (
            <RecentCard key={i}>
              <RecentImage src={card.image} alt={card.name} />
              <H2>{card.name}</H2>
              <Price>{card.price}</Price>
              <Perks>
                <p>{card.size}</p>
                <p>{card.bdrms}</p>
                <p>{card.bthrms}</p>
              </Perks>
              <BriefDescription>{card.description}</BriefDescription>
            </RecentCard>
          ))}
        </RecentCardsContainer>
        <BUTTON>
          <Link
            href="/catalog"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            VIEW ALL PROPERTIES
          </Link>
        </BUTTON>
      </RecentContent>
    </BACKDROPCONTAINER>
  );
}

const RecentContent = styled(MAIN)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
`;

export const RecentCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const RecentCard = styled.div`
  min-height: 200px;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;

  &:hover {
    background: #f5f5f5;
    & .catalog-img {
      transform: scale(1.08);
    }
  }

  @media (max-width: 480px) {
    align-items: center;
  }
`;

export const RecentImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: all 0.4s ease;

  @media (max-width: 480px) {
    padding: 8px 0;
    width: 90%;
  }
`;

export const Price = styled(H2)`
  font-size: 1rem;
`;

export const Perks = styled.div`
  /* width: 90%; */
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const BriefDescription = styled.p`
  line-height: 1.3;

  @media (max-width: 480px) {
    text-align: center;
  }
`;
