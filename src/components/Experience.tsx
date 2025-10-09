import { Code, Rocket, Users, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    icon: Trophy,
    title: "Senior Software Engineer",
    period: "5+ Years",
    description: "Leading technical decisions, architecting scalable systems, and mentoring junior developers",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    period: "Expert Level",
    description: "React, TypeScript, Node.js, Python, PostgreSQL, AWS, Docker, and modern DevOps practices",
  },
  {
    icon: Rocket,
    title: "System Architecture",
    period: "Specialized",
    description: "Designing and implementing microservices, distributed systems, and cloud-native applications",
  },
  {
    icon: Users,
    title: "Team Leadership",
    period: "Proven Track",
    description: "Code reviews, knowledge sharing, agile methodologies, and cross-functional collaboration",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Experience & Expertise
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A proven track record of delivering high-impact solutions and leading technical initiatives
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border bg-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
