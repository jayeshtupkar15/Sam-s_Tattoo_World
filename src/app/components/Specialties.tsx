import { useEffect, useRef, useState } from 'react';
import { Paintbrush, Sparkles, Pen, Flame } from 'lucide-react';

const specialties = [
  {
    icon: Paintbrush,
    name: 'Realism',
    description: 'Lifelike portraits and photorealistic designs'
  },
  {
    icon: Flame,
    name: 'Blackwork',
    description: 'Bold geometric patterns and solid black art'
  },
  {
    icon: Pen,
    name: 'Fine Line',
    description: 'Delicate minimalist designs with precision'
  },
  {
    icon: Sparkles,
    name: 'Custom Design',
    description: 'Unique pieces tailored to your vision'
  }
];

export default function Specialties() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedCards, setAnimatedCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          specialties.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedCards(prev => new Set([...prev, index]));
            }, index * 100);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="specialties" ref={sectionRef} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-16 text-center"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Specialties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <div
                key={index}
                className={`bg-[#111] p-6 md:p-8 text-center transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_10px_40px_rgba(200,169,110,0.2)] ${
                  animatedCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex justify-center mb-4 md:mb-6">
                  <Icon size={40} className="text-[#c8a96e] md:w-12 md:h-12" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-xl md:text-2xl mb-2 md:mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {specialty.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
