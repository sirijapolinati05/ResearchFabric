import logo from "@/assets/LandingPage/research-fabric-footer.png";
import { ArrowRightIcon } from "@/components/ui/Icons";

const menuLinks = [
  "Why RESEARCHFABRIC",
  "Services",
  "Knowledge Area",
  "Featured Insights",
  "Success Stories",
  "Opportunities",
];

const footerLogoShellClass =
  "relative h-9 w-[110px] sm:h-10 sm:w-[120px] lg:h-10 lg:w-[125px]";
const footerLogoImageClass =
  "absolute inset-0 h-full w-full scale-[1.25] sm:scale-[1.3] origin-left object-contain";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      
      {/* TOP */}
      <div className="page-shell mx-auto py-8 sm:py-10">
        <div className="grid grid-cols-1 gap-8 text-center sm:gap-10 md:grid-cols-3 md:text-left">

          {/* LOGO */}
          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className={`flex items-center ${footerLogoShellClass}`}
            >
              <img
                src={logo}
                alt="Research Fabric"
                className={footerLogoImageClass}
              />
            </button>
          </div>

          {/* MENU */}
          <div>
            <h4 className="mb-3 text-[16px] font-bold text-foreground">
              Menu
            </h4>

            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="inline-block text-[14px] text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div className="w-full max-w-md mx-auto md:mx-0">
            <h4 className="mb-3 text-[16px] font-bold text-foreground">
              Subscribe
            </h4>

            <div className="group flex w-full overflow-hidden rounded">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full flex-1 bg-muted px-3 py-2 text-[14px] sm:text-[15px] text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
              />

              <button
                className="flex items-center justify-center bg-navy px-3 sm:px-4 text-primary-foreground transition-all duration-300 hover:bg-navy-light hover:shadow-md active:scale-95"
              >
                <ArrowRightIcon size={14} />
              </button>
            </div>

            <p className="mt-2 text-[13px] sm:text-[14px] text-muted-foreground">
              *Send Message
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-border bg-background">
        <div className="page-shell mx-auto flex flex-col items-center justify-between gap-2 py-4 text-center sm:flex-row sm:text-left">
          
          <p className="text-[13px] sm:text-[14px] text-muted-foreground">
            (c) 2022 DIGITALFABRIC. All Rights Reserved
          </p>

          <p className="text-[13px] sm:text-[14px] text-muted-foreground">
            Hyderabad, Telangana, India
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;