import Link from "next/link";
import {
  FeatureButton,
  FeatureCard,
  FeatureCardContent,
  FeatureCardsContainer,
  NoOfProperties,
  ThumbnailTitle,
} from "../HomeStyles";
import data from "@/data.json";

export default function FeaturedItems() {
  return (
    <FeatureCardsContainer>
      {data.featuredCards.map((card, i) => (
        <FeatureCard $bgimage={card.image} key={i}>
          <FeatureCardContent>
            <ThumbnailTitle>{card.title}</ThumbnailTitle>
            <NoOfProperties>{card.noOfProperties}</NoOfProperties>
            <FeatureButton>
              <Link href="/catalog">CHOOSE AN APARTMENT</Link>
            </FeatureButton>
          </FeatureCardContent>
        </FeatureCard>
      ))}
    </FeatureCardsContainer>
  );
}
