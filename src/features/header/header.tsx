import { Link } from "react-router-dom";
export default function Header() {
  const links = [
    {
      to: "/",
      text: "Amenidades",
    },
    {
      to: "/",
      text: "Ubicación",
    },
    {
      to: "/",
      text: "Modelos",
    },
    {
      to: "#contacto",
      text: "Contacto",
    },
  ];
  return (
    <header className="w-full px-4 py-10 bg-black text-white">
      <nav className="flex justify-between items-center">
        <Link to="/" className="ml-28">LOGO</Link>
        <ul className="flex gap-48 mr-10">
          {links.map(({text, to}, index) => (
            <li key={index}>
              <Link to={to}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
