import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "AI Types", href: "#types" },
  { name: "Benefits", href: "#benefits" },
  { name: "Contact", href: "#contact" },
];


export default function Navbar() {

    const [ mobileMenuOpen, setmobileMenuOpen ] = useState(false)
  return (
    <nav className=" bg-white/80 backdrop-blur-md shadow-2xl fixed w-full z-50 ">
        <div className=" app-contaner flex justify-between items-center h-16 ">
            {/* logo */}
            <span className="gradient-text text-2xl font-bold">Ai Revolution</span>

            {/* desktop links */}
        <div className="hidden md:flex item-center space-x-8">
        {links.map((link) => (
            <a key={link.name} className=" nav-item" href={link.href}>
                {link.name}
            </a>
        ))}
        <a href="#" className=" nav-btn">Get Started</a>
      </div>

      {/* mobile menu button  */}
      <button
      onClick={() => setmobileMenuOpen((prev) => !prev)} 
      className=" md:hidden rounded-xl p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-200 focus:outline-none ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
      </button>
     </div>

     {/* mobile menu */}
     {mobileMenuOpen && (
        <div className=" md:hidden bg-white shadow-2xl rounded-b-lg px-2 pt-2 space-y-1 pb-3 ">
            {links.map((link) => (
            <a key={link.name} className=" mobile-nav-item" href={link.href}>
                {link.name}
            </a>
        ))}
                <a href="#" className=" mobile-nav-btn">Get Started</a>
        </div>
     )}
    </nav>
  )
}