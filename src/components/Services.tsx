import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card";
import {
  ChartIcon,
  WalletIcon,
  MagnifierIcon
} from "./Icons";

import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Organized Application Flow",
    description:
      "Keep your job applications structured with custom statuses, notes, and timelines — so nothing slips through the cracks.",
    icon: <ChartIcon />,
  },
  {
    title: "Job Search Made Simple",
    description:
      "Discover opportunities faster with integrated listings and real-time tracking of your progress across roles.",
    icon: <WalletIcon />,
  },
  {
    title: "Automation That Saves Time",
    description:
      "Auto-generate personalized cover letters, autofill repetitive details, and track your goals — automatically.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Built-in{" "}
            </span>
            Support Features
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            JobCrate is packed with tools that remove friction from your job search. Spend less time organizing — and more time applying.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-2 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="JobCrate dashboard illustration"
        />
      </div>
    </section>
  );
};
