import { NavLink } from "react-router";

export const link = [
  { href: "/", label: "Accueil" },
  { href: "/Contact", label: "Contact" },
];

export function Header() {
  return (
    <header>
      <ul>
        {link.map((key) => (
          <li key={key.href}>
            <NavLink to={key.href}>{key.label}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}
