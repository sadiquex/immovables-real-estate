import { SectionTitle } from "../_ui/designSystem/textSystem";
import { MAIN } from "../_ui/uiContainers";
import Map from "../catalog/Map";
import PageHeader from "../components/PageHeader";
import {
  ContactCard,
  ContactContainer,
  ContactContent,
  ContactIcon,
  ContactTitle,
  ContactValue,
  Contact_Button,
  Contact_Form_Wrapper,
  InputField,
} from "./contactStyles";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";

export default function Contacts() {
  const contactInformation = [
    {
      title: "Phone",
      value: "+233 50 369 9012",
      icon: <FaPhone size={24} />,
    },
    {
      title: "Email",
      value: "sadique@immovables.com",
      icon: <FaEnvelope size={24} />,
    },
    {
      title: "Address",
      value: "123 Immovables Street, Canada",
      icon: <FaLocationCrosshairs size={24} />,
    },
    {
      title: "Working Hours",
      value: "Mon - Fri: 9:00 AM - 5:00 PM",
      icon: <FaClock size={24} />,
    },
  ];

  const inputFieldValues = [
    "First Name",
    "Last Name",
    "Phone Number",
    "Email",
    "Message",
  ];

  return (
    <div>
      <PageHeader title="Reach out to Us!" />
      <ContactContainer>
        <MAIN>
          <ContactContent>
            {contactInformation.map((info, index) => (
              <ContactCard key={index}>
                <ContactTitle>
                  <ContactIcon>{info.icon}</ContactIcon>
                  <h3>{info.title}</h3>
                </ContactTitle>
                <ContactValue>{info.value}</ContactValue>
              </ContactCard>
            ))}
          </ContactContent>
          <SectionTitle>Get In Touch</SectionTitle>
          <Contact_Form_Wrapper>
            {inputFieldValues.map((input, i) => (
              <InputField placeholder={input} key={i} />
            ))}
          </Contact_Form_Wrapper>
          <Contact_Button>Send message</Contact_Button>
        </MAIN>
        <Map />
      </ContactContainer>
    </div>
  );
}
