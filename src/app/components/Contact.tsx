import { useState } from 'react';
import { Phone, MessageCircle, Instagram, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idea: '',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon to schedule your consultation.');
    setFormData({ name: '', email: '', idea: '', date: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#111] mb-20 md:mb-0">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-16 text-center"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Book Your Session
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3
              className="text-2xl md:text-3xl mb-6 md:mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Get In Touch
            </h3>

            <div className="space-y-4 md:space-y-6">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 md:gap-4 text-lg sm:text-xl md:text-2xl hover:text-[#c8a96e] transition-colors group"
              >
                <Phone size={24} className="text-[#c8a96e] group-hover:scale-110 transition-transform md:w-8 md:h-8" />
                <span className="text-base sm:text-lg md:text-2xl">+91 8149244404</span>
              </a>

              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 md:gap-4 text-sm sm:text-base hover:text-[#c8a96e] transition-colors group"
              >
                <MessageCircle size={24} className="text-[#c8a96e] group-hover:scale-110 transition-transform md:w-7 md:h-7" />
                <span>WhatsApp Consultation</span>
              </a>

              <a
                href="https://www.instagram.com/tattooartist_sam?igsh=MWRybmJnYnJwbXFuOQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 md:gap-4 text-sm sm:text-base hover:text-[#c8a96e] transition-colors group"
              >
                <Instagram size={24} className="text-[#c8a96e] group-hover:scale-110 transition-transform md:w-7 md:h-7" />
                <span>Sam’s Tattoo World</span>
              </a>

              <div className="flex items-start gap-3 md:gap-4 text-gray-300 pt-4 text-sm sm:text-base">
                <MapPin size={24} className="text-[#c8a96e] flex-shrink-0 mt-1 md:w-7 md:h-7" />
                <div>
                  <div className="font-semibold mb-1">Sam’s Tattoo World Studio</div>
                  <div>123 Artisan Lane</div>
                  <div>Brooklyn, NY 11201</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0a] border border-[#c8a96e]/30 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-white placeholder-gray-500 focus:border-[#c8a96e] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0a] border border-[#c8a96e]/30 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-white placeholder-gray-500 focus:border-[#c8a96e] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="idea"
                  placeholder="Describe Your Tattoo Idea"
                  value={formData.idea}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#0a0a0a] border border-[#c8a96e]/30 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-white placeholder-gray-500 focus:border-[#c8a96e] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <input
                  type="date"
                  name="date"
                  placeholder="Preferred Date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-[#c8a96e]/30 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-white placeholder-gray-500 focus:border-[#c8a96e] focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#c8a96e] text-[#0a0a0a] px-6 md:px-8 py-3 md:py-4 text-sm md:text-base tracking-wider hover:bg-[#d4b57a] transition-colors font-semibold"
              >
                SUBMIT REQUEST
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
