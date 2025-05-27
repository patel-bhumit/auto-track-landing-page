// import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt="AutoTrack Preview"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                AutoTrack is{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Coming Soon
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                We're building AutoTrack to help job seekers stay organized, write better applications, and see their progress with clarity.
                No more spreadsheets. No more chaos.
              </p>
              
              <ul className="list-disc pl-5 text-muted-foreground mt-6 space-y-2 text-lg">
                <li>Track every job you apply to</li>
                <li>Generate personalized AI cover letters</li>
                <li>Set goals and view weekly progress</li>
                <li>Manage multiple resumes in one place</li>
              </ul>

              <div className="flex gap-4 mt-8">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-sm"
                />
                <Button>
                  Notify Me
                </Button>
              </div>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
