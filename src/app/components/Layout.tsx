import { Outlet, NavLink, Link } from "react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Exhibitions", path: "/exhibitions" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-900 bg-neutral-50 selection:bg-neutral-900 selection:text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 z-50 rounded-sm">
        Skip to main content
      </a>
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col justify-center">
              <span className="font-bold text-xl tracking-tight leading-tight uppercase">Yale School</span>
              <span className="font-light text-xl tracking-tight leading-tight uppercase">of Art</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide uppercase transition-colors duration-200 hover:text-blue-600 ${
                      isActive ? "text-blue-600 underline underline-offset-8 decoration-2" : "text-neutral-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-600 hover:text-neutral-900 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-200">
            <nav className="flex flex-col px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium tracking-wide uppercase ${
                      isActive ? "text-blue-600 bg-blue-50/50" : "text-neutral-600 hover:text-blue-600 hover:bg-neutral-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="inline-block mb-6 text-white">
                <span className="block font-bold text-2xl tracking-tight uppercase">Yale School</span>
                <span className="block font-light text-2xl tracking-tight uppercase">of Art</span>
              </Link>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-6">
                1156 Chapel Street, POB 208339<br />
                New Haven, Connecticut, 06520-8339
              </p>
              <a href="mailto:artschool.info@yale.edu" className="inline-flex items-center text-sm font-medium hover:text-white transition-colors">
                artschool.info@yale.edu <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            
            <div>
              <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About the School</Link></li>
                <li><Link to="/academics" className="hover:text-white transition-colors">Areas of Study</Link></li>
                <li><Link to="/admissions" className="hover:text-white transition-colors">Apply Now</Link></li>
                <li><Link to="/exhibitions" className="hover:text-white transition-colors">Galleries</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Current Students</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Faculty & Staff</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alumni</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wiki Directory</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
            <p>&copy; {new Date().getFullYear()} Yale School of Art. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
