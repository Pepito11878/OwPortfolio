import { NavLink } from "react-router";

export const link = [
  { href: "/", label: "Home" },
  { href: "/Contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#07070b] border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Menu à gauche */}
        <ul className="flex gap-8 text-base">
          {link.map((key) => (
            <li key={key.href}>
              <NavLink
                to={key.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-400 font-semibold underline underline-offset-4 decoration-pink-400"
                    : "text-gray-300 hover:text-pink-400 transition-colors"
                }
              >
                {key.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Nom à droite */}
        <div className="text-pink-400 font-bold tracking-widest text-base">
          Pepito11
        </div>
      </div>
    </header>
  );
}
