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
    <section
      id="leadership"
      className="bg-[#f8f7f3] py-16 xl:py-20 text-[#141948]"
    >
      <div className="px-6">

        {/* HEADER */}
        <div className="max-w-[760px]">
          <p className="flex items-center gap-2 whitespace-nowrap text-[15px] font-bold text-[#20254d] sm:gap-3 sm:text-[17px] md:gap-4 md:text-[20px]">
            <span className="h-px w-6 bg-[#20254d] sm:w-8 md:w-10" />
            Core Leadership Team
            <span className="h-px w-6 bg-[#20254d] sm:w-8 md:w-10" />
          </p>

          {/* 🔥 FIXED HEADING */}
          <h2
            className="
            mt-4
            text-[28px]
            sm:text-[34px]
            md:text-[44px]
            lg:text-[50px]

            leading-tight

            /* 🔥 SINGLE LINE FROM TABLET */
            md:whitespace-nowrap
          "
          >
            Research Partners & Principal Analysts
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-14">
          <div
            className="
            mx-auto
            max-w-[1100px]
            md:max-w-[1300px]
            xl:max-w-[1500px]
            2xl:max-w-[2400px]

            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-10
            md:gap-14
            xl:gap-20
            2xl:gap-40
            justify-items-center sm:justify-items-stretch
          "
          >
            {partnerCards.map((member) => (
              <article
                key={member.name}
                className="
                group flex flex-col items-center text-center
                w-full max-w-[240px] sm:max-w-none
                rounded-xl border border-[#dfe4ea] bg-white
                shadow-[0_4px_10px_rgba(8,18,59,0.15)]
                transition-all duration-300
                hover:-translate-y-2 hover:border-navy hover:bg-navy hover:shadow-[0_20px_34px_rgba(8,18,59,0.24)]

                px-6 py-6

                min-h-[300px]
                md:min-h-[320px]
                xl:min-h-[360px]
                2xl:min-h-[750px]

                2xl:px-12 2xl:py-12
              "
              >
                {/* IMAGE */}
                <div
                  className="
                  rounded-full overflow-hidden mb-6

                  w-24 h-24
                  md:w-28 md:h-28
                  xl:w-32 xl:h-32
                  2xl:w-72 2xl:h-72
                "
                  style={{
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

                {/* NAME */}
                <h3
                  className="
                  text-[16px]
                  md:text-[18px]
                  xl:text-[19px]
                  2xl:!text-[13px]

                  font-medium
                  text-[#17204c]
                  group-hover:text-white
                  leading-snug
                  break-words
                "
                >
                  {member.name}
                </h3>

                {/* SUBTITLE */}
                <p
                  className="
                  mt-4
                  text-[14px]
                  md:text-[15px]
                  xl:text-[15px]
                  2xl:text-[15px]

                  text-[#1E4E8C]
                  group-hover:text-white/85
                  leading-snug
                "
                >
                  {member.subtitle}
                </p>

                {/* DIVIDER */}
                <div className="mt-auto h-px w-full bg-[#c8ccd5] group-hover:bg-white/35" />

                {/* ICONS */}
                <div className="mt-8 flex gap-8">
                  <img
                    src={linkedInLogo}
                    className="h-8 w-8 xl:h-9 xl:w-9 2xl:h-20 2xl:w-20"
                  />
                  <img
                    src={gmailLogo}
                    className="h-8 w-8 xl:h-9 xl:w-9 2xl:h-20 2xl:w-20"
                  />
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
