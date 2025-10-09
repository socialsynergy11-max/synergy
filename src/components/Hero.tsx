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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 md:top-20 left-10 md:left-20 w-40 md:w-72 h-40 md:h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-48 md:w-96 h-48 md:h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 md:mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm text-primary">Building Connections, Creating Impact</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-slide-up leading-tight">
            Welcome to{" "}
            <span className="gradient-text">Social Synergy</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 animate-slide-up px-4" style={{ animationDelay: "0.2s" }}>
            BNM Institute of Technology's premier club for fostering social awareness,
            community engagement, and meaningful connections.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-slide-up px-4" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg group w-full sm:w-auto"
              onClick={() => scrollToSection("about")}
            >
              Explore Our Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base md:text-lg border-primary/50 hover:bg-primary/10 text-primary w-full sm:w-auto"
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
