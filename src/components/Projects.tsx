import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Real-Time Analytics Dashboard",
    description: "Built a high-performance analytics platform processing millions of events per day. Implemented WebSocket connections, data visualization, and custom caching strategies.",
    tags: ["React", "Node.js", "WebSocket", "Redis", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Microservices E-Commerce Platform",
    description: "Architected and developed a scalable e-commerce solution using microservices. Features include payment processing, inventory management, and real-time notifications.",
    tags: ["TypeScript", "Docker", "Kubernetes", "RabbitMQ", "MongoDB"],
    github: "https://github.com",
  },
  {
    title: "AI-Powered Code Review Tool",
    description: "Created an automated code review system using machine learning to detect code smells, security vulnerabilities, and suggest improvements.",
    tags: ["Python", "TensorFlow", "FastAPI", "GitHub API"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Developer Productivity CLI",
    description: "Open-source command-line tool to automate repetitive development tasks. Features include project scaffolding, Git workflows, and deployment automation.",
    tags: ["Node.js", "TypeScript", "CLI", "Open Source"],
    github: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Side Projects
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Personal projects where I explore new technologies and solve interesting problems
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border bg-card group"
              >
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
