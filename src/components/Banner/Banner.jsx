import React from "react";
import { Button } from "@/components/ui/button";
import BannerSubtitle from "./BannerSubtitle";
import ContactDialog from "../Modals/ContactModal";
import Skills from "../Skills/Skills";
import ProjectPage from "@/pages/ProjectPage";
import profile from "../Banner/Profile.jpg";

function Banner() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center bg-background"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6">
        {/* Left Side - Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hi, I’m <span className="text-primary">Vikas Jha</span>
          </h1>
          <BannerSubtitle />
          <p className="text-muted-foreground max-w-xl mx-auto md:mx-0">
            I love building beautiful, fast, and user-friendly web apps.
            Currently exploring full-stack development and creating projects
            that make an impact
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <ContactDialog>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </ContactDialog>
          </div>
        </div>
        <div className="mt-8">
          <Skills />
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
