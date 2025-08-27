import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { InfoCard } from "@/pages/AboutPage";

function SectionAbout() {
  const navigate = useNavigate();
  return (
    <section className="w-full py-16 bg-gray-50 " id="about">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>

        <Card className="shadow-lg border-none">
          <CardHeader className="flex items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback>VJ</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-2xl font-bold">Hi, I'm Vikas Jha</h3>
              <p className="text-gray-500">
                Full Stack Developer | MERN | React Enthusiast
              </p>
            </div>
          </CardHeader>

          <CardContent>
            <InfoCard title="About Me" description="Who I am & what I do">
              <p className="text-muted-foreground mb-3">
                I started my journey as a self-taught developer, and quickly
                grew into building full-stack applications using modern
                frameworks. From designing responsive UIs to architecting secure
                backends, I enjoy working across the stack.
              </p>
              <p className="text-muted-foreground">
                My goal is to craft{" "}
                <span className="font-medium">impactful digital products </span>
                that not only look good but also scale well. Currently, I’m
                working as a freelance developer and open for exciting
                opportunities.
              </p>
            </InfoCard>

            <div className="flex gap-4 mt-6">
              <Button>Download Resume</Button>
              <Button
                variant="outline"
                onClick={() => {
                  navigate("/about");
                }}
              >
                Know More About Me
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default SectionAbout;
