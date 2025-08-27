import React from "react";
import ProjectCard from "@/components/Cards/ProjectCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function ProjectPage() {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Messaging Slack",
      description:
        "A modern Slack-like Messaging Application frontend built with React + Tailwind CSS + Context API + Socket.io.This project provides a real-time messaging experience with channel-based communication and direct messaging — designed with clean UI components and scalability in mind",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "ShadeCN",
        "TailwindCSS",
      ],
      link: "https://github.com/Vikas171112/Meessaging-Slack-Frontend",
    },
    {
      title: "CryptoHeaven",
      description:
        "Crypto tracker app with live charts, coin search, and market trends using CoinGecko API.CryptoHeaven is a React frontend that uses the CoinGecko API to show live cryptocurrency data, trending coins, NFT info, and detailed pages for coins, exchanges and global market metrics.",
      tech: ["React", "Context API", "Tailwind CSS", "Chart.js"],
      link: "https://github.com/Vikas171112/CryptoHeaven-CoinGecko",
    },
    {
      title: "E-learning",
      description:
        "This is a full-stack E-Learning web application that provides role-based access for admins and users. Admins can upload and manage courses, while users can explore and view them seamlessly. .",
      tech: ["React", "Redux", "Node.js", "MongoDB", "Cloudinary"],
      link: "https://github.com/Vikas171112/E-learning",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12"> My Projects</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>

        {/* See More Button Centered */}
        <div className="flex justify-center mt-10">
          <Button
            onClick={() => {
              navigate("/projects");
            }}
          >
            See More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
