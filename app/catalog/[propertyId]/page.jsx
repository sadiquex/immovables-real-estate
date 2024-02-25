/* /catalog/[id].js */

import PageHeader from "@/app/components/PageHeader";
import { MAIN } from "@/app/_ui/uiContainers";
import ImageSlider from "./ImageSlider";
import { Description, SinglePropertyContainer } from "./singlePropertyStyles";
import { H2, P, SectionTitle } from "@/app/_ui/designSystem/textSystem";
import PropertyDetailsTable from "./PropertyDetailsTable";
import OtherDetails from "./OtherDetails";
import SimilarProperties from "./SimilarProperties";

import data from "@/data.json";
import { Suspense } from "react";
import Loading from "@/app/components/_ui/Loading";

export default function Property({ params }) {
  const { catalogProperties } = data;

  const findProperty = (propertyId) => {
    // make sure to convert the params to number
    return catalogProperties.find((property) => property.id === +propertyId);
  };

  // Find the property - pass id to the function
  const property = findProperty(params.propertyId);

  const { name, mainImage, otherImages, description, extraFeatures, similar } =
    property || {}; // add optional chaining {} - to prevent error

  return (
    <>
      <PageHeader title={name} bgimage={mainImage} />
      <Suspense fallback={<Loading />}>
        <MAIN>
          <SinglePropertyContainer>
            <div className="left">
              <ImageSlider images={otherImages} />
              <Description>
                <H2 className="title">Description</H2>
                <P>{description}</P>
                <PropertyDetailsTable extraFeatures={extraFeatures} />
              </Description>
            </div>
            <div className="right">
              <OtherDetails property={property} />
            </div>
          </SinglePropertyContainer>
          <SectionTitle>Similar Properties</SectionTitle>
          <SimilarProperties similar={similar} />
        </MAIN>
      </Suspense>
    </>
  );
}
