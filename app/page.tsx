import { Contact } from "@/components/Contact";
import { DesignBeforeSpending } from "@/components/DesignBeforeSpending";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { OurSolutionSection } from "@/components/OurSolutionSection";
import { Testimonials } from "@/components/Testimonials";
import { WhyChoose } from "@/components/WhyChoose";
import { WhyDifficult } from "@/components/WhyDifficult";

const page = () => {
  return (
    <div>
      <Hero />
       <OurSolutionSection />
       <WhyDifficult />
      <DesignBeforeSpending />
      <Gallery />
      <WhyChoose />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default page;
