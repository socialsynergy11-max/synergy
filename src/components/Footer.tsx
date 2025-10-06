import { Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Social Synergy</h3>
            <p className="text-muted-foreground">
              Building connections, creating impact, and fostering social awareness at BNM Institute
              of Technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#events" className="block text-muted-foreground hover:text-primary transition-colors">
                Events
              </a>
              <a href="#activities" className="block text-muted-foreground hover:text-primary transition-colors">
                Activities
              </a>
              <a href="#team" className="block text-muted-foreground hover:text-primary transition-colors">
                Team
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/socialsynergy.bnmit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://linkedin.com/company/socialsynergy-bnmit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:socialsynergy@bnmit.edu"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© 2025 Social Synergy - BNM Institute of Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
