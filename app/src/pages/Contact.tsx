import { useDocumentTitle } from "../assets/useDocumentTitle";

export default function Contact() {
  useDocumentTitle("Pepito11 - Contact");

  return (
    <main className="min-h-screen bg-[#0a0a0f] md:pt-0 lg:pt-0 pt-32 text-gray-200 flex flex-col items-center justify-center px-6">
      
      <div className="w-full max-w-xl">
        <h1 className="text-6xl font-extrabold text-center mb-4 text-pink-400">
          Contact
        </h1>

        <p className="text-gray-400 text-center mb-12">
          Feel free to reach out for team opportunities or questions.
        </p>

        <form className="space-y-6" action="https://formspree.io/f/xlgnooyb" method="POST">
          
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="uppercase text-sm tracking-widest text-pink-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              inputMode="email"
              placeholder="your@email.com"
              className="bg-[#0f0f16] border border-gray-800 rounded-lg px-4 py-3 text-gray-200 outline-none focus:border-pink-400 focus:shadow-[0_0_15px_rgba(236,72,153,0.35)] transition-all"
              required
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label className="uppercase text-sm tracking-widest text-pink-400">
              Subject
            </label>
            <input
              type="text"
              name="text"
              placeholder="Team offer, question, etc."
              className="bg-[#0f0f16] border border-gray-800 rounded-lg px-4 py-3 text-gray-200 outline-none focus:border-pink-400 focus:shadow-[0_0_15px_rgba(236,72,153,0.35)] transition-all"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="uppercase text-sm tracking-widest text-pink-400">
              Message
            </label>
            <textarea
              name="paragraph"
              rows={5}
              placeholder="Write your message here..."
              className="bg-[#0f0f16] border border-gray-800 rounded-lg px-4 py-3 text-gray-200 outline-none resize-none focus:border-pink-400 focus:shadow-[0_0_15px_rgba(236,72,153,0.35)] transition-all"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mb-15 lg:mb-0 w-full mt-6 uppercase font-semibold tracking-widest border-2 border-pink-400 text-pink-400 rounded-lg py-3 hover:bg-pink-400 hover:text-black hover:cursor-pointer transition-all duration-200"
          >
            Send message
          </button>
        </form>
      </div>

    </main>
  );
}
