import { Card } from "@/components/ui/card";
import { Megaphone, GraduationCap, HandHeart, Mic } from "lucide-react";

const activities = [
  {
    icon: Megaphone,
    title: "Awareness Campaigns",
    description:
      "Regular campaigns on social media and campus to raise awareness about pressing social issues including mental health, equality, and sustainability.",
    color: "text-primary",
  },
  {
    icon: GraduationCap,
    title: "Educational Workshops",
    description:
      "Interactive sessions and workshops featuring guest speakers, discussions, and hands-on activities to educate students on various social topics.",
    color: "text-secondary",
  },
  {
    icon: HandHeart,
    title: "Community Service",
    description:
      "Organized volunteering opportunities and outreach programs to directly contribute to local communities and create tangible impact.",
    color: "text-accent",
  },
  {
    icon: Mic,
    title: "Panel Discussions",
    description:
      "Hosting thought-provoking discussions with experts, activists, and community leaders to explore diverse perspectives on social issues.",
    color: "text-primary",
  },
];

export const Activities = () => {
  return (
    <section id="activities" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse range of activities ensures there's something for everyone interested in
            making a positive social impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover-lift cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <activity.icon className={`w-8 h-8 ${activity.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 animate-slide-up">
          <h3 className="text-2xl font-bold mb-4">Get Involved Today</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Whether you're passionate about environmental issues, social justice, community service,
            or personal development, Social Synergy offers opportunities for you to make a difference.
            Join us in our mission to create a more aware and connected community!
          </p>
        </div>
      </div>
    </section>
  );
};
