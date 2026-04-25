import { Instagram, Facebook, Twitter, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#0a0a0a] border-t border-[#c8a96e]/20 py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <div
                className="text-xl sm:text-2xl md:text-3xl mb-3 md:mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                <span className="text-[#c8a96e]">SAM’S</span> TATTOO WORLD
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Custom Ink. Timeless Art.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg mb-3 md:mb-4 tracking-wider">QUICK LINKS</h4>
              <div className="flex flex-col gap-2">
                {['About', 'Portfolio', 'Specialties', 'Testimonials', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-[#c8a96e] transition-colors text-left text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-base md:text-lg mb-3 md:mb-4 tracking-wider">FOLLOW US</h4>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="https://instagram.com/noirinktattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#c8a96e] transition-colors"
                >
                  <Instagram size={20} className="md:w-6 md:h-6" />
                </a>
                <a
                  href="https://facebook.com/noirinktattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#c8a96e] transition-colors"
                >
                  <Facebook size={20} className="md:w-6 md:h-6" />
                </a>
                <a
                  href="https://twitter.com/noirinktattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#c8a96e] transition-colors"
                >
                  <Twitter size={20} className="md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#c8a96e]/20 pt-6 md:pt-8 text-center text-gray-500 text-xs sm:text-sm">
            <p>&copy; SAM’S TATTOO WORLD. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a
        href="tel:+918149244404"
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#c8a96e] text-[#0a0a0a] px-8 py-4 rounded-full flex items-center gap-3 shadow-lg hover:bg-[#d4b57a] transition-colors z-40 font-semibold"
      >
        <Phone size={20} />
        CALL NOW
      </a>
    </>
  );
}
