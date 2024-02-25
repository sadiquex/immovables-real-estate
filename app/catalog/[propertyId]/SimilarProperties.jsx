import { MAIN } from "@/app/_ui/uiContainers";
import data from "@/data.json";
import {
  BriefDescription,
  Perks,
  Price,
  RecentCard,
  RecentCardsContainer,
  RecentImage,
} from "@/app/home-sections/RecentProperties";
import { H2 } from "@/app/_ui/designSystem/textSystem";

const { catalogProperties } = data;

export default function SimilarProperties({ similar }) {
  // filter catalogProperties based on the IDs in the similar array
  const similarProperties = catalogProperties.filter((property) =>
    similar.includes(property.id)
  );

  return (
    <MAIN>
      <RecentCardsContainer>
        {similarProperties.map((card, i) => (
          <RecentCard key={i}>
            <RecentImage src={card.mainImage} alt={card.name} />
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
    </MAIN>
  );
}
