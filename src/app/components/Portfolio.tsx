import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const portfolioItems = [
  { id: 1, category: 'Realism', image: 'https://images.unsplash.com/photo-1775135436883-56af5c10a476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsaXN0aWMlMjB0YXR0b28lMjBhcnR8ZW58MXx8fHwxNzc3MDk4MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 2, category: 'Blackwork', image: 'https://images.unsplash.com/photo-1561491040-14a86bca9106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFja3dvcmslMjB0YXR0b298ZW58MXx8fHwxNzc3MDk4MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 3, category: 'Fine Line', image: 'https://images.unsplash.com/photo-1714787283995-3dba3caf1cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxyZWFsaXN0aWMlMjB0YXR0b28lMjBhcnR8ZW58MXx8fHwxNzc3MDk4MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 4, category: 'Blackwork', image: 'https://images.unsplash.com/photo-1561377455-190afb395ed7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxibGFja3dvcmslMjB0YXR0b28lMjBlbnwxfHx8fDE3NzcwOTgwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 5, category: 'Realism', image: 'https://images.unsplash.com/photo-1648421829584-8741e19cff92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxyZWFsaXN0aWMlMjB0YXR0b28lMjBhcnR8ZW58MXx8fHwxNzc3MDk4MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 6, category: 'Fine Line', image: 'https://images.unsplash.com/photo-1729009223965-daa0791bb6e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxyZWFsaXN0aWMlMjB0YXR0b28lMjBhcnR8ZW58MXx8fHwxNzc3MDk4MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 7, category: 'Blackwork', image: 'https://images.unsplash.com/photo-1557130641-1b14718f096a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxibGFja3dvcmslMjB0YXR0b298ZW58MXx8fHwxNzc3MDk4MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 8, category: 'Realism', image: 'https://images.unsplash.com/photo-1668260702387-77b7a9e585ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxyZWFsaXN0aWMlMjB0YXR0b28lMjBhcnR8ZW58MXx8fHwxNzc3MDk4MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 9, category: 'Fine Line', image: 'https://images.unsplash.com/photo-1557130680-6a87a704ac0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxibGFja3dvcmslMjB0YXR0b298ZW58MXx8fHwxNzc3MDk4MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 10, category: 'Blackwork', image: 'https://images.unsplash.com/photo-1556807215-f47c31a66ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxibGFja3dvcmslMjB0YXR0b298ZW58MXx8fHwxNzc3MDk4MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 11, category: 'Realism', image: 'https://images.unsplash.com/photo-1764698072833-dd137d82bbba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxkYXJrJTIwbW9vZHklMjB0YXR0b28lMjBzdHVkaW98ZW58MXx8fHwxNzc3MDk4MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 12, category: 'Fine Line', image: 'https://images.unsplash.com/photo-1770660853349-611d625b8550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkYXJrJTIwbW9vZHklMjB0YXR0b28lMjBzdHVkaW98ZW58MXx8fHwxNzc3MDk4MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters = ['All', 'Realism', 'Blackwork', 'Fine Line'];
  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          filteredItems.forEach((item, index) => {
            setTimeout(() => {
              setAnimatedItems(prev => new Set([...prev, item.id]));
            }, index * 100);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated, filteredItems]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12 text-center opacity-0 animate-fadeIn"
          style={{ fontFamily: 'Playfair Display, serif', animation: hasAnimated ? 'fadeIn 1s forwards' : 'none' }}
        >
          Portfolio
        </h2>

        <div className="flex justify-center gap-2 sm:gap-4 mb-8 md:mb-16 flex-wrap">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-4 md:px-6 py-2 tracking-wider text-xs sm:text-sm transition-all ${
                activeFilter === filter
                  ? 'bg-[#c8a96e] text-[#0a0a0a]'
                  : 'bg-transparent border border-[#c8a96e]/30 hover:border-[#c8a96e]'
              }`}
            >
              {filter.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`relative group cursor-pointer overflow-hidden transition-all duration-500 ${
                animatedItems.has(item.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              onClick={() => setLightboxImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[#c8a96e] text-sm sm:text-base md:text-xl tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-[#c8a96e] transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Portfolio"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
