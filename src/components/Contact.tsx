import { Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Open to new opportunities and interesting collaborations. 
            Feel free to reach out if you'd like to discuss technology, projects, or potential roles.
          </p>

          <Card className="p-8 border-border bg-card">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:contact@example.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Me
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>

              <div className="pt-6 border-t border-border">
                <Button variant="secondary" size="lg" asChild>
                  <a href="#" download>
                    <Download className="h-5 w-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <p className="text-muted-foreground mt-12 text-sm">
            Based in [Your Location] • Available for remote opportunities worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
