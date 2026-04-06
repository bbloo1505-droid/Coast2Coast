import { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[65] lg:hidden bg-white/95 backdrop-blur-xl border-t border-stone-200 px-4 py-3 safe-area-pb shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
      <div className="flex gap-3 max-w-lg mx-auto">
        <a
          href="tel:0435835688"
          className="focus-ring flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white py-3.5 rounded-full text-sm font-semibold transition-colors shadow-md shadow-primary/20"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden />
          Call Now
        </a>
        <a
          href="#contact"
          className="focus-ring flex-1 flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 py-3.5 rounded-full text-sm font-semibold transition-colors"
        >
          <MessageSquare className="h-4 w-4 shrink-0" aria-hidden />
          Get Quote
        </a>
      </div>
    </div>
  );
}
