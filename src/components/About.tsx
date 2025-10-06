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
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Social Synergy is a vibrant community at BNM Institute of Technology dedicated to
            creating social awareness, fostering meaningful connections, and driving positive change
            through collaborative initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover-lift cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg text-muted-foreground">
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
