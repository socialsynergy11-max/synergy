import { Card } from "@/components/ui/card";
import { Users, Target, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Community First",
    description: "Building strong connections and fostering a supportive environment for all members.",
  },
  {
    icon: Target,
    title: "Social Impact",
    description: "Creating meaningful change through awareness campaigns and community initiatives.",
  },
  {
    icon: Heart,
    title: "Inclusivity",
    description: "Embracing diversity and ensuring everyone feels welcome and valued.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Bringing fresh ideas and creative approaches to social engagement.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 gradient-text">
            Who We Are
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Social Synergy is a vibrant community at BNM Institute of Technology dedicated to
            creating social awareness, fostering meaningful connections, and driving positive change
            through collaborative initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-5 md:p-6 bg-card border-border hover-lift cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <value.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center animate-slide-up px-4">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Our Mission</h3>
          <p className="text-base md:text-lg text-muted-foreground">
            To empower students with the knowledge, skills, and platform to address social issues,
            promote awareness, and create lasting positive impact in our college community and beyond.
            Through events, workshops, and collaborative projects, we strive to build a more connected
            and socially conscious generation.
          </p>
        </div>
      </div>
    </section>
  );
};
