import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(rgba(15, 15, 30, 0.85), rgba(15, 15, 30, 0.85)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Building Connections, Creating Impact</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Welcome to{" "}
            <span className="gradient-text">Social Synergy</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            BNM Institute of Technology's premier club for fostering social awareness,
            community engagement, and meaningful connections.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg group"
              onClick={() => scrollToSection("about")}
            >
              Explore Our Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg border-primary/50 hover:bg-primary/10 text-primary"
              onClick={() => scrollToSection("events")}
            >
              View Events
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
