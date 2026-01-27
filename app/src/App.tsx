import { Cards } from "./components/Cards";

export default function App() {
  return (
    <main>
      <section className="min-h-screen bg-[#0a0a0f] text-gray-200 flex flex-col items-center text-center px-6 pt-24">
        <img
          className="w-36 h-36 rounded-full border-4 border-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.35)]"
          src="/images/profile-picture.jpg"
          alt="profile picture"
        />

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight">
          Pepito11
        </h1>

        <h2 className="mt-2 text-pink-400 text-sm uppercase tracking-widest">
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
      
      <section className="min-h-screen bg-[#0a0a0f] text-gray-200 flex justify-center items-center text-center px-6 pt-24">

        <h1>Rank by role</h1>

        <Cards alt="test" title="test" description="ceci est une description test"/>
        <Cards alt="test" title="test" description="ceci est une description test"/>
      </section>
    </main>
  );
}
