import { useDocumentTitle } from "./assets/useDocumentTitle";
import { Cards } from "./components/Cards";
import { SectionTitle } from "./components/SectionTitle";
import { FaDiscord } from "react-icons/fa";

export default function App() {
  useDocumentTitle("Pepito11 - Home");

  return (
    <main className="bg-[#0a0a0f]">
      <section className="min-h-[80vh] text-gray-200 flex flex-col items-center text-center px-6 pt-24">
        <a href="https://discord.com/users/pepito_11" target="blank_">
          <img
            className="w-36 h-36 rounded-full border-4 border-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.35)] hover:border-[#7289da] hover:shadow-[0_0_30px_rgba(114,137,218,0.35)] transition-all duration-200"
            src="/images/profile-picture.jpg"
            alt="profile picture"
          />
        </a>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight">
          Pepito11
        </h1>

        <h2 className="mt-2 text-pink-400 text-base uppercase tracking-widest">
          DPS Hitscan — no elo for now
        </h2>

        <div className="mt-10 max-w-3xl space-y-6 text-gray-300 leading-relaxed">
          <p>
            Former Grandmaster support player with consistent performance in
            scrims around 4200 SR, including multiple peaks at 4500+. I have
            strong experience in competitive environments and high-level team
            play. After several seasons playing support, I developed solid game
            sense, strong communication skills, and a deep understanding of team
            dynamics.
          </p>

          <p>
            Over time, the support role stopped matching my playstyle and
            motivation, which led me to switch roles. I’m now fully focused on
            DPS hitscan, where I want to improve, compete, and contribute to a
            structured team environment. I’m highly motivated, serious, and
            ready to commit to a long-term competitive project.
          </p>
        </div>

        <a
          className="flex items-center gap-2 uppercase border-2 border-[#7289da] text-[#7289da] rounded-lg pr-5 pl-5 p-2.5 mt-20 hover:bg-[#7289da] hover:text-black font-semibold transition-all duration-200"
          href="https://discord.com/users/pepito_11"
          target="blank_"
        >
          <FaDiscord />
          my discord
        </a>
      </section>

      <SectionTitle label="Rank by role" />

      <section className="min-h-[50vh] text-gray-200 flex flex-col items-center px-6 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <Cards
            link="/images/Master.webp"
            alt="master logo"
            title="DPS"
            description="Peak Master 3"
          />

          <Cards
            link="/images/gm.webp"
            alt="grand master logo"
            title="Support"
            description="Peak Grand Master 2"
          />
        </div>
      </section>

      <SectionTitle label="Hero played" />

      <section className="min-h-[60vh] text-gray-200 flex flex-col items-center px-6 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <Cards
            link="/images/tracer.png"
            alt="hero image"
            title="tracer"
            description="The hero I think I'm best at."
          />

          <Cards
            link="/images/sojourn.png"
            alt="hero image"
            title="sojourn"
            description="Hero with whom I am very solid."
          />

          <Cards
            link="/images/cassidy.png"
            alt="hero image"
            title="cassidy"
            description="Hero on whom I stand firm."
          />
        </div>
      </section>
    </main>
  );
}
