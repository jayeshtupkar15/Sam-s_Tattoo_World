import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
        <div
          className="text-base xs:text-lg sm:text-xl md:text-2xl tracking-wider cursor-pointer whitespace-nowrap"
          style={{ fontFamily: 'Playfair Display, serif' }}
          onClick={() => scrollToSection('hero')}
        >
          <span className="text-[#c8a96e]">SAM’S</span> TATTOO WORLD
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['About', 'Portfolio', 'Specialties', 'Testimonials', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm tracking-wider hover:text-[#c8a96e] transition-colors"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection('contact')}
          className="hidden md:block bg-[#c8a96e] text-[#0a0a0a] px-4 md:px-6 py-2 tracking-wider text-xs md:text-sm hover:bg-[#d4b57a] transition-colors"
        >
          BOOK NOW
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111] border-t border-[#c8a96e]/20">
          <div className="px-6 py-4 flex flex-col gap-4">
            {['About', 'Portfolio', 'Specialties', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-sm tracking-wider hover:text-[#c8a96e] transition-colors"
              >
                {item.toUpperCase()}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#c8a96e] text-[#0a0a0a] px-6 py-2 tracking-wider text-sm hover:bg-[#d4b57a] transition-colors"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
