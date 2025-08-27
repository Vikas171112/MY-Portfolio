import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import ContactDialog from "../Modals/ContactModal";
import ChatBotWidget from "./ChatBotWidgets";

function ContactSection() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-6 mt-10">
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-white">Vikas Jha</h2>
          <p className="text-sm text-gray-400 mt-2">
            Full Stack Developer | MERN | React Enthusiast
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:vikas@example.com" className="hover:text-blue-400">
              vjha6510@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+911234567890" className="hover:text-blue-400">
              +91 8825303062
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <MapPin className="h-4 w-4" /> Bengaluru, India
          </p>

          <ContactDialog>
            <Button
              asChild
              className="mt-4 w-fit rounded-full bg-blue-500 hover:bg-blue-600 transition text-white"
            >
              <a>Send Email</a>
            </Button>
          </ContactDialog>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/Vikas171112"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-kumar-154910302/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <ChatBotWidget />

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Vikas Jha. All rights reserved.
      </div>
    </footer>
  );
}

export default ContactSection;
