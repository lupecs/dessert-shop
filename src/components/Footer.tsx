import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-base border-t border-brand-secondary/20">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3 items-start">
          {/* Logo + Brand Line */}
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/media/logos/jelly-logo.png"
                alt="Angelina’s Gelatinas"
                width={80}
                height={80}
                className="h-16 w-auto opacity-90 hover:opacity-100 transition"
              />
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-[#2b2320]/65 max-w-xs">
              A modern take on a nostalgic dessert — crafted for parties,
              celebrations, and sweet little moments in Los Angeles.
            </p>
          </div>

          {/* Explore Double Column */}
          <div className="md:col-span-2">
            {/* <h4 className="text-xs uppercase tracking-[0.22em] text-[#2b2320]/55">
              Explore
            </h4> */}

            {/* <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-4 text-sm">
              {[
                { href: "/menu", label: "Menu" },
                { href: "/order", label: "Order Request" },
                { href: "/merch", label: "Merch" },
                { href: "/about", label: "About" },
                { href: "/faq", label: "FAQ" },
                { href: "/", label: "Home" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative inline-block text-[#2b2320]/70 hover:text-[#2b2320] transition"
                >
                  {item.label}
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-brand-secondary/60 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </div> */}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 pt-6 border-t border-brand-secondary/15 text-xs text-[#2b2320]/55 flex flex-col md:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} Angelina’s Gelatinas</span>
          <span>Made with love in Los Angeles</span>
        </div>
      </div>
    </footer>
  );
}
