import React from "react";
import { Badge } from "../ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";

function ContactBadge() {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      <a
        href="https://github.com/Vikas171112"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Badge
          variant="outline"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-base hover:bg-black hover:text-white transition cursor-pointer"
        >
          <Github size={18} />
          Github
        </Badge>
      </a>

      <a
        href="https://www.linkedin.com/in/vikas-kumar-154910302/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Badge
          variant="outline"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-base hover:bg-blue-600 hover:text-white transition cursor-pointer"
        >
          <Linkedin size={18} />
          LinkedIn
        </Badge>
      </a>

      <a href="mailto:vjha6510@gmail.com">
        <Badge
          variant="outline"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-base hover:bg-red-500 hover:text-white transition cursor-pointer"
        >
          <Mail size={18} />
          Email
        </Badge>
      </a>
    </div>
  );
}

export default ContactBadge;
