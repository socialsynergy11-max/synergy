import { Card } from "@/components/ui/card";
import { Linkedin, Mail, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Lead",
    bio: "Passionate about creating social impact and leading our team towards meaningful community engagement.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    linkedin: "#",
    email: "priya@bnmit.edu",
    instagram: "#",
  },
  {
    name: "Rahul Kumar",
    role: "Vice Lead",
    bio: "Dedicated to organizing impactful events and fostering connections within our college community.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    linkedin: "#",
    email: "rahul@bnmit.edu",
    instagram: "#",
  },
  {
    name: "Ananya Reddy",
    role: "Secretary",
    bio: "Ensuring smooth operations and effective communication across all club initiatives and activities.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
    linkedin: "#",
    email: "ananya@bnmit.edu",
    instagram: "#",
  },
  {
    name: "Arjun Patel",
    role: "Event Coordinator",
    bio: "Creative mind behind our events, bringing innovative ideas to life and creating memorable experiences.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    linkedin: "#",
    email: "arjun@bnmit.edu",
    instagram: "#",
  },
  {
    name: "Sneha Iyer",
    role: "Graphics Lead",
    bio: "Amplifying our voice online and engaging with our community through creative digital content.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
    linkedin: "#",
    email: "sneha@bnmit.edu",
    instagram: "#",
  },
  {
    name: "Vikram Singh",
    role: "Student Coordinator",
    bio: "Building bridges with external organizations and expanding our impact beyond campus boundaries.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    linkedin: "#",
    email: "vikram@bnmit.edu",
    instagram: "#",
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 gradient-text">
            Meet Our Core Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            The dedicated leaders driving Social Synergy's mission of creating meaningful
            social impact and fostering community connections.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="p-5 md:p-6 bg-card border-border hover-lift cursor-pointer animate-scale-in overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-5 md:mb-6">
                <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden bg-muted border-4 border-primary/20 group-hover:border-primary/50 transition-colors">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="text-center mb-3 md:mb-4">
                <h3 className="text-xl md:text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm md:text-base text-primary font-semibold">{member.role}</p>
              </div>

              <p className="text-muted-foreground text-center mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
                {member.bio}
              </p>

              <div className="flex justify-center gap-3 pt-4 border-t border-border">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group/link"
                >
                  <Linkedin className="w-5 h-5 text-primary group-hover/link:scale-110 transition-transform" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors group/link"
                >
                  <Mail className="w-5 h-5 text-secondary group-hover/link:scale-110 transition-transform" />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group/link"
                >
                  <Instagram className="w-5 h-5 text-accent group-hover/link:scale-110 transition-transform" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-slide-up">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in joining our core team? We're always looking for passionate individuals
            who want to make a difference. Reach out to us to learn about opportunities!
          </p>
        </div>
      </div>
    </section>
  );
};
