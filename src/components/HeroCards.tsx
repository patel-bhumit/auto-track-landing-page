import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Clock, Quote, ShieldCheck } from "lucide-react";

const testimonials = [
  { name: "Alex M.", role: "Recent Graduate", quote: "JobCrate helped me land my first interview in under 2 weeks." },
  { name: "Sarah L.", role: "Marketing Associate", quote: "The AI cover letters save me so much time—game changer." },
  { name: "Daniel K.", role: "Frontend Developer", quote: "Tracking applications has never been this simple or motivating." },
  { name: "Priya S.", role: "Data Analyst", quote: "I finally feel organized during my job search. Love the dashboard!" },
];

export const HeroCards = () => {
  return (
    <div className="hidden lg:grid grid-cols-12 gap-6 max-w-6xl mx-auto relative">
      {/* LEFT: Core value */}
      <Card className="col-span-7 row-span-1 rounded-2xl bg-muted/50 border border-muted shadow-md h-full flex flex-col hover:-translate-y-0.5 transition-transform">
        <CardHeader>
          <CardTitle className="text-2xl">One Dashboard. Full Control.</CardTitle>
          <CardDescription className="mt-2">
            All your job applications, resumes, and goals — organized in one place.
          </CardDescription>
        </CardHeader>
        
      </Card>

      {/* RIGHT: Pricing */}
      <Card className="row-span-2 col-span-5 rounded-2xl bg-muted/50 border border-muted shadow-md hover:-translate-y-0.5 transition-transform flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Free Plan</CardTitle>
          <Badge variant="secondary" className="text-xs text-primary">Early Access</Badge>
        </div>
        <div className="text-3xl font-bold mt-1">
          $0 <span className="text-muted-foreground text-base">/month</span>
        </div>
        <CardDescription className="mt-1">
          All the essential tools you need to organize and optimize your job search.
        </CardDescription>
      </CardHeader>

      {/* CTA + trust */}
      <CardContent className="pt-0">
        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" /> No card required
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-4 h-4" /> Cancel anytime
          </span>
        </div>
      </CardContent>

      <hr className="w-4/5 m-auto my-4" />

      {/* Included features */}
      <CardFooter className="grid grid-cols-1 gap-3 items-start">
        {[
          "Track Applications",
          "Progress Overview",
          "Job Board Access",
        ].map((item) => (
          <span key={item} className="flex items-center">
            <Check className="text-green-500 w-4 h-4" />
            <span className="ml-2">{item}</span>
          </span>
        ))}
      </CardFooter>
    </Card>

          {/* BOTTOM: Infinite Testimonials */}
          <Card className="col-span-7 rounded-2xl bg-muted/50 border border-muted shadow-md overflow-hidden relative">
            <CardHeader className="flex items-center gap-2">
              <Quote className="w-5 h-5 text-primary" />
              <CardTitle>What Users Say</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-24 overflow-hidden marquee-paused fade-edges rounded-lg">
                <div className="absolute left-0 top-0 flex space-x-4 animate-marquee">
                  {testimonials.concat(testimonials).map((t, i) => (
                    <div
                      key={i}
                      className="min-w-[260px] bg-background/80 border rounded-xl p-3 shadow-sm"
                    >
                      <p className="text-sm italic">"{t.quote}"</p>
                      <p className="text-xs mt-2 font-medium">– {t.name}, {t.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
    </div>
  );
};
