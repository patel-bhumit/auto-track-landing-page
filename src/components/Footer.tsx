import LogoIcon from "../assets/icon.svg";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto border-muted" />

      <section className="container py-20 flex flex-col xl:flex-row justify-between items-start gap-12">
        {/* Left side - logo and description */}
        <div className="max-w-md space-y-3">
          <a
            href="/"
            className="font-bold text-xl flex items-center gap-2"
          >
            <img src={LogoIcon} alt="Logo" className="size-12" /> 
            JobCrate
          </a>
          <p className="text-muted-foreground text-sm">
            JobCrate is a job application tracker designed for clarity, speed, and growth. Stay organized, stay consistent — and land that offer.
          </p>
        </div>

        {/* Right side - navigation links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Links</h3>
          <a href="#features" className="opacity-60 hover:opacity-100">Features</a>
          <a href="https://dashboard.jobcrate.net" className="opacity-60 hover:opacity-100">Get Started</a>
          <a className="opacity-60 cursor-not-allowed">FAQ (Coming Soon)</a>
        </div>
      </section>

      <section className="container pb-14 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} JobCrate. Built with ❤️ using ShadCN + React.
        </p>
      </section>
    </footer>
  );
};
