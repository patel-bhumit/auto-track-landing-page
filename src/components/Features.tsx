import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import growth from "../assets/growth.png";
import reflecting from "../assets/reflecting.png";
import lookingAhead from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Application Tracker",
    description:
      "Track and manage all your job applications in one place with notes, statuses, and reminders.",
    image: lookingAhead,
  },
  {
    title: "AI Cover Letter And Resume Generator",
    description:
      "Instantly generate customized cover letters and Resume tailored to your resume and job descriptions.",
    image: reflecting,
  },
  {
    title: "Weekly Progress Insights",
    description:
      "Stay motivated with visual analytics on your application activity, weekly goals, and success rate.",
    image: growth,
  },
];

const featureList: string[] = [
  "AI Cover Letter Generator",
  "Resume Organizer",
  "Job Tracker",
  "Weekly Analytics",
  "Custom Statuses",
  "Clean Dashboard UI",
  "Dark/Light Mode",
  "Free Forever Plan",
  "Easy Setup",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Features Built for{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Smarter Job Hunting
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground text-sm">
              {description}
            </CardContent>

            <CardFooter>
              <img
                src={image}
                alt={title}
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
