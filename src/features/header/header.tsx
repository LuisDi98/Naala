import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    {
      href: "https://maps.app.goo.gl/CMRA6WFtrn2EDhQY6",
      text: "Ubicación",
    },
    {
      href: "modelos",
      text: "Modelos",
    },
    {
      href: "contacto",
      text: "Contacto",
    },
  ]

  return (
    <header className="w-full px-4 py-4 md:py-4 bg-black text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img width={150} src="/naala-logo.png" alt="" />
        </Link>
        
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X size={24} className="transition-all" /> : <Menu size={24} className="transition-all" />}
        </button>

        <ul
          className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-12 ${
            menuOpen ? "absolute inset-x-0 top-16 bg-black p-4 shadow-lg z-50" : "hidden"
          } md:flex`}
        >
          {links.map(({ text, href }, index) => (
            <li key={index} className="w-full md:w-auto">
              <ScrollLink
                  to={href}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="block py-2 text-center text-lg hover:text-gray-400 transition"
                  style={{
                    cursor: "pointer",
                    fontSize: "lg",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {text}
                </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

