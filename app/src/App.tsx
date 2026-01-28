import { Cards } from "./components/Cards";
import { SectionTitle } from "./components/SectionTitle";

export default function App() {
  return (
    <main className="bg-[#0a0a0f]">
      <section className="min-h-[80vh] text-gray-200 flex flex-col items-center text-center px-6 pt-24">
        <img
          className="w-36 h-36 rounded-full border-4 border-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.35)]"
          src="/images/profile-picture.jpg"
          alt="profile picture"
        />

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight">
          Pepito11
        </h1>

        <h2 className="mt-2 text-pink-400 text-base uppercase tracking-widest">
          DPS Hitscan — 4k5+ Peak (Scrims)
        </h2>

        <div className="mt-10 max-w-3xl space-y-6 text-gray-300 leading-relaxed">
          <p>
            Former Grandmaster player with consistent performance in scrims
            around 4200 SR, including multiple peaks at 4500+. I have strong
            experience in competitive environments and high-level team play.
            After several seasons playing support, I developed solid game sense,
            strong communication skills, and a deep understanding of team
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
      </section>

      <SectionTitle label="Rank by role" />

      <section className="min-h-[50vh] text-gray-200 flex flex-col items-center px-6 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <Cards
            link="/images/Master.webp"
            alt="master logo"
            title="DPS"
            description="Peak Master 3 — actuellement Master 4"
          />

          <Cards
            link="/images/gm.webp"
            alt="grand master logo"
            title="Support"
            description="Peak Grand Master 2 — actuellement Grand Master 3"
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
            description="Mon hero que je maitrise le mieux selon moi."
            heroRanked="~ 3300 sr"
          />

          <Cards
            link="/images/sojourn.png"
            alt="hero image"
            title="sojourn"
            description="Hero avec lequel je suis très solide."
            heroRanked="~ 3500 sr"
          />

          <Cards
            link="/images/cassidy.png"
            alt="hero image"
            title="cassidy"
            description="Hero sur lequel je suis solide."
            heroRanked="~ 3500 sr"
          />
        </div>
      </section>
    </main>
  );
}
