export default function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200/80 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img
              src="https://media.base44.com/images/public/user_69cf374edef9bfa9fad8e85c/35841f254_image.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full ring-1 ring-stone-200"
            />
            <div>
              <span className="text-stone-900 font-bold text-sm block leading-none">COAST 2 COAST</span>
              <span className="text-stone-500 text-[10px] tracking-[0.15em] uppercase">
                Mobile mechanics, Sunshine Coast QLD
              </span>
            </div>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-stone-600 text-sm"
            aria-label="Footer"
          >
            <a href="#services" className="focus-ring rounded-md hover:text-stone-900 transition-colors">
              Services
            </a>
            <a href="#why-us" className="focus-ring rounded-md hover:text-stone-900 transition-colors">
              Why Us
            </a>
            <a href="#reviews" className="focus-ring rounded-md hover:text-stone-900 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="focus-ring rounded-md hover:text-stone-900 transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-stone-500 text-xs text-center md:text-right max-w-[14rem] md:max-w-none">
            © {new Date().getFullYear()} Coast 2 Coast Mobile Mechanics. Sunshine Coast QLD.
          </p>
        </div>
      </div>
    </footer>
  );
}
