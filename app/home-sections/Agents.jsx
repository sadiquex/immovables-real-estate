"use client";

import { styled } from "styled-components";
import { H2, SectionTitle } from "../_ui/designSystem/textSystem";
import { MAIN } from "../_ui/uiContainers";
import data from "../../data";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BUTTON } from "../_ui/uiComponents";

const { agents } = data;

export default function Agents() {
  return (
    <AgentsContent>
      <SectionTitle>Real Estate Agents</SectionTitle>
      <AgentsCardsContainer>
        {agents.map((agent, i) => (
          <AgentCard key={i}>
            <AgentImage src={agent.image} alt={agent.name} />
            <H2>{agent.name}</H2>
            <AgentTitle>{agent.title}</AgentTitle>
            <Socials>
              <FaFacebookSquare size={30} />
              <FaInstagramSquare size={30} />
              <FaLinkedin size={30} />
            </Socials>
          </AgentCard>
        ))}
      </AgentsCardsContainer>
      <BUTTON>VIEW ALL AGENTS</BUTTON>
    </AgentsContent>
  );
}

export const AgentsContent = styled(MAIN)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    padding: 20px 0;
  }
`;

export const AgentsCardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 480px) {
    gap: 20px;
    width: 90%;
    overflow-x: scroll;
    justify-content: flex-start;
  }
`;

const AgentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 8px;

  &:hover {
    background: #f5f5f5;
  }

  @media (max-width: 480px) {
    background: #f5f5f5;
    min-width: 300px;
    padding: 8px 0;
  }
`;

const AgentImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

const AgentTitle = styled(H2)`
  color: orange;
  font-size: 1rem;
`;

const Socials = styled.div`
  display: flex;
  gap: 8px;

  > * {
    transition: all 0.4s ease;
  }

  > *:hover {
    color: orangered;
  }
`;
