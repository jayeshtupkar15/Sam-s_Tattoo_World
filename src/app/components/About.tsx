import { useEffect, useRef, useState } from 'react';
import artistPortrait from '../../assets/images/artist-portrait.jpeg';

function AnimatedCounter({ end, label, suffix = '' }: { end: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const steps = 60;
          const increment = end / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 md:mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
        <span className="text-[#c8a96e]">{count}</span>{suffix}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm tracking-wider text-gray-400">{label}</div>
    </div>
  );
}

export default function About() {
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const scrolled = window.scrollY;
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setParallaxY((scrolled - aboutSection.offsetTop) * 0.3);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative overflow-hidden">
            <div
              className="relative"
              style={{ transform: `translateY(${parallaxY}px)` }}
            >
              <img
                src={artistPortrait}
                alt="Sam’s Tattoo World"
                className="w-full aspect-square md:aspect-[3/4] object-cover border-2 border-[#c8a96e] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The Artist
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 md:mb-8">
              With over a decade of experience in the art of tattooing, I specialize in creating custom pieces that tell your story. From intricate realism to bold blackwork, each design is crafted with precision and passion. My studio is a sanctuary where your vision comes to life on skin.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12 pt-8 md:pt-12 border-t border-[#c8a96e]/20">
              <AnimatedCounter end={12} label="YEARS EXPERIENCE" suffix="+" />
              <AnimatedCounter end={850} label="TATTOOS DONE" suffix="+" />
              <AnimatedCounter end={15} label="STYLES MASTERED" suffix="+" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
