import { SectionTitle } from "../_ui/designSystem/textSystem";
import PageHeader from "../components/PageHeader";
import Agents from "../home-sections/Agents";
import Overview from "../home-sections/Overview";

export default function AboutPage() {
  return (
    <div>
      <PageHeader title="About Immovables" />
      <Overview />
      {/* <SectionTitle>Our Team</SectionTitle> */}
      <Agents />
    </div>
  );
}
