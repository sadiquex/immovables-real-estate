import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import {
  FooterContainer,
  FooterContent,
  GridCard,
  Socials,
  FooterItemsTitle,
  Copyright,
  NewsLetterForm,
  NewsletterDesc,
  EmailIcon,
} from "./FooterStyles";
import { BUTTON } from "@/app/_ui/uiComponents";

const getCurrentYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

const currentYear = getCurrentYear();

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <GridCard>
          <Image
            width={207}
            height={41}
            src={"/assets/immovables-logo.png"}
            alt="Immovables Logo"
            href="/"
            priority
          />
          <Socials>
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaLinkedin size={30} />
            <FaSquareXTwitter size={30} />
          </Socials>
        </GridCard>
        <GridCard>
          <FooterItemsTitle>NEWSLETTER</FooterItemsTitle>
          <NewsletterDesc>
            Keep up with the latest company news and events. Enter your e-mail
            and subscribe to our newsletter.
          </NewsletterDesc>
          <NewsLetterForm>
            <EmailIcon>
              <MdEmail size={24} />
            </EmailIcon>
            <input type="text" placeholder="Enter your email..." />
            <BUTTON>SUBSCRIBE</BUTTON>
          </NewsLetterForm>
        </GridCard>
        <GridCard>
          <FooterItemsTitle>USEFUL LINKS</FooterItemsTitle>
          <ul>
            <li>Properties</li>
            <li>Amenities</li>
            <li>Rentals</li>
            <li>Mortgages</li>
            <li>Agents</li>
          </ul>
        </GridCard>
        <GridCard>
          <FooterItemsTitle>LATEST NEWS</FooterItemsTitle>
          <ul>
            <li>Top 10 Apartments in LA</li>
            <li>Choosing a Rental Property</li>
            <li>Features of Mortgage Loans</li>
          </ul>
        </GridCard>
        <Copyright>
          Sadique | immovables {currentYear} &copy;. Privacy Policy
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}
