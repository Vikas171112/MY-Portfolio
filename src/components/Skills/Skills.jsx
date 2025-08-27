import { Badge } from "@/components/ui/badge";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiReactquery,
  SiJquery,
  SiShadcnui,
  SiReactbootstrap,
  SiExpress,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React", icon: <SiReact className="text-sky-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
    { name: "ExpressJs", icon: <SiExpress className="text-emerald-500" /> },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      {skills.map((skill, index) => (
        <Badge
          key={index}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-lg 
          bg-black/90 backdrop-blur-md border border-white/30 shadow-md
          hover:shadow-xl hover:-translate-y-1 hover:scale-105 
          transition-all duration-300 ease-in-out cursor-pointer"
        >
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-medium">{skill.name}</span>
        </Badge>
      ))}
    </div>
  );
}

export default Skills;
