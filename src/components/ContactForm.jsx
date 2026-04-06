import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { toast } from 'sonner';
import AnimatedSection from './AnimatedSection.jsx';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    toast.success('Sent. Mitch will reply soon.');
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-stone-200/60 bg-c2c-cream py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <AnimatedSection>
            <div>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Contact</p>
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-inter font-extrabold text-foreground tracking-tight leading-tight text-balance"
              >
                Book or ask a question
              </h2>
              <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
                Call or text, or use the form. Mitch replies same day when he can.
              </p>

              <ul className="mt-10 space-y-5 list-none p-0 m-0">
                <li>
                  <a
                    href="tel:0435835688"
                    className="focus-ring group flex items-center gap-4 rounded-xl p-2 -m-2 hover:bg-primary/5 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors shrink-0">
                      <Phone className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call or SMS</p>
                      <p className="text-foreground font-bold text-lg tabular-nums tracking-tight">0435 835 688</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:coast2coastmm@outlook.com"
                    className="focus-ring group flex items-center gap-4 rounded-xl p-2 -m-2 hover:bg-primary/5 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors shrink-0">
                      <Mail className="h-5 w-5 text-primary" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-bold break-all">coast2coastmm@outlook.com</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-4 rounded-xl p-2 -m-2">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Service area</p>
                    <p className="text-foreground font-bold leading-snug">
                      Sunshine Coast QLD
                      <span className="block text-sm font-semibold text-muted-foreground mt-1">
                        Maleny, Mapleton, Nambour, Maroochydore, Caloundra, Cooroy, surrounds
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-border/80 p-6 md:p-8 shadow-card ring-1 ring-black/[0.03] space-y-5"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="Your number"
                    required
                    className="h-12"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="vehicle" className="block text-sm font-medium text-foreground mb-1.5">
                  Vehicle
                </label>
                <Input
                  id="vehicle"
                  name="vehicle"
                  autoComplete="off"
                  placeholder="e.g. 2019 Holden Colorado ute"
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  What&apos;s going on?
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Symptoms, how long, any warning lights"
                  rows={4}
                  required
                  className="min-h-[110px] resize-y"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="focus-ring w-full h-12 rounded-full bg-primary hover:bg-red-800 text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                    <span className="sr-only">Sending</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" aria-hidden />
                    Send Quote Request
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                Your details go to Mitch only. No lists.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
