import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/LandingPage/research-fabric.png";
import lightLogo from "../assets/LandingPage/research-fabric-footer.png";
import { MenuIcon } from "@/components/ui/Icons";

const navItems = [
  { label: "Our Practices", href: "#practices" },
  { label: "CXO AI Research", href: "#cxo" },
  { label: "Analysts", href: "#analysts" },
  { label: "Process", href: "#process" },
  { label: "Latest Research", href: "#latest-research" },
];

const pageItems = [
  { label: "Technology Research", href: "/technology-research" },
  { label: "Micro-Market Research", href: "/micro-market-research" },
  { label: "Analyst Team", href: "/analyst-team" },
];

const analystTeamNavItems = [
  { label: "Leadership", href: "#leadership" },
  { label: "Analysts", href: "#analysts" },
  { label: "Research Team", href: "#research-team" },
  { label: "Download Approach Note", href: "#cta" },
];

const brandLogoShellClass =
  "relative h-9 w-[112px] sm:h-10 sm:w-[118px] lg:h-10 lg:w-[122px]";
const brandLogoImageClass =
  "absolute inset-0 h-full w-full scale-[1.35] origin-left object-contain transition-all duration-500";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    pathname === "/analyst-team" ? analystTeamNavItems[0].href : navItems[0].href
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoTransitioning, setIsLogoTransitioning] = useState(false);

  const isHomePage = pathname === "/";
  const isAnalystTeamPage = pathname === "/analyst-team";
  const currentNavItems = isAnalystTeamPage ? analystTeamNavItems : navItems;
  const showLightNavbar = isScrolled || !isHomePage;
  const mobileHeaderActive = mobileOpen || showLightNavbar;
  const showLightLogo = mobileHeaderActive;

  const scrollToSection = (hash: string) => {
    const target = document.querySelector(hash);
    if (!target) return;

    const headerOffset = 92;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", hash);
    setActiveSection(hash);
    setMobileOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleLogoClick = () => {
    setMobileOpen(false);
    setActiveSection(currentNavItems[0].href);

    if (isHomePage) {
      const heroSection = document.querySelector("#hero");
      heroSection?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "/#hero");
      return;
    }

    setIsLogoTransitioning(true);
    window.setTimeout(() => {
      navigate("/");
    }, 180);
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    setActiveSection(
      isAnalystTeamPage ? analystTeamNavItems[0].href : navItems[0].href
    );
  }, [isAnalystTeamPage]);

  useEffect(() => {
    if (pathname !== "/") return;
    if (!isLogoTransitioning) return;

    const timer = window.setTimeout(() => {
      setIsLogoTransitioning(false);
    }, 160);

    return () => window.clearTimeout(timer);
  }, [pathname, isLogoTransitioning]);

  useEffect(() => {
    if (!isHomePage && !isAnalystTeamPage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, isAnalystTeamPage]);

  useEffect(() => {
    if (!isHomePage && !isAnalystTeamPage) return;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let currentSection = currentNavItems[0].href;

      currentNavItems.forEach((item) => {
        const sectionElement = document.querySelector(item.href);
        if (!sectionElement) return;

        const sectionTop =
          sectionElement.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition >= sectionTop) {
          currentSection = item.href;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [currentNavItems, isHomePage, isAnalystTeamPage]);

  const getTextClass = (isActive: boolean) => {
    const activeLineClass =
      "after:absolute after:bottom-[1px] after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-[#63d3c5] after:transition-transform after:duration-300";

    if (showLightNavbar) {
      return `${activeLineClass} ${
        isActive
          ? "text-[#0B1F3A] font-semibold after:scale-x-100"
          : "text-[#0B1F3A] after:scale-x-0"
      }`;
    }

    return `${activeLineClass} ${
      isActive
        ? "text-white font-semibold after:scale-x-100"
        : "text-white/80 hover:text-white after:scale-x-0"
    }`;
  };

  const darkLogoClass =
    `${brandLogoImageClass} ${showLightLogo ? "opacity-0" : "opacity-100"}`;

  const lightLogoClass =
    `${brandLogoImageClass} ${showLightLogo ? "opacity-100" : "opacity-0"}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        mobileHeaderActive ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="page-shell flex items-center justify-between py-4 sm:py-5">

        {/* LEFT */}
        <div className="flex items-center gap-0">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden"
          >
            <MenuIcon size={25} />
          </button>

          <button onClick={handleLogoClick} className={brandLogoShellClass}>
            <img src={logo} className={darkLogoClass} />
            <img src={lightLogo} className={lightLogoClass} />
          </button>
        </div>

        {/* CENTER NAV (UPDATED ONLY HERE) */}
        <div className="hidden items-center gap-4 lg:ml-28 lg:flex xl:ml-32 xl:gap-6 2xl:ml-44">
          {currentNavItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }
                }}
                className={`relative pb-1 text-[16px] md:text-[18px] ${getTextClass(isActive)}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span
            className={`text-[14px] sm:text-[16px] ${
              mobileHeaderActive
                ? "inline text-[#0B1F3A]"
                : "hidden sm:inline text-white"
            }`}
          >
            Subscribe
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;