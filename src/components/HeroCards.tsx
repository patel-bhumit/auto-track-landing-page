import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
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

export const HeroCards = () => {
  return (
    <div className="hidden lg:grid gap-6 max-w-6xl mx-auto">

      {/* Pricing Card: Bottom Right */}
      <Card className="col-start-4 row-start-1 col-span-6 row-span-2 rounded-2xl bg-muted/50 border border-muted shadow-md hover:translate-y-[-2px] transition-transform">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Free Plan</CardTitle>
            <Badge variant="secondary" className="text-xs text-primary">
              Beta Access
            </Badge>
          </div>
          <div className="text-3xl font-bold mt-1">
            $0 <span className="text-muted-foreground text-base">/month</span>
          </div>
          <CardDescription className="mt-1">
            All the essential tools you need to organize and optimize your job search.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Get Early Access</Button>
        </CardContent>
        {/* line */}
        <hr className="w-4/5 m-auto mb-4" />
        <CardFooter className="flex flex-col gap-3 mt-4 items-start">
          {["Track Applications", "Generate Cover Letters", "Progress Overview"].map(
            (item) => (
              <span key={item} className="flex items-center">
                <Check className="text-green-500 w-4 h-4" />
                <span className="ml-2">{item}</span>
              </span>
            )
          )}
        </CardFooter>
      </Card>

      {/* Feature Card: Top Left */}
      <Card className="row-start-2 col-start-1 col-span-3 row-span-2 rounded-2xl h-min bg-muted/50 border border-muted shadow-md hover:translate-y-[-2px] transition-transform">
        <CardHeader>
          <CardTitle className="text-2xl">One Dashboard. Full Control.</CardTitle>
          <CardDescription className="mt-2">
            All your job applications, resumes, and goals — organized in one place.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <Button className="w-full md:w-auto">Start Tracking</Button>
        </CardContent>
      </Card>

      {/* Light & Dark Mode Feature: Top Right */}
      <Card className="row-start-3 col-start-4 col-span-5 rounded-2xl bg-muted/50 border border-muted shadow-md hover:translate-y-[-2px] transition-transform">
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

      

    </div>
  );
};
