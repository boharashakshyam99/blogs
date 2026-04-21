import React from "react";
import Navbar from "../component/Navbar";

const AboutPage = () => {
  return (
    <div>
      <>
        {/* TopAppBar */}
        <Navbar />
        <main className="pt-32 pb-24">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-8 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-8">
                <span className="font-label text-sm uppercase tracking-widest text-on-surface-variant mb-4 block">
                  Our Origin Story
                </span>
                <h1 className="font-headline text-6xl md:text-8xl text-on-surface leading-[0.9] tracking-tighter italic">
                  Silence the digital noise. <br /> Let the story{" "}
                  <span className="text-primary">breathe</span>.
                </h1>
              </div>
              <div className="md:col-span-4 pb-4">
                <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                  The Curated Gallery was born from a desire to return to
                  intentionality in a world of algorithmic haste.
                </p>
              </div>
            </div>
          </section>
          {/* The Narrative Section (Asymmetric) */}
          <section className="max-w-7xl mx-auto px-8 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-[4/5] bg-surface-container-low rounded-lg overflow-hidden">
                  <img
                    alt="Portrait of a creative director in a minimalist sunlit studio, soft charcoal aesthetic"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    data-alt="thoughtful portrait of a professional woman in a minimalist studio with soft natural light and architectural shadows"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkhqrhrO_9yRAuByBiP8V-_VJOCJdsaBpyWezcy1Uq3HLUyNVA4VHdZKoB6dUzSgRuV_4BYGF85MLU4k6UPPZ7ga4USXPpaItySlvptkkxVokWwt-Mrc5KbkELnsaAdiG4WuIcw6i22ng0RLsoUcY4y4Om-ikToGhlRLvVKYw_qMe5UUSBWdAjO6Rjhlj_8Ru4nriEgWgkQPn62TP1QneOp50Nk8ysrU7dd1XUvdTcyPgIlPQ3szlIb5i-ohgrpDU2Ulsyxu9AvKg"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-8">
                <h2 className="font-headline text-4xl text-on-surface leading-tight">
                  Founded on the principle that quality is a quiet pursuit.
                </h2>
                <div className="space-y-6 font-body text-on-surface-variant leading-loose">
                  <p>
                    In 2024, we realized that the internet had become a crowded
                    room where everyone was shouting. We wanted to build a
                    gallery—a space where high-end editorial content could sit
                    comfortably in the expansive white space it deserves.
                  </p>
                  <p>
                    Our philosophy is simple: we treat every article as an
                    artifact. Every sentence is weighed for its resonance, and
                    every visual is curated to provide a moment of stillness. We
                    don't chase trends; we curate perspectives that endure.
                  </p>
                  <div className="pt-4">
                    <span className="font-headline text-2xl italic text-primary">
                      — Julian Vane, Editor-in-Chief
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Values / Bento Grid */}
          <section className="bg-surface-container-low py-24">
            <div className="max-w-7xl mx-auto px-8">
              <div className="mb-16">
                <h3 className="font-headline text-3xl text-on-surface">
                  The Pillars of the Gallery
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-surface-container-lowest p-10 rounded-xl space-y-4 hover:shadow-2xl transition-shadow duration-500">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    auto_awesome
                  </span>
                  <h4 className="font-headline text-2xl">
                    Curation over Content
                  </h4>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    We believe in the power of "No." By rejecting the filler, we
                    make room for the exceptional.
                  </p>
                </div>
                {/* Card 2 */}
                <div className="bg-surface-container-lowest p-10 rounded-xl space-y-4 hover:shadow-2xl transition-shadow duration-500">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    history_edu
                  </span>
                  <h4 className="font-headline text-2xl">
                    The Editorial Voice
                  </h4>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    A blend of classic journalistic integrity and contemporary
                    visual storytelling.
                  </p>
                </div>
                {/* Card 3 */}
                <div className="bg-surface-container-lowest p-10 rounded-xl space-y-4 hover:shadow-2xl transition-shadow duration-500">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    filter_vintage
                  </span>
                  <h4 className="font-headline text-2xl">
                    Aesthetic Stillness
                  </h4>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Design that respects the reader's eye, utilizing whitespace
                    as a structural element.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Team Quote / Full Width Image */}
          <section className="max-w-7xl mx-auto px-8 mt-32">
            <div className="relative rounded-2xl overflow-hidden h-[600px] flex items-center justify-center">
              <img
                alt="Aerial view of a clean, minimalist design studio with architectural magazines and coffee"
                className="absolute inset-0 w-full h-full object-cover brightness-50"
                data-alt="wide shot of a bright modern office with large windows, indoor plants, and wooden furniture in a peaceful atmosphere"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiC9LZbWUgh1YpRQXhA2ryeC6d4jaLpBZo3UnW6lGaM2QJVzO6fXnvWCWkzu1NjmRXkVId78iaUv4hB-TU7-vtMryy-559f-pzyJ7XZnL3o_hyoJP4dBojnO_3Q7NyvWS2ejxWlXbApLPB8ei4oy32JIToGO0ZLjJXhHptJ_LTAZk63vM_hhVazMJC3zj6kosMCXQT65e6F41xGezIy7cnHvWxsetZrCdEs_fyCYspPU48mKqTsBcSF35ZSABihGQGYarBJSoQfA8"
              />
              <div className="relative z-10 text-center max-w-2xl px-6">
                <h2 className="font-headline text-4xl md:text-5xl text-white italic leading-tight">
                  "We are not just building a blog; we are framing the future of
                  digital discovery."
                </h2>
              </div>
            </div>
          </section>
          {/* Newsletter / Contact CTA */}
          <section className="max-w-3xl mx-auto px-8 mt-32 text-center">
            <h3 className="font-headline text-4xl text-on-surface mb-6">
              Join the Collection
            </h3>
            <p className="font-body text-on-surface-variant mb-10 leading-relaxed">
              Receive our monthly digest of curated essays, visual experiments,
              and architectural insights. No noise, just the essence.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                className="flex-grow bg-surface-container-highest border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-4 py-3 font-body"
                placeholder="Your email address"
                type="email"
              />
              <button
                className="bg-primary text-on-primary px-8 py-3 rounded-md font-label font-medium hover:bg-primary-dim transition-colors"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </section>
        </main>
        {/* Footer */}
        <footer className="bg-slate-100 dark:bg-slate-950 w-full mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-7xl mx-auto">
            <div className="mb-8 md:mb-0">
              <span className="font-serif italic text-lg text-slate-600 dark:text-slate-400">
                The Curated Gallery
              </span>
              <p className="text-slate-500 dark:text-slate-500 text-sm mt-2 font-sans">
                © 2024 The Curated Gallery. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a
                className="text-slate-500 dark:text-slate-500 font-sans text-sm hover:text-slate-800 dark:hover:text-slate-200 transition-all"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-slate-500 dark:text-slate-500 font-sans text-sm hover:text-slate-800 dark:hover:text-slate-200 transition-all"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-slate-500 dark:text-slate-500 font-sans text-sm hover:text-slate-800 dark:hover:text-slate-200 transition-all"
                href="#"
              >
                RSS Feed
              </a>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default AboutPage;
