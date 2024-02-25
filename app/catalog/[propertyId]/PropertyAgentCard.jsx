import React from "react";
import {
  AgentImage,
  AgentText,
  PropertyAgentCard_Wrapper,
} from "./singlePropertyStyles";
import { H2 } from "@/app/_ui/designSystem/textSystem";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

export default function PropertyAgentCard({ agent }) {
  return (
    <PropertyAgentCard_Wrapper>
      <AgentImage>
        <Image src={agent?.image} alt={agent?.name} width={100} height={100} />
      </AgentImage>
      <AgentText>
        <H2>{agent?.name}</H2>
        <p>
          <FaPhoneAlt size={20} />
          {agent?.phoneNumber}
        </p>
        <p>
          <MdEmail size={20} />
          {agent?.emailAddress}
        </p>
      </AgentText>
    </PropertyAgentCard_Wrapper>
  );
}
