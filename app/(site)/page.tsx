// app/(site)/page.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jumuika Hub KE — WhatsApp-first Smart Business Toolkit",
  description:
    "Connect vendors, institutions, and students on WhatsApp. Book services, buy items, and run real-time commerce with no apps needed.",
};

const WHATSAPP_BOOK =
  "https://wa.me/254700000000?text=Hi%20Jumuika,%20I%20want%20to%20book%20a%20service.";
const WHATSAPP_SHOP =
  "https://wa.me/254700000000?text=Hi%20Jumuika,%20I%20want%20to%20buy%20an%20item.";

export default function HomePage() {
  return (
    <main className="relative isolate">
      {/* Hero */}
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-b from-emerald-50 via-emerald-50/70 to-transparent
          dark:from-emerald-900/20 dark:via-emerald-900/10 dark:to-transparent
        "
      >
        {/* soft radial wash to keep the top elegant */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 z-0 h-[38rem] w-[70rem] -translate-x-1/2 rounded-full
                     bg-[radial-gradient(ellipse_at_center,theme(colors.emerald.200/.35),transparent_60%)]
                     dark:bg-[radial-gradient(ellipse_at_center,theme(colors.emerald.400/.18),transparent_60%)]"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:py-24 lg:py-28">
          <h1
            className="
              text-center font-black leading-tight tracking-tight
              text-emerald-900 dark:text-emerald-100
              text-4xl sm:text-5xl lg:text-[3.25rem]
              opacity-0 translate-y-2 animate-[fadeInUp_.6s_ease-out_.05s_forwards]
            "
          >
            Welcome to Jumuika Hub KE
          </h1>

          <p
            className="
              mx-auto mt-5 max-w-3xl text-center text-slate-600 dark:text-slate-300
              opacity-0 translate-y-2 animate-[fadeInUp_.6s_ease-out_.12s_forwards]
            "
          >
            Jumuika Hub KE is a WhatsApp-first smart business toolkit that
            connects vendors, institutions, and students seamlessly. Real-time
            commerce. No apps needed.
          </p>

          {/* CTAs */}
          <div
            className="
              mx-auto mt-10 flex w-full max-w-xl flex-col gap-4 sm:flex-row
              opacity-0 translate-y-2 animate-[fadeInUp_.6s_ease-out_.18s_forwards]
            "
          >
            <CTA
              href={WHATSAPP_BOOK}
              label="Book Services via WhatsApp"
              icon="arrow"
            />
            <CTA
              href={WHATSAPP_SHOP}
              label="Buy Items via WhatsApp"
              icon="cart"
              variant="outline"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- sub-components ---------------------------- */

type CTAProps = {
  href: string;
  label: string;
  icon?: "arrow" | "cart";
  variant?: "solid" | "outline";
};

function CTA({ href, label, icon = "arrow", variant = "solid" }: CTAProps) {
  const base =
    "group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-5 text-[15px] font-semibold transition-all duration-200 sm:w-1/2";
  const solid =
    "bg-emerald-700 text-white shadow-sm ring-1 ring-emerald-700/70 hover:translate-y-[-1px] hover:shadow-md hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600";
  const outline =
    "bg-white text-emerald-800 ring-1 ring-emerald-300 hover:translate-y-[-1px] hover:bg-emerald-50 hover:ring-emerald-400 dark:bg-transparent dark:text-emerald-100 dark:ring-emerald-700/60 dark:hover:bg-emerald-900/20";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variant === "outline" ? outline : solid}`}
    >
      <span className="truncate">{label}</span>
      {icon === "arrow" ? (
        <svg
          className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
        </svg>
      ) : (
        <svg
          className="size-4 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7 18a2 2 0 104 0 2 2 0 00-4 0zm8 0a2 2 0 104 0 2 2 0 00-4 0zM3 4h2l2.68 9.394A3 3 0 0010.58 16H18a3 3 0 002.857-2.03l1.89-5.67A1 1 0 0021.8 7H7.1l-.35-1.213A2 2 0 004.82 4H3z" />
        </svg>
      )}
    </Link>
  );
}

/* ------------------------------- animations ------------------------------ */
/* Tailwind plugin not required: small keyframe for fadeInUp */
declare global {
  interface CSSStyleDeclaration {
    // allow arbitrary animation name usage
  }
}

/* Add the following to your globals.css if not already present:

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}
*/
