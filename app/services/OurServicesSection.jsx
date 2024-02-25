import {
  Description,
  ResourceCard,
  ResourceCardsContainer,
  ResourceIcon,
  ResourcesContent,
  ResourcesSection,
  ResourcesTitle,
} from "../home-sections/Resources";

import { FaRegMessage } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { GiFamilyHouse } from "react-icons/gi";

import data from "@/data";
import { H2 } from "../_ui/designSystem/textSystem";

export default function OurServicesSection() {
  const { services } = data;

  // Define an object to map icon names to their respective components
  const iconMap = {
    FaRegMessage,
    IoIosStar,
    GiFamilyHouse,
  };

  return (
    <ResourcesSection>
      <ResourcesContent>
        <ResourcesTitle>Our Services</ResourcesTitle>
        <ResourceCardsContainer $columnWidth="300px">
          {services.map((services, i) => {
            // Dynamically select the icon component based on resource.icon
            const IconComponent = iconMap[services.icon];
            return (
              <ResourceCard key={i}>
                {/* Render the icon component */}
                <ResourceIcon>
                  <IconComponent size={36} />
                </ResourceIcon>
                <H2>{services.title}</H2>
                <Description>{services.description}</Description>
              </ResourceCard>
            );
          })}
        </ResourceCardsContainer>
      </ResourcesContent>
    </ResourcesSection>
  );
}
