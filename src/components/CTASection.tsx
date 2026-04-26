const CTASection = () => {
  return (
    <section
      id="cta"
      className="
      -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10
      scroll-mt-24
      bg-gradient-to-r from-navy-dark via-navy to-sky/80
      py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20
      "
    >
      <div className="page-shell mx-auto max-w-3xl text-center">

        {/* HEADING */}
        <h2
          className="
          font-bold text-primary-foreground
          text-[26px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[44px]
          leading-snug md:leading-tight
          mb-3
        "
        >
          Ready to Shape the
          <br className="hidden sm:block" /> Technology Narrative?
        </h2>

        {/* SUBTEXT */}
        <p
          className="
          font-serif text-primary-foreground/70
          text-[14px] sm:text-[16px] md:text-[17px] lg:text-[16px] xl:text-[18px]
          mb-5 sm:mb-6
          max-w-md sm:max-w-lg md:max-w-xl mx-auto
        "
        >
          Whether you're looking to commission a Thought Shaping Paper, partner
          as an analyst, or subscribe to our research — we'd love to hear from you.
        </p>

        {/* BUTTONS */}
        <div
          className="
          flex flex-wrap justify-center items-center
          gap-2 sm:gap-3 md:gap-4
        "
        >
          
          {/* PRIMARY */}
          <a
            href="#"
            className="
            whitespace-nowrap
            bg-teal text-navy font-serif font-semibold
            px-3 sm:px-5 lg:px-6
            py-2 md:py-2.5 lg:py-3
            text-[13px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[18px]
            rounded-full
            transition-all duration-300
            hover:scale-[1.03]
            hover:bg-teal-light
            active:scale-95
            "
          >
            Download Approach Note
          </a>

          {/* SECONDARY */}
          <a
            href="#"
            className="
            whitespace-nowrap
            border border-primary-foreground/40 text-primary-foreground font-serif font-semibold
            px-3 sm:px-5 lg:px-6
            py-2 md:py-2.5 lg:py-3
            text-[13px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[18px]
            rounded-full
            transition-all duration-300
            hover:scale-[1.03]
            hover:bg-primary-foreground/10
            active:scale-95
            "
          >
            Get in Touch
          </a>

        </div>

      </div>
    </section>
  );
};

export default CTASection;