import { SectionTitle } from "../_ui/designSystem/textSystem";
import PageHeader from "../components/PageHeader";
import Overview from "../home-sections/Overview";
import Resources from "../home-sections/Resources";
import Testimonials from "../home-sections/Testimonials";
import OurServicesSection from "./OurServicesSection";

export default function Services() {
  return (
    <div>
      <PageHeader title="Services" />
      <Overview />
      <OurServicesSection />
      <Testimonials />
    </div>
  );
}
