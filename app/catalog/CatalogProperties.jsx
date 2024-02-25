"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  BriefDescription,
  Perks,
  Price,
  RecentCard,
  RecentImage,
} from "../home-sections/RecentProperties";
import { H2 } from "../_ui/designSystem/textSystem";
import data from "@/data";

const { catalogProperties } = data;

export default function CatalogProperties() {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 2;

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = catalogProperties?.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <CatalogCardsContainer>
        {currentProperties?.map((property, i) => (
          <CatalogCard key={i} href={`/catalog/${property.id}`}>
            <RecentCard>
              <RecentImage
                src={property.mainImage}
                alt={property.name}
                className="catalog-img"
              />
              <H2>{property.name}</H2>
              <Price>{property.price}</Price>
              <Perks>
                <p>{property.size}</p>
                <p>{property.bdrms}</p>
                <p>{property.bthrms}</p>
              </Perks>
              <BriefDescription>{property.description}</BriefDescription>
            </RecentCard>
          </CatalogCard>
        ))}
      </CatalogCardsContainer>
      <Pagination>
        {catalogProperties?.length > propertiesPerPage &&
          Array.from(
            {
              length: Math.ceil(catalogProperties?.length / propertiesPerPage),
            },
            (_, index) => (
              <PageNumber
                key={index}
                onClick={() => paginate(index + 1)}
                className={`${index + 1 === currentPage ? "active" : ""}`}
              >
                {index + 1}
              </PageNumber>
            )
          )}
      </Pagination>
    </div>
  );
}

const CatalogCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const CatalogCard = styled(Link)`
  color: #000;
  text-decoration: none;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 24px;
  color: ${(theme) => theme.theme.text};
  border: 1px solid gray;

  &.active {
    color: #fff;
    background: #ffa200;
    border: none;
  }
`;
