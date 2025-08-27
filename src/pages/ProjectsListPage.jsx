import React from "react";
import ProjectCard from "@/components/Cards/ProjectCard";

function ProjectsListPage() {
  const personalProjects = [
    {
      title: "Messaging Slack",
      description:
        "A modern Slack-like Messaging Application frontend built with React + Tailwind CSS + Context API + Socket.io. Provides real-time messaging with channel-based communication and direct messaging.",
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
        "Crypto tracker app with live charts, coin search, and market trends using CoinGecko API. Includes detailed pages for coins, exchanges and NFT data.",
      tech: ["React", "Context API", "Tailwind CSS", "Chart.js"],
      link: "https://github.com/Vikas171112/CryptoHeaven-CoinGecko",
    },
    {
      title: "E-learning",
      description:
        "A full-stack E-Learning platform with role-based access for admins and users. Admins can upload and manage courses, while users can explore and view them seamlessly.",
      tech: ["React", "Redux", "Node.js", "MongoDB", "Cloudinary"],
      link: "https://github.com/Vikas171112/E-learning",
    },
    {
      title: "Task Manager",
      description:
        "An app for managing tasks. This project was done as a part of learning Backend with brushing up basic CRUD operations.",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      link: "https://github.com/vikas/taskmanager",
    },
    {
      title: "Learning Management System(frontend)",
      description:
        "Learning Management system just to learn basics of react and also playing around local storage usage. In this app User can login and signup like it is connected to Database. Built with React, TailwindCSS and ShadCN UI. Features smooth scroll navigation, modern design and responsive layout.",
      tech: ["React", "Tailwind CSS", "ShadCN"],
      link: "https://lms-frontend-psi-eight.vercel.app/",
    },
  ];

  const internshipProjects = [
    {
      title: "Lawvyas",
      description:
        "Lawvyas is a web application developed during my previous internship at Branding Catalyst. It is designed to provide legal information and resources in a structured and user-friendly manner. The platform allows users to explore legal topics with ease, offering a clean interface and smooth navigation.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      link: "https://github.com/Vikas171112/Lawvyas-Vikas",
    },
    {
      title: "PoliticsMitra",
      description:
        "Politics Mitra is a web application developed during my internship at Branding Catalyst. The platform helps users stay updated with the latest political news and insights. I worked on building responsive UI components, improving user experience, and integrating dynamic content rendering.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      link: "https://github.com/Vikas171112/PoliticsMitra",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold">🚀 All Projects</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Here’s a collection of my work showcasing full-stack apps, frontend
            experiments, and personal side-projects. Each project highlights a
            different aspect of my development journey.
          </p>
        </div>

        {/* Personal Projects */}
        <h2 className="text-2xl font-semibold mb-6">💻 Personal Projects</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {personalProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>

        {/* Internship Projects */}
        <h2 className="text-2xl font-semibold mb-6">👨‍💼 Internship Projects</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {internshipProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsListPage;
