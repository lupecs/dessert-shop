import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-brand-base">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-base via-[#f4e9dc] to-[#efe3d3]" />

        <div className="relative z-10 text-center">
          <div className="flex justify-center">
            <Image
              src="/media/logos/colored-main-logo.png"
              alt="Angelina’s Gelatinas Logo"
              width={500}
              height={500}
              priority
              className="w-[280px] md:w-[420px] h-auto drop-shadow-[0_10px_25px_rgba(189,147,132,0.25)]"
            />
          </div>

          {/* <div className="mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full border border-brand-secondary px-8 py-3 text-sm tracking-[0.18em] uppercase text-brand-secondary hover:bg-brand-secondary hover:text-[#2b2320] transition duration-300"
            >
              View Menu
            </Link>
          </div> */}
        </div>
      </section>

      {/* CARDS SECTION */}
      {/* MENU CATEGORY CARDS */}
      {/* <section className="px-6 pb-16 pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#2b2320]/55">
                Explore the menu
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-brand-primary">
                Gelatinas for every mood
              </h2>
            </div>

            <Link
              href="/menu"
              className="hidden md:inline-flex items-center justify-center rounded-full border border-brand-secondary px-6 py-3 text-xs uppercase tracking-[0.22em] text-brand-secondary hover:bg-brand-secondary hover:text-[#2b2320] transition"
            >
              View full menu
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Jello Cakes */}
            {/* <Link
              href="/"
              className="group rounded-3xl bg-white/40 backdrop-blur border border-brand-secondary/25 p-7 hover:bg-white/55 transition"
            >
              <h3 className="mt-3 font-display text-3xl text-brand-primary">
                Jello Cakes
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#2b2320]/70">
                Statement pieces for birthdays, celebrations, and “main
                character” moments.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-brand-secondary">
                Browse cakes
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link> */}

            {/* Cups */}
            {/* <Link
              href="/"
              className="group rounded-3xl bg-white/40 backdrop-blur border border-brand-secondary/25 p-7 hover:bg-white/55 transition"
            >
              <h3 className="mt-3 font-display text-3xl text-brand-primary">
                Cups
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#2b2320]/70">
                Individual cups, perfect for parties, events, and easy serving.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-brand-secondary">
                Browse cups
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link> */}

            {/* Bites */}
            {/* <Link
              href="/"
              className="group rounded-3xl bg-white/40 backdrop-blur border border-brand-secondary/25 p-7 hover:bg-white/55 transition"
            >
              <h3 className="mt-3 font-display text-3xl text-brand-primary">
                Bites
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#2b2320]/70">
                Tiny, cute, and dangerously snackable — made for sharing.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-brand-secondary">
                Browse bites
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link> */}
          {/* </div> */}

          {/* Mobile CTA */}
          {/* <div className="mt-8 md:hidden">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-full border border-brand-secondary px-6 py-3 text-xs uppercase tracking-[0.22em] text-brand-secondary hover:bg-brand-secondary hover:text-[#2b2320] transition"
            >
              View full menu
            </Link>
          </div> */}
        {/* </div> */}
       {/* </section> */} 

      {/* HOW ORDERING WORKS */}
      {/* <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-white/35 backdrop-blur border border-brand-secondary/20 p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.22em] text-[#2b2320]/55">
              How ordering works
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-brand-primary">
              Simple, sweet, and confirmed by email
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {/* Step 1 */}
              {/* <div className="rounded-2xl bg-white/35 border border-brand-secondary/15 p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-brand-secondary">
                  Step 01
                </div>
                <h3 className="mt-3 text-base font-medium tracking-wide text-[#2b2320]/85">
                  Submit a request
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#2b2320]/70">
                  Choose your category or our Party Package and tell us your
                  date, quantity, and preferences.
                </p>
              </div> */}

              {/* Step 2 */}
              {/* <div className="rounded-2xl bg-white/35 border border-brand-secondary/15 p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-brand-secondary">
                  Step 02
                </div>
                <h3 className="mt-3 text-base font-medium tracking-wide text-[#2b2320]/85">
                  We confirm details
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#2b2320]/70">
                  You’ll receive an email confirmation with availability, final
                  details, and total pricing.
                </p>
              </div> */}

              {/* Step 3 */}
              {/* <div className="rounded-2xl bg-white/35 border border-brand-secondary/15 p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-brand-secondary">
                  Step 03
                </div>
                <h3 className="mt-3 text-base font-medium tracking-wide text-[#2b2320]/85">
                  Pay + we prepare
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#2b2320]/70">
                  Payment is collected after confirmation. Then we prep your
                  gelatinas for pickup or delivery anywhere in Los Angeles, CA.
                </p>
              </div> */}
            {/* </div> */}

             {/* <div className="mt-10 flex flex-col gap-3 sm:flex-row"> */}
              {/* <Link
                href="/order"
                className="inline-flex items-center justify-center rounded-full bg-brand-secondary px-6 py-3 text-xs uppercase tracking-[0.22em] text-[#2b2320] hover:opacity-90 transition"
              >
                Request an order
              </Link> */}
              {/* <Link
                href="/faq"
                className="inline-flex items-center justify-center rounded-full border border-brand-secondary px-6 py-3 text-xs uppercase tracking-[0.22em] text-brand-secondary hover:bg-brand-secondary hover:text-[#2b2320] transition"
              >
                Read FAQ
              </Link> */}
            {/* </div> */}

             {/* <p className="mt-6 text-xs leading-relaxed text-[#2b2320]/55">
              Delivery is $12 anywhere in Los Angeles. Cancellations must be
              made 48 hours prior to delivery time.
             </p>  */}
           {/* </div> */}
         {/* </div> */}
       {/* </section>  */}
    </main>
  );
}
