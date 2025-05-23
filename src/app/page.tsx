import FrontendLayout from "@/components/layouts/FrontendLayout";
import Services from "@/components/sections/Services";
import HighlightedProject from "@/components/sections/HighlightedProject";
import Skills from "@/components/sections/Skills";
import workData from "@/data/workData";
import skillsData from "@/data/skillData";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default async function Home() {
  const works = workData;
  const skills = skillsData;
  const featuredWorks = works.filter((item) => item.is_featured === true);

  return (
    <FrontendLayout>
      <Hero />
      <About />
      <Services />
      <Skills skills={skills} />
      {featuredWorks && <HighlightedProject featuredWorks={featuredWorks} />}
    </FrontendLayout>
  );
}
