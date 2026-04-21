import React from "react";

const Profile = () => {
  return (
    <div>
      <>
        <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
          {/* Profile Header Section (Asymmetric Editorial Layout) */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-24">
            <div className="md:col-span-4 relative group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low">
                <img
                  alt="User Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="editorial close-up portrait of a thoughtful creative professional in a sunlit studio with soft cinematic shadows and minimalist background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZUXxrEW47Xzex9VkEVsybJX0NV5aF44zI1WuqGMrUG9PjV_KhkO2FRxhfeVKSPAaTdaSwZrf0R_5bNQBWoYj9K6xOtIVE_1yKSI25rJgI26DSW0y3C_dsf4nF6lmFMNRzNg0L9OplGhYVCIL6UrIVW3UGnvCOdqaQup8sqGeJZTNRNdgcgYwvn42Fl8jaxRjliepnZNpVgNBYrYgzkTUGCV-znOKv3KcKXX2zw8_8ykWDutsnE3Yt1Aj0ZAvsSNsavTqQH7dZfCs"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-tertiary-container text-on-tertiary-container px-6 py-2 rounded-full font-label text-sm tracking-wide shadow-sm">
                Lead Curator
              </div>
            </div>
            <div className="md:col-span-8 pt-4">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                  <h1 className="text-5xl md:text-7xl font-serif italic text-on-surface tracking-tight mb-2">
                    Julian Vane
                  </h1>
                  <p className="text-on-surface-variant font-body text-xl max-w-xl leading-relaxed">
                    Exploring the intersection of architectural minimalism and
                    digital transience. Based in London, curating global
                    perspectives.
                  </p>
                </div>
                <button className="bg-primary text-on-primary px-8 py-3 rounded-md font-label text-sm tracking-widest hover:opacity-90 transition-opacity flex items-center gap-2">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    add
                  </span>
                  CREATE NEW POST
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 py-8 border-t border-outline-variant/15">
                <div>
                  <span className="block text-xs font-label text-on-surface-variant uppercase tracking-[0.2em] mb-1">
                    Published
                  </span>
                  <span className="text-3xl font-serif italic text-primary">
                    42
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-label text-on-surface-variant uppercase tracking-[0.2em] mb-1">
                    Followers
                  </span>
                  <span className="text-3xl font-serif italic text-primary">
                    12.8k
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-label text-on-surface-variant uppercase tracking-[0.2em] mb-1">
                    Curated
                  </span>
                  <span className="text-3xl font-serif italic text-primary">
                    156
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-24 bg-surface-container-low p-12 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-serif italic mb-2">
                  Continue where you left off
                </h3>
                <p className="text-on-surface-variant">
                  You have 3 unpublished drafts awaiting your final touch.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="bg-surface-container-lowest text-on-surface px-6 py-3 rounded-md font-label text-sm border border-outline-variant/20 hover:bg-surface transition-colors">
                  VIEW ALL DRAFTS
                </button>
                <button className="bg-primary text-on-primary px-6 py-3 rounded-md font-label text-sm shadow-lg shadow-primary/20 hover:shadow-xl transition-all">
                  EDIT LATEST
                </button>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="bg-slate-100 dark:bg-slate-950 w-full mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-7xl mx-auto">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <span className="font-serif italic text-lg text-slate-600 dark:text-slate-400 block mb-2">
                The Curated Gallery
              </span>
              <p className="text-slate-600 dark:text-slate-400 font-sans text-sm tracking-normal">
                © 2024 The Curated Gallery. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a
                className="text-slate-500 dark:text-slate-500 font-sans text-sm hover:text-slate-800 dark:hover:text-slate-200 transition-all underline text-slate-900 dark:text-white"
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
        {/* Navigation Drawer (Hidden by default, triggered by menu) */}
        <div
          className="hidden fixed inset-y-0 left-0 w-80 z-[60] p-6 bg-white dark:bg-slate-950 shadow-2xl transition-transform duration-300 transform -translate-x-full"
          id="drawer"
        >
          <div className="flex items-center justify-between mb-12">
            <span className="font-serif text-xl text-slate-700 dark:text-slate-300">
              Navigation
            </span>
            <span
              className="material-symbols-outlined cursor-pointer"
              onclick="document.getElementById('drawer').classList.add('-translate-x-full'); setTimeout(()=>document.getElementById('drawer').classList.add('hidden'), 300)"
            >
              close
            </span>
          </div>
          <nav className="flex flex-col gap-2">
            <a
              className="flex items-center gap-4 p-4 text-slate-500 dark:text-slate-400 font-sans text-lg tracking-wide hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg"
              href="#"
            >
              <span className="material-symbols-outlined">home</span> Home
            </a>
            <a
              className="flex items-center gap-4 p-4 text-slate-500 dark:text-slate-400 font-sans text-lg tracking-wide hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg"
              href="#"
            >
              <span className="material-symbols-outlined">info</span> About
            </a>
            <a
              className="flex items-center gap-4 p-4 text-slate-500 dark:text-slate-400 font-sans text-lg tracking-wide hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg"
              href="#"
            >
              <span className="material-symbols-outlined">mail</span> Contact
            </a>
            <a
              className="flex items-center gap-4 p-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-sans text-lg tracking-wide"
              href="#"
            >
              <span className="material-symbols-outlined">account_circle</span>{" "}
              Profile
            </a>
          </nav>
        </div>
      </>
    </div>
  );
};

export default Profile;
