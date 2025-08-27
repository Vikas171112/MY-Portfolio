import Banner from "@/components/Banner/Banner";
import React from "react";
import ProjectPage from "./ProjectPage";
import SectionAbout from "@/components/About/SectionAbout";
import ContactSection from "@/components/Contact/ContactSection";

function HomePAge() {
  return (
    <div>
      <Banner />
      <ProjectPage />
      <SectionAbout />
      <ContactSection />
    </div>
  );
}

export default HomePAge;
