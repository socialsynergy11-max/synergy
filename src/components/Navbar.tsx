import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">Social Synergy</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("activities")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Activities
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Team
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 animate-slide-up">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("activities")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Activities
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Team
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
            >
              Join Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
