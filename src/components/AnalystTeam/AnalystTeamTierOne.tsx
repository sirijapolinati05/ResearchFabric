import ashwinImg from "@/assets/LandingPage/Ashwin-Gaidhani.png";
import tapatiImg from "@/assets/LandingPage/Tapati-Bandhopadhyay.png";
import markImg from "@/assets/LandingPage/Mark-Purdy.png";
import gaurangImg from "@/assets/LandingPage/Gaurang-Padgi.png";
import gmailLogo from "@/assets/ResearchTeam/Gmail-Logo.png";
import linkedInLogo from "@/assets/ResearchTeam/LinkedIn-Logo.png";
import circleBg from "@/assets/ResearchTeam/ResearchTeam-Background.jpeg";

const partnerCards = [
  {
    name: "Ashwin Gaidhani",
    subtitle: "Forbes Tech Council Member",
    image: ashwinImg,
  },
  {
    name: "Dr. Tapati Bandhopadhyay",
    subtitle: "Board-Level Strategy Advisor",
    image: tapatiImg,
  },
  {
    name: "Mark Purdy",
    subtitle: "Head of UK Practice",
    image: markImg,
  },
  {
    name: "Gaurang Pagdi",
    subtitle: "GCC & BPO Services",
    image: gaurangImg,
  },
];

const AnalystTeamTierOne = () => {
  return (
    <section id="leadership" className="bg-[#f8f7f3] py-16 lg:py-20 xl:py-24 text-[#141948]">

      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 mx-auto">

        <div className="max-w-[1200px]">
          <p className="flex items-center gap-2 text-[clamp(1rem,1.2vw,1.375rem)] font-bold text-[#20254d]">
            <span className="h-px w-6 bg-[#20254d]" />
            Core Leadership Team
            <span className="h-px w-6 bg-[#20254d]" />
          </p>

          <h2 className="mt-4 text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-tight tracking-[-0.02em]">
            Research Partners & Principal Analysts
          </h2>
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-8 lg:gap-10 xl:gap-12
            min-[2500px]:flex min-[2500px]:gap-12
          ">

            {partnerCards.map((member) => (
              <article
                key={member.name}
                className="
                  group rounded-xl border border-[#dfe4ea] bg-white
                  shadow-md transition-all duration-300
                  hover:-translate-y-2 hover:bg-[#0b1d3a]
                  w-full mx-auto
                  max-sm:max-w-[340px]
                  max-sm:min-h-[380px]
                  min-[2500px]:flex-1
                  min-[2500px]:h-[420px]
                "
              >
                <div className="flex flex-col items-center text-center px-6 py-6 h-full">

                  <div
                    className="rounded-full overflow-hidden mb-5"
                    style={{
                      width: "clamp(110px, 8vw, 170px)",
                      height: "clamp(110px, 8vw, 170px)",
                      backgroundImage: `url(${circleBg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col items-center flex-grow w-full">

                    <h3 className="font-normal leading-snug group-hover:text-white text-[20px] max-sm:text-[26px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] min-[2500px]:text-[30px]">
                      {member.name}
                    </h3>

                    <p className="mt-3 text-[#1E4E8C] group-hover:text-white/90 font-bold text-[clamp(1.125rem,1vw,1.125rem)] min-[2500px]:text-[22px]">
                      {member.subtitle}
                    </p>

                    <div className="mt-auto w-full">
                      <div className="w-full h-px bg-[#c8ccd5] group-hover:bg-white/30" />

                      {/* ✅ UPDATED LOGOS */}
                      <div className="mt-6 flex justify-center gap-6">
                        <div
                          className="flex items-center justify-center rounded-full"
                          style={{
                            width: "32px",
                            height: "32px",
                            backgroundColor: "#43E0B1",
                          }}
                        >
                          <img src={linkedInLogo} style={{ width: "16px", height: "16px" }} />
                        </div>

                        <div
                          className="flex items-center justify-center rounded-full"
                          style={{
                            width: "32px",
                            height: "32px",
                            backgroundColor: "#43E0B1",
                          }}
                        >
                          <img src={gmailLogo} style={{ width: "16px", height: "16px" }} />
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default AnalystTeamTierOne;