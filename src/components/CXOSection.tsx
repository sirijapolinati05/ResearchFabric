import cutThroughIcon from "@/assets/LandingPage/cut-through-noise.png";
import translateIcon from "@/assets/LandingPage/translate-into-action.png";

const CXOSection = () => {
  return (
    <div> {/* ✅ FULL SECTION WRAPPER */}

      <section
        id="cxo"
        className="scroll-mt-24 bg-navy-dark py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20"
      >
        <div className="page-shell relative z-10">

          {/* FLEX WRAPPER */}
          <div className="flex flex-col lg:flex-row items-stretch gap-6 md:gap-8">

            {/* LEFT */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-full lg:max-w-[600px] xl:max-w-[720px] 2xl:max-w-[900px]">
              <div>

                <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
                  <span className="w-4 sm:w-6 h-[1px] bg-white/40"></span>
                  <p className="text-white font-serif text-[18px] sm:text-[20px] md:text-[22px]">
                    CXO AI Research
                  </p>
                  <span className="w-4 sm:w-6 h-[1px] bg-white/40"></span>
                </div>

                <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[44px] xl:text-[48px] font-bold text-primary-foreground mb-4 leading-snug md:leading-tight">
                  AI Leadership is Now a C-Suite Imperative
                </h2>

                <p className="text-primary-foreground/70 font-serif text-[15px] sm:text-[16px] md:text-[17px] lg:text-[16px] xl:text-[18px] leading-relaxed mb-5 sm:mb-6">
                  The AI landscape is noisy, volatile, and impossible for busy leaders to track.
                  CEOs and CXOs are expected to drive growth, innovation, and new revenue with AI
                  yet few have the bandwidth or in-house capability to stay ahead. We bridge that gap.
                </p>

                <a
                  href="#"
                  className="inline-block w-fit bg-teal text-navy font-serif font-semibold px-4 sm:px-6 py-2.5 md:py-3 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[16px] xl:text-[18px] rounded hover:bg-teal-light transition-colors whitespace-nowrap"
                >
                  Download approach note
                </a>

              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">

                {/* CARD 1 */}
                <div className="h-full flex flex-col rounded-lg border border-white/85 bg-white p-4 sm:p-5 shadow-[0_20px_55px_rgba(3,12,32,0.16)] hover:scale-[0.96] hover:bg-[#E6F2FF]">
                  <img src={cutThroughIcon} className="mb-4 h-7 w-7" />
                  <h3 className="mb-2 font-bold text-[#0A1F44] text-[22px] sm:text-[24px]">
                    Cut Through Noise
                  </h3>
                  <p className="text-[#5A6B85] text-sm">
                    Quantitative assessment of industry landscapes, competitive frameworks
                    & macro-economic metrics.
                  </p>
                </div>

                {/* CARD 2 */}
                <div className="h-full flex flex-col rounded-lg border border-white/85 bg-white p-4 sm:p-5 shadow-[0_20px_55px_rgba(3,12,32,0.16)] hover:scale-[0.96] hover:bg-[#E6F2FF]">
                  <img src={translateIcon} className="mb-4 h-7 w-7" />
                  <h3 className="mb-2 font-bold text-[#0A1F44] text-[22px] sm:text-[24px]">
                    Translate Into Action
                  </h3>
                  <p className="text-[#5A6B85] text-sm">
                    We turn complex AI trends into clear business implications your
                    leadership team can act on immediately.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CXOSection;