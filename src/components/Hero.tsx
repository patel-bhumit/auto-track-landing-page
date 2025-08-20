import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="relative container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-16">
      {/* Left Text Content */}
      <div className="text-center lg:text-start space-y-8">
        <div className="text-5xl md:text-6xl font-extrabold leading-tight">
          <h1 className="inline">
            <span className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Track Every
            </span>{" "}
            Job Application
          </h1>{" "}
          with{" "}
          <h2 className="inline">
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              JobCrate
            </span>
          </h2>
        </div>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          JobCrate helps you organize, automate, and optimize your job hunt — all in one beautiful dashboard.
          <br />
          <span className="font-semibold">
            Discover new opportunities with our integrated job board and job search engine, then create tailored resumes and cover letters in seconds.
          </span>
        </p>
      </div>

      {/* Right Cards Section */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Optional Background Shadow */}
      <div className="shadow" />
    </section>
  )
}