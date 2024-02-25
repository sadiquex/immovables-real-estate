"use client";

import { FaRegMessage } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { GiFamilyHouse } from "react-icons/gi";

import { H1, H2, SectionTitle } from "../_ui/designSystem/textSystem";
import { BACKDROPCONTAINER, MAIN, SECTIONCONTENT } from "../_ui/uiContainers";
import styled from "styled-components";
import data from "@/data";

export default function Resources() {
  const { resources } = data;

  // Define an object to map icon names to their respective components
  const iconMap = {
    FaRegMessage,
    IoIosStar,
    GiFamilyHouse,
  };

  return (
    <ResourcesSection>
      <ResourcesContent>
        <ResourcesTitle>Real Estate Tools and Resources</ResourcesTitle>
        <ResourceCardsContainer $columnWidth="200px">
          {resources.map((resource, i) => {
            // Dynamically select the icon component based on resource.icon
            const IconComponent = iconMap[resource.icon];
            return (
              <ResourceCard key={i}>
                {/* Render the icon component */}
                <ResourceIcon>
                  <IconComponent size={36} />
                </ResourceIcon>
                <H2>{resource.title}</H2>
                <Description>{resource.description}</Description>
              </ResourceCard>
            );
          })}
        </ResourceCardsContainer>
      </ResourcesContent>
    </ResourcesSection>
  );
}

export const ResourcesSection = styled(BACKDROPCONTAINER)`
  background-image: url("https://images.pexels.com/photos/219532/pexels-photo-219532.jpeg?auto=compress&cs=tinysrgb&w=900");
  z-index: -10;
  color: #fff;

  &::before {
    // backdrop
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

export const ResourcesTitle = styled(SectionTitle)`
  color: ${(theme) => theme.theme.secondaryBackgroundColor};
  border-bottom: 2px solid ${(theme) => theme.theme.secondaryBackgroundColor};
`;

export const ResourcesContent = styled(MAIN)`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    padding-bottom: 20px;
  }
`;

export const ResourceCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.$columnWidth || "300px"}, 1fr)
  );
  gap: 20px;
`;

export const ResourceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
`;

export const ResourceIcon = styled.span`
  padding: 20px;
  background-image: linear-gradient(
    -135deg,
    #f7941d 0%,
    #f16529 50%,
    #ed3426 100%
  );

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  line-height: 1.4;
  text-align: center;
`;
