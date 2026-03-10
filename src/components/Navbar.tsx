"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const leftNav = [
  { href: "/", label: "Menu" },
  { href: "/order", label: "Order Request" },
  { href: "/merch", label: "Merch" },
];

const rightNav = [
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-brand-base/85 backdrop-blur" : "bg-transparent",
      ].join(" ")}
    >
      {/* <div className="mx-auto max-w-6xl px-5"> */}
        {/* <div className="relative flex h-16 items-center justify-between md:h-24"> */}
          {/* Mobile left: menu button */}
          {/* <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={[
              "md:hidden inline-flex items-center justify-center rounded-full px-3 py-2 text-xs uppercase tracking-[0.18em] transition",
              scrolled
                ? "border border-brand-secondary/60 text-brand-secondary hover:bg-brand-secondary hover:text-[#2b2320]"
                : "border border-brand-secondary/70 text-brand-secondary hover:bg-brand-secondary hover:text-[#2b2320]",
            ].join(" ")}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            Menu
          </button> */}

          {/* Left nav (desktop) */}
          {/* <nav className="hidden md:flex items-center gap-7">
            {leftNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "group relative font-body text-sm tracking-wide transition",
                  scrolled
                    ? "text-[#2b2320]/70 hover:text-[#2b2320]"
                    : "text-[#2b2320]/80 hover:text-[#2b2320]",
                ].join(" ")}
              >
                {item.label}
                <span className="pointer-events-none absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-brand-secondary/80 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav> */}

          {/* Center logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
            aria-label="Home"
          >
            <Image
              src="/media/logos/jelly-logo.png"
              alt="Angelina’s Gelatinas"
              width={80}
              height={80}
              priority
              className="h-12 w-auto md:h-24 opacity-90 hover:opacity-100 transition"
            />
          </Link>

          {/* Right nav + CTA (desktop) */}
          {/* <div className="hidden md:flex items-center gap-7">
            <nav className="flex items-center gap-7">
              {rightNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "group relative font-body text-sm tracking-wide transition",
                    scrolled
                      ? "text-[#2b2320]/70 hover:text-[#2b2320]"
                      : "text-[#2b2320]/80 hover:text-[#2b2320]",
                  ].join(" ")}
                >
                  {item.label}
                  <span className="pointer-events-none absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-brand-secondary/80 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            <Link
              href="/order"
              className={[
                "rounded-full px-5 py-2 text-sm uppercase tracking-[0.18em] transition",
                "border border-brand-secondary/70 text-brand-secondary hover:bg-brand-secondary hover:text-[#2b2320]",
              ].join(" ")}
            >
              Request
            </Link>
          </div> */}

          {/* Mobile right: order button */}
          {/* <div className="md:hidden">
            <Link
              href="/order"
              className="rounded-full border border-brand-secondary/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-brand-secondary hover:bg-brand-secondary hover:text-[#2b2320] transition"
            >
              Order
            </Link>
          </div>
        </div> */}

        {/* Mobile dropdown */}
        {/* {open && (
          <div className="md:hidden pb-5">
            <div className="mt-2 rounded-2xl bg-white/40 backdrop-blur border border-brand-secondary/30 p-4">
              <div className="grid gap-2">
                {[...leftNav, ...rightNav].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 font-body text-sm tracking-wide text-[#2b2320]/80 hover:bg-white/40 transition"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/order"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-secondary px-4 py-3 text-sm uppercase tracking-[0.18em] text-[#2b2320] hover:opacity-90 transition"
                >
                  Request Order
                </Link>
              </div>
            </div>
          </div>
        )} */}
      {/* </div> */}
    </header>
  );
}
