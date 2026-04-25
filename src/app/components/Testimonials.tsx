import { useEffect, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Sam turned my idea into something way better than I imagined. The detailing is amazing and the whole experience felt super professional.",
    name: "Aarav Sharma"
  },
  {
    text: "Got two tattoos done at Sam’s Tattoo World and both are absolutely perfect. The designs feel unique and very personal.",
    name: "Riya Patel"
  },
  {
    text: "The realism in my tattoo is insane. Everyone keeps asking me where I got it done. Easily one of the best tattoo artists around.",
    name: "Karan Mehta"
  },
  {
    text: "From the first consultation to the final session, everything was smooth. Clean studio, great vibe, and top-notch work.",
    name: "Neha Verma"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-16 text-center"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Testimonials
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full px-4 sm:px-6 md:px-8 py-8 md:py-12 text-center"
              >
                <Quote size={36} className="text-[#c8a96e] mx-auto mb-4 md:mb-6 opacity-50 md:w-12 md:h-12" />

                <div className="flex justify-center gap-1 mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#c8a96e] text-[#c8a96e] md:w-5 md:h-5" />
                  ))}
                </div>

                <p
                  className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8 italic"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  "{testimonial.text}"
                </p>

                <div className="text-[#c8a96e] tracking-wider text-xs sm:text-sm">
                  — {testimonial.name}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-[#c8a96e] w-8' : 'bg-gray-600'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
