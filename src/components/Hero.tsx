
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { HeroCards, testimonials } from "./HeroCards";
import { buttonVariants } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative h-full container grid lg:grid-cols-2 place-items-center mb-12 py-12 sm:py-16 md:py-24 lg:py-32">
      {/* Left Text Content */}
      <div className="text-center lg:text-start space-y-6 md:space-y-8">
        <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <h1 className="inline">
            <span className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Track Every
            </span>{" "}
            Job Application
          </h1>{" "}
          with{" "}
          <h2 className="inline">
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              AutoTrack
            </span>
          </h2>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          AutoTrack helps you organize, automate, and optimize your job hunt — all in one beautiful dashboard.
          <br />
          <span className="font-semibold">
            Discover new opportunities with our integrated job board and job search engine, then create tailored resumes and cover letters in seconds.
          </span>
        </p>

        <div className="mt-4 sm:mt-6 space-y-4">
      {/* Primary CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://dashboard.jobcrate.net"
          className={buttonVariants({ variant: "default", size: "lg" }) + " group w-full sm:w-auto"}
        >
          Start Free • No Card
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href="/demo"
          className={buttonVariants({ variant: "outline", size: "lg" }) + " w-full sm:w-auto"}
        >
          Watch 60s Demo
        </a>
      </div>

      {/* Trust row */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <ShieldCheck className="w-4 h-4" />
          GDPR-ready • Private by default
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="inline-flex items-center gap-1">
          <Star className="w-4 h-4" />
          Loved by 1,200+ job seekers
        </span>
      </div>
    </div>

    <div className="flex sm:flex md:flex relative lg:hidden h-24 overflow-hidden marquee-paused fade-edges rounded-lg">
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


    </div>

      {/* Right Cards Section */}
      <div className="z-10">
        <HeroCards />
      </div>

      
      {/* Optional Background Shadow */}
      <div className="shadow" />
      {/* // Put these inside your hero container wrapper (position: relative) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full blur-3xl opacity-25 bg-gradient-to-br from-primary/40 via-fuchsia-500/30 to-cyan-400/30" />
        <div className="absolute bottom-[-60px] left-[-40px] h-80 w-80 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-emerald-400/30 via-sky-500/30 to-primary/40" />
      </div>

    </section>
  )
}
