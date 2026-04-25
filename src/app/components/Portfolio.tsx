import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

// Import local images
import img1 from '../../assets/work_images/WhatsApp Image 2026-04-25 at 3.14.54 PM.jpeg';
import img2 from '../../assets/work_images/WhatsApp Image 2026-04-25 at 3.14.57 PM (1).jpeg';
import img3 from '../../assets/work_images/WhatsApp Image 2026-04-25 at 3.14.57 PM.jpeg';
import img4 from '../../assets/work_images/WhatsApp Image 2026-04-25 at 3.14.59 PM.jpeg';
import img5 from '../../assets/work_images/WhatsApp Image 2026-04-25 at 3.15.01 PM.jpeg';
import img6 from '../../assets/work_images/WhatsApp Image 2026-04-25 at 3.15.03 PM.jpeg';
import img7 from '../../assets/work_images/WhatsApp Image 2026-04-25 at 3.15.05 PM.jpeg';
import img8 from '../../assets/work_images/WhatsApp Image 2026-04-25 at 3.15.08 PM.jpeg';
import img9 from '../../assets/work_images/WhatsApp Image 2026-04-25 at 3.15.11 PM.jpeg';
import img10 from '../../assets/work_images/WhatsApp Image 2026-04-25 at 3.15.23 PM.jpeg';

const portfolioItems = [
  { id: 1, image: img1, size: 'large' },
  { id: 2, image: img2, size: 'small' },
  { id: 3, image: img3, size: 'tall' },
  { id: 4, image: img4, size: 'small' },
  { id: 5, image: img5, size: 'wide' },
  { id: 6, image: img6, size: 'small' },
  { id: 7, image: img7, size: 'small' },
  { id: 8, image: img8, size: 'large' },
  { id: 9, image: img9, size: 'tall' },
  { id: 10, image: img10, size: 'small' },
];

export default function Portfolio() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          portfolioItems.forEach((item, index) => {
            setTimeout(() => {
              setAnimatedItems(prev => new Set([...prev, item.id]));
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 opacity-0"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              animation: hasAnimated ? 'fadeInUp 1s forwards' : 'none' 
            }}
          >
            Our Work
          </h2>
          <div 
            className="w-24 h-1 bg-[#c8a96e] mx-auto opacity-0"
            style={{ 
              animation: hasAnimated ? 'scaleX 1s forwards 0.3s' : 'none',
              transformOrigin: 'center'
            }}
          ></div>
          <p 
            className="mt-6 text-gray-400 tracking-widest text-sm sm:text-base opacity-0"
            style={{ animation: hasAnimated ? 'fadeIn 1s forwards 0.5s' : 'none' }}
          >
            PRECISION IN EVERY DROP OF INK
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`relative group cursor-pointer overflow-hidden rounded-sm transition-all duration-700 ${
                animatedItems.has(item.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                item.size === 'tall' ? 'md:row-span-2' :
                item.size === 'wide' ? 'md:col-span-2' : ''
              }`}
              onClick={() => setLightboxImage(item.image)}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={item.image}
                alt="Tattoo Work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 border border-[#c8a96e]/0 group-hover:border-[#c8a96e]/40 transition-all duration-500 z-20 m-2 md:m-4" />
              
              <div className="absolute bottom-4 left-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[#c8a96e] text-xs tracking-[0.2em] font-light">
                  VIEW MASTERPIECE
                </span>
              </div>
            </div>
          ))}
        </div>
        <div 
          className="mt-16 md:mt-24 text-center opacity-0"
          style={{ 
            animation: hasAnimated ? 'fadeInUp 1s forwards 0.8s' : 'none' 
          }}
        >
          <a
            href="https://www.instagram.com/tattooartist_sam?igsh=MWRybmJnYnJwbXFuOQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex flex-col items-center"
          >
            <span className="text-gray-400 text-sm tracking-[0.3em] mb-4 group-hover:text-[#c8a96e] transition-colors duration-300">
              CRAVING MORE INK?
            </span>
            <div className="relative">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wider hover-text-reveal" style={{ fontFamily: 'Playfair Display, serif' }}>
                Follow the journey on Instagram
              </span>
              <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#c8a96e] transition-all duration-500 group-hover:w-full"></div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-[#c8a96e] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span className="text-xs tracking-[0.2em]">@TATTOOARTIST_SAM</span>
              <div className="w-8 h-[1px] bg-[#c8a96e]"></div>
            </div>
          </a>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 sm:p-8 md:p-12"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#c8a96e] transition-colors z-[60]"
            onClick={() => setLightboxImage(null)}
          >
            <X size={40} strokeWidth={1} />
          </button>
          <div className="relative w-full h-full flex items-center justify-center">
             <img
              src={lightboxImage}
              alt="Portfolio Full"
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleX {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}

