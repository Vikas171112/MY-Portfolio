import React from "react";
import { Badge } from "../ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";

function ContactBadge() {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      <Badge
        variant="outline"
        className="flex items-center gap-2 px-4 py-2 rounded-full text-base hover:bg-black hover:text-white transition"
      >
        <Github size={18} />
        Github
      </Badge>

      <Badge
        variant="outline"
        className="flex items-center gap-2 px-4 py-2 rounded-full text-base hover:bg-blue-600 hover:text-white transition"
      >
        <Linkedin size={18} />
        LinkedIn
      </Badge>

      <Badge
        variant="outline"
        className="flex items-center gap-2 px-4 py-2 rounded-full text-base hover:bg-red-500 hover:text-white transition"
      >
        <Mail size={18} />
        Email
      </Badge>
    </div>
  );
}

export default ContactBadge;
