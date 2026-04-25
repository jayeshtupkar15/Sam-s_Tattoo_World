import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [revealedText, setRevealedText] = useState('');
  const name = 'Sam’s Tattoo World';
  const tagline = 'Custom Ink. Timeless Art.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= name.length) {
        setRevealedText(name.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url('https://i.pinimg.com/1200x/c1/80/b8/c180b8a1399f0d34c14e9da4081462e9.jpg') 20% center/cover no-repeat`,
      }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjAzIiAvPjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative z-10 text-center px-6 w-full">
        <h1
          className="text-[clamp(32px,12vw,120px)] leading-[1.1] sm:leading-none mb-2 tracking-tight px-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {revealedText}<span className="animate-pulse">|</span>
        </h1>
        <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
          <div className="h-[1px] w-8 md:w-12 bg-[#c8a96e]/30"></div>
          <span className="text-xs md:text-sm tracking-[0.4em] text-white/60 font-light italic">By Sam Rathod</span>
          <div className="h-[1px] w-8 md:w-12 bg-[#c8a96e]/30"></div>
        </div>
        <p className="text-[10px] xs:text-xs sm:text-base md:text-xl lg:text-2xl tracking-[0.1em] sm:tracking-[0.3em] text-[#c8a96e] mb-8 sm:mb-12 uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
          {tagline}
        </p>

        <div className="overflow-hidden whitespace-nowrap border-y border-[#c8a96e]/30 py-3 md:py-4">
          <div className="inline-block animate-marquee">
            <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] mx-4 sm:mx-6 md:mx-8">CUSTOM TATTOOS</span>
            <span className="text-[#c8a96e]">·</span>
            <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] mx-4 sm:mx-6 md:mx-8">PERMANENT ART</span>
            <span className="text-[#c8a96e]">·</span>
            <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] mx-4 sm:mx-6 md:mx-8">BOOK YOUR SESSION</span>
            <span className="text-[#c8a96e]">·</span>
            <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] mx-4 sm:mx-6 md:mx-8">CUSTOM TATTOOS</span>
            <span className="text-[#c8a96e]">·</span>
            <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] mx-4 sm:mx-6 md:mx-8">PERMANENT ART</span>
            <span className="text-[#c8a96e]">·</span>
            <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] mx-4 sm:mx-6 md:mx-8">BOOK YOUR SESSION</span>
            <span className="text-[#c8a96e]">·</span>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-[#c8a96e] hover:text-white transition-colors"
      >
        <ChevronDown size={32} />
      </button>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
