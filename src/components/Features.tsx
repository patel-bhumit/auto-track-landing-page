import { cn } from "@/lib/utils";
import {
  IconBriefcase,
  IconChecklist,
  IconEdit,
  IconFileText,
  IconLayout,
  IconShieldCheck,
  IconSparkles,
} from "@tabler/icons-react";

export function Features() {
  const features = [
  {
    title: "Automated Resume Generator",
    description:
      "Instantly create tailored resumes optimized for the jobs you apply for.",
    icon: <IconFileText />,
  },
  {
    title: "Smart Cover Letter Maker",
    description:
      "Generate personalized cover letters that match the job description in seconds.",
    icon: <IconEdit />,
  },
  {
    title: "Resume Builder",
    description:
      "Use our drag-and-drop editor to customize your resume and make it stand out.",
    icon: <IconLayout />,
  },
  {
    title: "Integrated Job Board",
    description:
      "Find relevant jobs directly inside JobCrate and apply faster without switching tabs.",
    icon: <IconBriefcase />,
  },
  {
    title: "Easy Job Tracking",
    description:
      "Stay organized with a clean dashboard to track every application in one place.",
    icon: <IconChecklist />,
  },
  {
    title: "User-Friendly Interface",
    description:
      "Minimal, distraction-free design inspired by Notion — making job hunting simple.",
    icon: <IconLayout />,
  },
  {
    title: "Secure & Reliable",
    description:
      "Your data is private and protected — focus on landing the job, not worrying about security.",
    icon: <IconShieldCheck />,
  },
  {
    title: "Always Improving",
    description:
      "We’re constantly adding new features to make your job search even easier.",
    icon: <IconSparkles />,
  },
];

  return (
    <>
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 mt-20">
        Features
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
