import { ButtonsContainer, HeroContent, HeroTitle } from "./HomeStyles";
import { BUTTON } from "./_ui/uiComponents";
import { BACKDROPCONTAINER } from "./_ui/uiContainers";
import ImageSlider from "./components/ImageSlider";
import Overview from "./home-sections/Overview";
import RecentProperties from "./home-sections/RecentProperties";
import Resources from "./home-sections/Resources";
import Agents from "./home-sections/Agents";
import Blog from "./home-sections/Blog";
import Testimonials from "./home-sections/Testimonials";
import FeaturedItems from "./home-sections/FeaturedItems";

export default function Home() {
  return (
    <>
      <BACKDROPCONTAINER>
        <ImageSlider />
        <HeroContent>
          <HeroTitle>Professional realtor works for you</HeroTitle>
          <ButtonsContainer>
            <BUTTON>VIEW MORE</BUTTON>
            <BUTTON>CONTACT US</BUTTON>
          </ButtonsContainer>
        </HeroContent>
      </BACKDROPCONTAINER>
      <FeaturedItems />
      <Overview />
      <RecentProperties />
      <Resources />
      <Agents />
      <Blog />
      <Testimonials />
    </>
  );
}
