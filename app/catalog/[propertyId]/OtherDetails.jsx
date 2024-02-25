// this page is for the price, date added, realtor and other details

import { Perks } from "@/app/home-sections/RecentProperties";
import {
  Buttons_Wrapper,
  Date_Added,
  OtherDetails_Wrapper,
} from "./singlePropertyStyles";
import { FaCalendarAlt } from "react-icons/fa";
import { H2 } from "@/app/_ui/designSystem/textSystem";
import { BUTTON } from "@/app/_ui/uiComponents";
import Map from "../Map";
import PropertyAgentCard from "./PropertyAgentCard";
import { GoDotFill } from "react-icons/go";

export default function OtherDetails({ property }) {
  const {
    id,
    name,
    mainImage,
    otherImages,
    price,
    size,
    bdrms,
    bthrms,
    description,
    extraFeatures,
    agent,
  } = property || {};

  return (
    <OtherDetails_Wrapper>
      <Date_Added>
        <FaCalendarAlt />
        April 12, 2022
      </Date_Added>
      <Perks>
        <div>{size}</div>
        <GoDotFill />
        <div>{bdrms}</div>
        <GoDotFill />
        <div>{bthrms}</div>
      </Perks>
      <H2>{price}</H2>
      <Buttons_Wrapper>
        <BUTTON>Contact Agent</BUTTON>
        <BUTTON>Request a visit</BUTTON>
      </Buttons_Wrapper>
      <Map />
      <PropertyAgentCard agent={agent} />
    </OtherDetails_Wrapper>
  );
}
