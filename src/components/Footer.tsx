import { Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold gradient-text mb-3 md:mb-4">Social Synergy</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Building connections, creating impact, and fostering social awareness at BNM Institute
              of Technology.
            </p>
          </div>

          <div>
            <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="block text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#events" className="block text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                Events
              </a>
              <a href="#activities" className="block text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                Activities
              </a>
              <a href="#team" className="block text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                Team
              </a>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Connect</h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://instagram.com/socialsynergy.bnmit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </a>
              <a
                href="https://linkedin.com/company/socialsynergy-bnmit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </a>
              <a
                href="mailto:socialsynergy@bnmit.edu"
                className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
          <p>© 2025 Social Synergy - BNM Institute of Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
