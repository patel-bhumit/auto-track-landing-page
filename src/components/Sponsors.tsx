import { FaReact, FaGithub, FaStripe } from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";

interface TechStackProps {
  icon: JSX.Element;
  name: string;
}

const techStack: TechStackProps[] = [
  {
    icon: <FaReact className="w-8 h-8" />,
    name: "React",
  },
  {
    icon: <SiFirebase className="w-8 h-8" />,
    name: "Firebase",
  },
  {
    icon: <SiTailwindcss className="w-8 h-8" />,
    name: "Tailwind CSS",
  },
  {
    icon: <FaStripe className="w-8 h-8" />,
    name: "Stripe",
  },
  {
    icon: <FaGithub className="w-8 h-8" />,
    name: "GitHub",
  },
];

export const Sponsors = () => {
  return (    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-6">
        Built With the Best Tools
      </h2>
      <p className="text-center text-xl md:text-2xl text-muted-foreground mb-16">
        Powered by industry-leading technologies
      </p>



      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
        {techStack.map(({ icon, name }: TechStackProps) => (
          <div
            key={name}
            className="flex flex-col items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <div className="text-3xl md:text-4xl">
              {icon}
            </div>
            <span className="text-base md:text-lg font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
