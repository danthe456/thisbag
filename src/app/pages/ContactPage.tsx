import { useState } from 'react';
import { Mail, Phone, MapPin, Smartphone, Link as LucideLink, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const khakiColor = '#C3A681';
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simula volver al estado normal tras 5 segundos
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header / Navbar */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-semibold tracking-tight text-neutral-900">
              ThisBag
            </Link>
            <Button asChild variant="ghost" size="sm">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Título de la página */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-[#2D2D2D]">
            Get a Quote
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Tell us about your project. Even without a logo yet, we can help you choose the best packaging for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna Izquierda: Formulario */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <input required type="text" className="w-full p-3 rounded-lg border border-neutral-200 outline-none transition-all focus:border-[#C3A681] focus:ring-2 focus:ring-[#C3A681]/20" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <input required type="tel" className="w-full p-3 rounded-lg border border-neutral-200 outline-none transition-all focus:border-[#C3A681] focus:ring-2 focus:ring-[#C3A681]/20" placeholder="+1 234 567..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input required type="email" className="w-full p-3 rounded-lg border border-neutral-200 outline-none transition-all focus:border-[#C3A681] focus:ring-2 focus:ring-[#C3A681]/20" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <select className="w-full p-3 rounded-lg border border-neutral-200 outline-none bg-white focus:border-[#C3A681] focus:ring-2 focus:ring-[#C3A681]/20 transition-all">
                      <option>Custom Quote</option>
                      <option>Product Inquiry</option>
                      <option>Partnership</option>
                      <option>Other Questions</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message / Questions</label>
                    <textarea required rows={4} className="w-full p-3 rounded-lg border border-neutral-200 outline-none transition-all focus:border-[#C3A681] focus:ring-2 focus:ring-[#C3A681]/20" placeholder="Tell us about your needs..."></textarea>
                  </div>

                  <Button type="submit" className="w-full py-6 text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: khakiColor, color: 'white' }}>
                    Send Inquiry
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="flex justify-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold">Inquiry Sent!</h3>
                  <p className="text-neutral-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>Send another message</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Columna Derecha: Información de Contacto y Mapa */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@thisbag.com' },
                { icon: Phone, label: 'Fixed Line', value: '+1 (555) 123-4567' },
                { icon: Smartphone, label: 'WhatsApp', value: '+1 (555) 987-6543' },
                { icon: MapPin, label: 'Location', value: '123 Packaging St, New York, NY' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                  <div className="p-3 rounded-full bg-[#F3F0E9]" style={{ color: khakiColor }}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{item.label}</h3>
                    <p className="text-neutral-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-sm border border-neutral-200 bg-neutral-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1676481234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
           {/* Footer */}
      <footer className="border-t border-neutral-200 py-12" style={{ backgroundColor: 'var(--warm-beige-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">ThisBag</h3>
              <p className="text-sm text-neutral-600">
                Premium custom packaging solutions for businesses of all sizes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link to="/catalog" className="hover:text-neutral-900 transition-colors">Products</Link></li>
                <li><Link to="/catalog" className="hover:text-neutral-900 transition-colors">About</Link></li>
                <li><Link to="/catalog" className="hover:text-neutral-900 transition-colors">Get a Quote</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Contact</h4>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors block"
              >
                WhatsApp: +1 234 567 890
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-300 text-center">
            <p className="text-sm text-neutral-600">
              © 2026 ThisBag. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}