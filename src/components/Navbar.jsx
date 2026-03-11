import React, { useState, useEffect } from "react";
import resume from "../assets/SHASHI-RESUME.pdf";

const NAV_LINKS = ["Home", "About", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
      {/* ── Desktop pill ── */}
      <nav
        className={`hidden w-full max-w-fit items-center gap-1 rounded-full border px-5 py-2.5 transition-all duration-300 md:flex ${
          scrolled
            ? "border-white/15 bg-[#0a1828]/90 shadow-[0_8px_48px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
            : "border-white/8 bg-[#0d1b28]/70 shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        }`}
      >
        {/* Name / logo */}
        

        {/* Nav links */}
        {NAV_LINKS.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="rounded-full px-3.5 py-1.5 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white"
          >
            {item}
          </a>
        ))}

        {/* Resume CTA */}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 rounded-full bg-cyan-300 px-4 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 hover:shadow-[0_0_20px_rgba(103,232,249,0.35)]"
        >
          Resume
        </a>
      </nav>

      {/* ── Mobile pill ── */}
      <div className="w-full md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className={`flex w-full items-center justify-between rounded-full border px-5 py-3.5 transition-all duration-300 ${
            scrolled
              ? "border-white/15 bg-[#0a1828]/95 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
              : "border-white/10 bg-[#0d1b28]/85 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          }`}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
        >
          <span className="text-sm font-bold text-white">SG</span>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Menu</span>
            <span
              className={`text-xl font-light text-cyan-300 transition-transform duration-300 ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </div>
        </button>

        {/* Mobile dropdown */}
        <div
          id="mobile-nav-panel"
          className={`grid overflow-hidden transition-all duration-300 ${
            isOpen ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="space-y-3 rounded-[1.5rem] border border-white/10 bg-[#0b1828]/95 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
              <nav className="grid grid-cols-2 gap-2">
                {["Home", "About", "Experience", "Projects"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl border border-white/8 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/5 hover:text-cyan-200"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="col-span-2 rounded-2xl border border-white/8 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/5 hover:text-cyan-200"
                >
                  Contact
                </a>
              </nav>

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-cyan-300 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
