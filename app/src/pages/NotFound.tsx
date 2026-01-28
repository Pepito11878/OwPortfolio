import { NavLink } from "react-router";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-gray-200 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-extrabold text-pink-400 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
      <p className="text-gray-400 mb-8">
        Oups ! La page que vous cherchez n’existe pas.
      </p>
      <NavLink
        to="/"
        className="px-6 py-3 bg-pink-400 text-black font-bold rounded-lg hover:bg-pink-500 transition-colors"
      >
        Retour à l’accueil
      </NavLink>
    </main>
  );
}