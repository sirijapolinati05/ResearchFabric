import linkedinIcon from "../assets/LandingPage/LinkedIn.png";
import research1 from "../assets/LandingPage/Agentic-Enterprise.png";
import research2 from "../assets/LandingPage/silicon.jpeg";
import research3 from "../assets/LandingPage/Quantum-Readiness.png";
import research4 from "../assets/LandingPage/Agentic-Enterprise1.png";

const ResearchSection = () => {
  return (
    <div> {/* ✅ FULL WRAPPER */}

      <section id="latest-research" className="scroll-mt-24 bg-white py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">

        <div className="page-shell mx-auto">

          {/* ✅ HEADING BLOCK */}
          <div>

            <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3">
              <span className="h-[1px] w-4 bg-current opacity-40 sm:w-6"></span>

              <p className="whitespace-nowrap font-serif font-bold text-navy text-[18px] sm:text-[20px] md:text-[22px]">
                Latest Research
              </p>

              <span className="h-[1px] w-4 bg-current opacity-40 sm:w-6"></span>
            </div>

            <h2 className="mb-2 text-center font-bold tracking-tight text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] bg-gradient-to-r from-[#0B3F60] to-[#26A9E0] bg-clip-text text-transparent">
              Fresh from the ResearchFabric
            </h2>

            <p className="mx-auto mb-6 text-center text-muted-foreground text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] max-w-xl sm:max-w-2xl">
              Our most recent Thought Shaping Papers and strategic briefings.
            </p>

          </div>

          {/* ✅ CARDS WRAPPER */}
          <div className="flex justify-center">
            <div className="w-full">

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">

                {/* FIRST CARD */}
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:bg-[#0A1F44]">

                  <img
                    src={research1}
                    className="w-full object-cover h-[200px] sm:h-[220px] md:h-[200px] lg:h-[220px] xl:h-[240px]"
                  />

                  <div className="p-4 text-left">

                    <span className="rounded-full bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] text-[11px] sm:text-[12px] text-white">
                      AI / IA
                    </span>

                    <h3 className="mt-1 font-semibold text-[20px] sm:text-[22px] group-hover:text-white">
                      The Agentic Enterprise: When AI Stops Assisting and Starts Acting
                    </h3>

                    <p className="mt-1 text-gray-500 group-hover:text-white/80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[14px]">
                      A comprehensive framework for understanding how autonomous AI agents will reshape enterprise operations, workforce dynamics, and competitive strategy by 2028.
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                      <p className="font-bold text-gray-600 group-hover:text-white/80 text-[10px] sm:text-[11px] md:text-[12px]">
                        FEB 2026 · Thought Shaping Paper
                      </p>

                      <div className="flex items-center gap-1 text-gray-600 group-hover:text-white/80">
                        <img src={linkedinIcon} className="h-3 w-3" />
                        <span className="text-[11px] sm:text-[12px] whitespace-nowrap">
                          Releasing soon on <span className="font-semibold">LinkedIn</span>
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* SECOND COLUMN */}
                <div className="flex flex-col gap-4">

                  {/* CHIPSET CARD */}
                  <div className="relative overflow-hidden rounded-2xl shadow-md h-[160px] sm:h-[180px] md:h-[180px] lg:h-[190px] xl:h-[200px]">

                    <img src={research2} className="absolute inset-0 h-full w-full object-cover" />

                    <div className="absolute inset-0 flex flex-col bg-black/60 p-4">

                      <span className="w-fit rounded-full bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] text-[11px] sm:text-[12px] text-white">
                        Chipset
                      </span>

                      <h4 className="mt-1 font-semibold text-white text-[18px] sm:text-[20px] md:text-[20px] lg:text-[18px] xl:text-[20px]">
                        Beyond Moore: The Custom Silicon Arms Race in AI Infrastructure
                      </h4>

                      <p className="mt-1 text-white/80 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[13px]">
                        How hyperscalers' in-house chip programs are reshaping the semiconductor landscape.
                      </p>

                      <div className="mt-auto flex items-center gap-1 text-white">
                        <img src={linkedinIcon} className="h-3 w-3" />
                        <span className="text-[11px] sm:text-[12px] whitespace-nowrap">
                          Releasing soon on <span className="font-semibold">LinkedIn</span>
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* QUANTUM CARD */}
                  <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:bg-[#0A1F44]">

                    <img
                      src={research3}
                      className="w-full object-cover h-[120px] sm:h-[140px] md:h-[130px] lg:h-[140px]"
                    />

                    <div className="p-4 text-left">

                      <span className="w-fit rounded-full bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] text-[11px] sm:text-[12px] text-white">
                        Quantum
                      </span>

                      <h4 className="mt-1 font-semibold group-hover:text-white text-[20px] sm:text-[22px] md:text-[22px] lg:text-[20px]">
                        Quantum Readiness Index 2026: Enterprise Preparedness Assessment
                      </h4>

                      <p className="mt-1 text-gray-500 group-hover:text-white/80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[14px]">
                        Benchmarking Fortune 500 quantum strategies across readiness, talent, and investment vectors.
                      </p>

                      <div className="mt-2 flex items-center gap-1 text-gray-600 group-hover:text-white/80">
                        <img src={linkedinIcon} className="h-3 w-3" />
                        <span className="text-[11px] sm:text-[12px] whitespace-nowrap">
                          Releasing soon on <span className="font-semibold">LinkedIn</span>
                        </span>
                      </div>

                    </div>
                  </div>

                </div>

                {/* THIRD CARD */}
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:bg-[#0A1F44]">

                  <img
                    src={research4}
                    className="w-full object-cover h-[200px] sm:h-[220px] md:h-[200px] lg:h-[220px] xl:h-[240px]"
                  />

                  <div className="p-4 text-left">

                    <span className="rounded-full bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] text-[11px] sm:text-[12px] text-white">
                      AI / IA
                    </span>

                    <h3 className="mt-1 font-semibold group-hover:text-white text-[20px] sm:text-[22px] md:text-[22px] lg:text-[20px]">
                      The Agentic Enterprise: When AI Stops Assisting and Starts Acting
                    </h3>

                    <p className="mt-1 text-gray-500 group-hover:text-white/80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[14px]">
                      A comprehensive framework for understanding how autonomous AI agents will reshape enterprise operations.
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                      <p className="font-bold text-gray-600 group-hover:text-white/80 text-[10px] sm:text-[11px] md:text-[12px]">
                        FEB 2026 · Thought Shaping Paper
                      </p>

                      <div className="flex items-center gap-1 text-gray-600 group-hover:text-white/80">
                        <img src={linkedinIcon} className="h-3 w-3" />
                        <span className="text-[11px] sm:text-[12px] whitespace-nowrap">
                          Releasing soon on <span className="font-semibold">LinkedIn</span>
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ResearchSection;