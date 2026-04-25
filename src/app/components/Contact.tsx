import { useState } from 'react';
import { Phone, MessageCircle, Instagram, MapPin, User, Mail, FileText, Calendar, ChevronDown } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'New Tattoo',
    idea: '',
    date: ''
  });

  const services = ['New Tattoo', 'Consultation', 'Touch Up', 'Cover Up'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Booking Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Idea:* ${formData.idea}%0A*Preferred Date:* ${formData.date || 'Not specified'}`;
    
    // Sam's WhatsApp number
    const whatsappNumber = '918149244404';
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    setFormData({ name: '', email: '', service: 'New Tattoo', idea: '', date: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c8a96e]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#c8a96e]/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Start Your <span className="text-[#c8a96e]">Story</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#c8a96e] mx-auto mb-8"></div>
          <p className="text-gray-400 tracking-[0.2em] text-sm uppercase">Secure your session today</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3
                className="text-2xl md:text-3xl mb-8 text-[#c8a96e]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Connect With Us
              </h3>

              <div className="space-y-8">
                <a
                  href="tel:+918149244404"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-full border border-[#c8a96e]/20 flex items-center justify-center group-hover:bg-[#c8a96e] group-hover:border-[#c8a96e] transition-all duration-500">
                    <Phone size={24} className="text-[#c8a96e] group-hover:text-[#0a0a0a] transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 tracking-widest uppercase mb-1">Direct Call</p>
                    <p className="text-lg md:text-xl font-light">+91 8149244404</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/918149244404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-full border border-[#c8a96e]/20 flex items-center justify-center group-hover:bg-[#c8a96e] group-hover:border-[#c8a96e] transition-all duration-500">
                    <MessageCircle size={24} className="text-[#c8a96e] group-hover:text-[#0a0a0a] transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 tracking-widest uppercase mb-1">WhatsApp</p>
                    <p className="text-lg md:text-xl font-light">Instant Consultation</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/tattooartist_sam?igsh=MWRybmJnYnJwbXFuOQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-full border border-[#c8a96e]/20 flex items-center justify-center group-hover:bg-[#c8a96e] group-hover:border-[#c8a96e] transition-all duration-500">
                    <Instagram size={24} className="text-[#c8a96e] group-hover:text-[#0a0a0a] transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 tracking-widest uppercase mb-1">Instagram</p>
                    <p className="text-lg md:text-xl font-light">@tattooartist_sam</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-[#c8a96e]/10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full border border-[#c8a96e]/20 flex items-center justify-center">
                  <MapPin size={24} className="text-[#c8a96e]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 tracking-widest uppercase mb-2">Visit Studio</p>
                  <p className="text-lg font-light leading-relaxed">
                    Sam’s Tattoo World Studio<br />
                    Shikrapur Rd, Near New Chaitanya Hospital<br />
                    Chakan, Maharashtra 410501
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-[#111] p-8 md:p-12 border border-[#c8a96e]/10 relative group hover:border-[#c8a96e]/30 transition-colors duration-500">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <User className="absolute left-0 top-3 text-[#c8a96e]/50 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-[#c8a96e]/20 pl-8 pr-4 py-3 text-white focus:border-[#c8a96e] outline-none transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-0 top-3 text-[#c8a96e]/50 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-[#c8a96e]/20 pl-8 pr-4 py-3 text-white focus:border-[#c8a96e] outline-none transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="relative">
                  <ChevronDown className="absolute right-0 top-3 text-[#c8a96e]/50 w-5 h-5 pointer-events-none" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#c8a96e]/20 py-3 text-white focus:border-[#c8a96e] outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {services.map(s => <option key={s} value={s} className="bg-[#111]">{s}</option>)}
                  </select>
                </div>

                <div className="relative">
                  <FileText className="absolute left-0 top-3 text-[#c8a96e]/50 w-5 h-5" />
                  <textarea
                    name="idea"
                    placeholder="Describe your vision or idea"
                    value={formData.idea}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-[#c8a96e]/20 pl-8 pr-4 py-3 text-white focus:border-[#c8a96e] outline-none transition-colors placeholder:text-gray-600 resize-none"
                  />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} className="text-[#c8a96e]" />
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Preferred Date</span>
                  </div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-[#c8a96e]/20 rounded-sm px-4 py-4 text-white focus:border-[#c8a96e] outline-none transition-colors [color-scheme:dark]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c8a96e] text-[#0a0a0a] py-5 text-sm tracking-[0.3em] font-bold hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden group"
                >
                  REQUEST CONSULTATION
                  <div className="w-10 h-[1px] bg-[#0a0a0a] group-hover:translate-x-2 transition-transform"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

