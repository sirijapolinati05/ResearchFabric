import cutThroughIcon from "@/assets/LandingPage/cut-through-noise.png";
import translateIcon from "@/assets/LandingPage/translate-into-action.png";

const CXOSection = () => {
  return (
    <section
      id="cxo"
      className="scroll-mt-24 bg-navy-dark py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20"
    >
      <div className="page-shell relative z-10">

        {/* HEADER */}
        <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
          <span className="w-4 sm:w-6 h-[1px] bg-white/40"></span>

          <p className="text-white font-serif text-[18px] sm:text-[20px] md:text-[22px]">
            CXO AI Research
          </p>

          <span className="w-4 sm:w-6 h-[1px] bg-white/40"></span>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <div className="max-w-full lg:max-w-[600px] xl:max-w-[720px] 2xl:max-w-[900px]">

            <h2 className="
              text-[30px] sm:text-[36px] md:text-[42px] lg:text-[44px] xl:text-[48px]
              font-bold text-primary-foreground mb-4 leading-snug md:leading-tight
            ">
              AI Leadership is Now a C-Suite Imperative
            </h2>

            <p className="
              text-primary-foreground/70 font-serif
              text-[15px] sm:text-[16px] md:text-[17px] lg:text-[16px] xl:text-[18px]
              leading-relaxed mb-5 sm:mb-6
            ">
              The AI landscape is noisy, volatile, and impossible for busy leaders to track.
              CEOs and CXOs are expected to drive growth, innovation, and new revenue with AI
              yet few have the bandwidth or in-house capability to stay ahead. We bridge that gap.
            </p>

            <a
              href="#"
              className="
              inline-block w-fit mx-auto sm:mx-0 text-center
              bg-teal text-navy font-serif font-semibold
              px-4 sm:px-6 py-2.5 md:py-3
              text-[15px] sm:text-[16px] md:text-[17px] lg:text-[16px] xl:text-[18px]
              rounded hover:bg-teal-light transition-colors
              whitespace-nowrap
              "
            >
              Download approach note
            </a>
          </div>

          {/* RIGHT CARDS */}
          <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">

            {/* CARD 1 */}
            <div className="
              h-full flex flex-col rounded-lg border border-white/85 bg-white
              p-4 sm:p-5 lg:p-5
              shadow-[0_20px_55px_rgba(3,12,32,0.16)]
              transition-all duration-300
              hover:scale-[0.96] hover:bg-[#E6F2FF] hover:z-10
            ">
              <div className="flex flex-col flex-grow">

                <img
                  src={cutThroughIcon}
                  alt="cut through noise"
                  className="mb-3 sm:mb-4 h-6 w-6 sm:h-7 sm:w-7"
                />

                <h3 className="
                  mb-2 font-bold text-[#0A1F44]
                  text-[22px] sm:text-[24px] md:text-[26px] lg:text-[24px] xl:text-[28px]
                  leading-tight
                ">
                  Cut Through Noise
                </h3>

                <p className="
                  font-serif text-[#5A6B85] flex-grow
                  text-[14px] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]
                  leading-relaxed
                ">
                  Quantitative assessment of industry landscapes, competitive frameworks
                  & macro-economic metrics.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="
              h-full flex flex-col rounded-lg border border-white/85 bg-white
              p-4 sm:p-5 lg:p-5
              shadow-[0_20px_55px_rgba(3,12,32,0.16)]
              transition-all duration-300
              hover:scale-[0.96] hover:bg-[#E6F2FF] hover:z-10
            ">
              <div className="flex flex-col flex-grow">

                <img
                  src={translateIcon}
                  alt="translate into action"
                  className="mb-3 sm:mb-4 h-6 w-6 sm:h-7 sm:w-7"
                />

                <h3 className="
                  mb-2 font-bold text-[#0A1F44]
                  text-[22px] sm:text-[24px] md:text-[26px] lg:text-[24px] xl:text-[28px]
                  leading-tight
                ">
                  Translate Into Action
                </h3>

                <p className="
                  font-serif text-[#5A6B85] flex-grow
                  text-[14px] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px]
                  leading-relaxed
                ">
                  We turn complex AI trends into clear business implications your
                  leadership team can act on immediately.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CXOSection;