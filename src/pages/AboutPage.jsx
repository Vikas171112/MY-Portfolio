import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  MapPin,
  Code,
  Coffee,
  CoffeeIcon,
} from "lucide-react";
import { SiChessdotcom } from "react-icons/si";

// 🔹 Reusable InfoCard
export function InfoCard({ title, description, children }) {
  return (
    <Card className="rounded-2xl mt-6">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function EducationItem({ degree, duration, institute }) {
  return (
    <div className="rounded-xl border p-4">
      <div className="flex items-center justify-between">
        <p className="font-medium">{degree}</p>
        <span className="text-xs text-muted-foreground">{duration}</span>
      </div>
      <p className="text-sm text-muted-foreground">{institute}</p>
    </div>
  );
}

export default function AboutPage() {
  const skills = [
    "React",
    "TypeScript",
    "ContextApi",
    "Node.js",
    "Express",
    "MongoDB",
    "TailwindCSS",
    "Zustand",
    "JWT/Auth",
    "REST APIs",
    "TanstackQuery",
    "ShadeCnUi",
  ];

  const strengths = [
    { icon: <Code className="h-4 w-4" />, text: "Clean, scalable code" },
    {
      icon: <Coffee className="h-4 w-4" />,
      text: "Problem solver & quick learner",
    },
    { icon: <MapPin className="h-4 w-4" />, text: "Collaboration & teamwork" },
  ];

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">
              Hi, I’m <span className="text-primary">Vikas Jha</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A passionate{" "}
              <span className="font-medium">Full Stack Developer</span>
              specializing in MERN & modern web technologies. I love turning
              complex problems into simple, elegant solutions.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <Badge variant="secondary" className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> Bengaluru, IN
              </Badge>
              <Badge className="bg-primary/10 text-primary">Open to Work</Badge>
            </div>
          </div>

          <div className="flex gap-2">
            <Button asChild variant="outline">
              <a href="mailto:vjha6510@gmail.com">
                <Mail className="h-4 w-4 mr-2" /> Email
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://github.com/Vikas171112"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4 mr-2" /> GitHub
              </a>
            </Button>
            <Button asChild>
              <a href="/Vikas_Jha_Resume.pdf" download>
                <Download className="h-4 w-4 mr-2" /> Resume
              </a>
            </Button>
          </div>
        </div>

        <Separator className="my-10" />

        <InfoCard title="Skills" description="Tools & technologies I work with">
          <div className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="rounded-full px-3 py-1 hover:bg-secondary/80 transition"
              >
                {s}
              </Badge>
            ))}
          </div>
        </InfoCard>

        <InfoCard title="Education" description="My academic background">
          <div className="space-y-5">
            <EducationItem
              degree="Masters in Computer Application "
              duration="2022 – 2025"
              institute="Bengaluru University, Bengaluru"
            />
            <EducationItem
              degree="Bachelors in Computer Application"
              duration="2019 – 2022"
              institute="IIMT College Of Management ,Greater Noida"
            />
          </div>
        </InfoCard>

        <InfoCard title="Strengths" description="What makes me stand out">
          <div className="grid gap-3 md:grid-cols-3">
            {strengths.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-muted/30 p-3 rounded-lg"
              >
                {s.icon}
                <span className="text-sm">{s.text}</span>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard title="Beyond Coding">
          <p className="text-muted-foreground text-sm">
            When I’m not coding, you’ll find me exploring tech blogs, sipping
            coffee <CoffeeIcon className="inline" />, or playing chess{" "}
            <SiChessdotcom className="inline" />. I believe creativity outside
            work makes me a better developer inside work.
          </p>
        </InfoCard>

        <InfoCard
          title="Let’s Connect"
          description="I’m always excited to collaborate on interesting projects!"
        >
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <a href="mailto:vjha6510@gmail.com">
                <Mail className="h-4 w-4 mr-2" /> Say Hello
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://www.linkedin.com/in/vikas-kumar-154910302/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
              </a>
            </Button>
          </div>
        </InfoCard>
      </div>
    </section>
  );
}
