import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Community Outreach Drive",
    date: "March 15, 2025",
    location: "Local Community Center",
    attendees: "50+ participants",
    description: "Join us for a day of giving back to the community through various outreach activities.",
    status: "Upcoming",
  },
  {
    title: "Social Awareness Workshop",
    date: "February 28, 2025",
    location: "BNMIT Auditorium",
    attendees: "100+ participants",
    description: "Interactive workshop on current social issues and how students can make a difference.",
    status: "Upcoming",
  },
  {
    title: "Mental Health Awareness Week",
    date: "February 10-17, 2025",
    location: "BNMIT Campus",
    attendees: "200+ participants",
    description: "A week-long series of events focused on mental health awareness and support.",
    status: "Completed",
  },
  {
    title: "Environmental Action Day",
    date: "January 20, 2025",
    location: "BNMIT Campus & Surroundings",
    attendees: "150+ participants",
    description: "Campus-wide initiative for environmental conservation and sustainable practices.",
    status: "Completed",
  },
];

export const Events = () => {
  return (
    <section id="events" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 gradient-text">
            Our Events
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            From awareness campaigns to hands-on community service, our events bring students
            together to create meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={index}
              className="p-5 md:p-6 bg-card border-border hover-lift cursor-pointer animate-slide-up overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-3 md:top-4 right-3 md:right-4">
                <span
                  className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold ${
                    event.status === "Upcoming"
                      ? "bg-accent/20 text-accent"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  {event.status}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 pr-20 md:pr-24">{event.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{event.description}</p>

              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex items-center gap-2 text-xs md:text-sm">
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm">
                  <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                  <span>{event.attendees}</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full group border-primary/50 hover:bg-primary/10 text-primary text-sm md:text-base"
              >
                Learn More
                <ArrowRight className="ml-2 w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
