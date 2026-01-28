import { FaDiscord } from "react-icons/fa"; // besoin d'installer react-icons

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-gray-200 flex flex-col items-center px-6 pt-32">

      <h1 className="text-4xl font-extrabold text-pink-400 mb-12 text-center">
        Contact
      </h1>

      {/* Card Discord */}
      <a
        href="https://discord.com/users/pepito_11"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center w-64 p-8 bg-[#0f0f16] border border-gray-800 rounded-3xl shadow-lg hover:shadow-[0_0_40px_rgba(236,72,153,0.25)] hover:border-pink-400 transition-all duration-300 cursor-pointer"
      >
        <FaDiscord className="text-6xl text-[#7289da] mb-4" />
        <h2 className="text-xl font-bold text-gray-100 mb-2">Discord</h2>
        <p className="text-gray-400 text-center text-sm">
          Clique ici pour me contacter directement sur Discord !
        </p>
      </a>

    </main>
  );
}
