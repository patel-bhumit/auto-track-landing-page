import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import {
  ClipboardCheck,
  Pencil,
  BarChart3,
  FileText
} from "lucide-react";
interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features = [
  {
    icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
    title: "Track Applications",
    description: "Log and manage every job you've applied to in one place.",
  },
  {
    icon: <Pencil className="w-8 h-8 text-primary" />,
    title: "AI Cover Letters",
    description: "Generate tailored letters with a single click.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: "Weekly Insights",
    description: "Visualize progress and stay on top of your goals.",
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Resume Organizer",
    description: "Store and reuse optimized resumes for different roles.",
  },
];


export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
