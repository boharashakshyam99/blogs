import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full py-12 px-6 mt-auto bg-gray-400 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-manrope font-bold text-zinc-900 dark:text-white uppercase tracking-tighter">
              The Digital Curator
            </span>
            <p className="font-newsreader italic text-sm text-zinc-500">
              © 2024 The Digital Curator. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              className="text-zinc-500 hover:text-emerald-700 transition-all font-newsreader italic text-sm"
              href="#"
            >
              Archives
            </a>
            <a
              className="text-zinc-500 hover:text-emerald-700 transition-all font-newsreader italic text-sm"
              href="#"
            >
              Privacy
            </a>
            <a
              className="text-zinc-500 hover:text-emerald-700 transition-all font-newsreader italic text-sm"
              href="#"
            >
              Terms
            </a>
            <a
              className="text-zinc-500 hover:text-emerald-700 transition-all font-newsreader italic text-sm"
              href="#"
            >
              Newsletter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
