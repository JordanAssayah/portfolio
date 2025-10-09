import { Camera, Book, Plane, Music, Mountain, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";

const hobbies = [
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and experimenting with composition and light",
  },
  {
    icon: Book,
    title: "Reading",
    description: "Sci-fi novels, technical books, and philosophy",
  },
  {
    icon: Mountain,
    title: "Hiking",
    description: "Exploring nature trails and challenging mountain peaks",
  },
  {
    icon: Music,
    title: "Music",
    description: "Playing guitar and discovering new artists across genres",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Experiencing different cultures and cuisines around the world",
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX design, typography, and visual aesthetics",
  },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Beyond Code
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            I believe in staying curious and well-rounded. Here's what I enjoy outside of software development
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border bg-card text-center group"
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground mb-4 group-hover:animate-float">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-muted-foreground text-sm">{hobby.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
