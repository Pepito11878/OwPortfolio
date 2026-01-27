import { NavLink } from "react-router";
import { link } from "./Header";

export function Footer() {
  return (
    <footer>
      <p>fait en {new Date().getFullYear()} par Pepito11</p>
      {link.map((key) => (
        <NavLink key={key.href} to={key.href}>
          {key.label}
        </NavLink>
      ))}
    </footer>
  );
}
