import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

function ProjectCard({ title, description, tech, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="shadow-md min-h-[320px]  hover:shadow-xl transition-all duration-300 rounded-2xl border border-border bg-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <Badge key={i} variant="secondary" className="px-3 py-1 text-sm">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            View Project →
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
