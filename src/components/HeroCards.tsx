import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { FaReact, FaGithub, FaStripe } from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import { buttonVariants } from "./ui/button";

const techStack = [
  { icon: <FaReact className="w-8 h-8" />, name: "React" },
  { icon: <SiFirebase className="w-8 h-8" />, name: "Firebase" },
  { icon: <SiTailwindcss className="w-8 h-8" />, name: "Tailwind" },
  { icon: <FaStripe className="w-8 h-8" />, name: "Stripe" },
  { icon: <FaGithub className="w-8 h-8" />, name: "GitHub" },
];

export const HeroCards = () => {
  return (
    <div className="hidden lg:grid gap-6 max-w-6xl mx-auto ">
      {/* Pricing Card */}
      <Card className="animate-fade-in col-start-1 row-start-2 col-span-3 row-span-1 rounded-2xl bg-muted/50 border border-muted shadow-md hover:translate-y-[-2px] transition-transform">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Free Plan</CardTitle>
            <Badge variant="secondary" className="text-xs text-primary">
              Early Access
            </Badge>
          </div>
          <div className="text-3xl font-bold mt-1">
            $0 <span className="text-muted-foreground text-base">/month</span>
          </div>
          <CardDescription className="mt-1">
            All the essential tools you need to organize and optimize your job search.
          </CardDescription>
        </CardHeader>
        <hr className="w-4/5 m-auto mb-4" />
        <CardFooter className="flex flex-col gap-3 mt-4 items-start">
          {["Track Applications", "Progress Overview"].map((item) => (
            <span key={item} className="flex items-center">
              <Check className="text-green-500 w-4 h-4" />
              <span className="ml-2">{item}</span>
            </span>
          ))}
        </CardFooter>
      </Card>

      {/* Feature Card */}
      <Card className="animate-slide-in-left row-start-3 col-start-2 col-span-2 row-span-2 rounded-2xl h-min bg-muted/50 border border-muted shadow-md hover:translate-y-[-2px] transition-transform">
        <CardHeader>
          <CardTitle className="text-2xl">One Dashboard. Full Control.</CardTitle>
          <CardDescription className="mt-2">
            All your job applications, resumes, and goals — organized in one place.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <a href="https://dashboard.jobcrate.net" className={`border ${buttonVariants({ variant: "default" })} w-full md:w-auto`}>
            Start Tracking
          </a>
        </CardContent>
      </Card>

      {/* Light & Dark Mode */}
      <Card className="animate-slide-in-right row-start-3 col-start-4 col-span-2 row-span-1 rounded-2xl bg-muted/50 border border-muted shadow-md hover:translate-y-[-2px] transition-transform">
        <CardHeader className="flex flex-row items-start gap-4">
          <div className="bg-primary/20 p-3 rounded-xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Light & Dark Mode</CardTitle>
            <CardDescription className="text-sm mt-2">
              Match your workspace — day or night — with one toggle.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* Tech Stack Card */}
      <Card className="animate-fade-in-up row-start-1 col-start-4 col-span-4 row-span-2 rounded-2xl bg-muted/50 border border-muted shadow-md  hover:translate-y-[-2px] transition-transform items-center w-full">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Built With the Best Tools</CardTitle>
          <CardDescription className="text-sm md:text-md">
            Powered by industry-leading technologies
          </CardDescription>
        </CardHeader>
   <hr className="w-4/5 m-auto mb-4" />
        <CardContent>
          <div className="flex flex-wrap md:justify-evenly md:gap-8">
            {techStack.map(({ icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {icon}
                <span className="mt-2 text-base md:text-lg font-medium">{name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
