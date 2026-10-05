import React from "react";
import { Link } from "react-router-dom";
import { IconWhatsApp /*, IconMessenger */ } from "./ContactIcons.jsx";
import { WHATSAPP_URL /*, MESSENGER_URL */ } from "../utils/contactLinks.js";

const IconMail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const IconPin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export default function Kontakt() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-20 border-t border-stone-800">
      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-50 tracking-wide">
              Raven{" "}
              <span className="italic font-light text-stone-500">Leather</span>
            </h2>
            <p className="text-sm font-light leading-relaxed text-stone-400 max-w-md">
              Tworzę galanterię skórzaną dla tych, którzy cenią autentyczność.
              Każdy produkt opowiada inną historię – Twoją historię.
            </p>
          </div>

          <div className="space-y-6 md:pl-12">
            <h3 className="text-stone-50 text-xs font-bold uppercase tracking-[0.2em]">
              Kontakt
            </h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-4 group">
                <span className="p-2 bg-stone-800 rounded-full text-stone-300 group-hover:text-white group-hover:bg-stone-700 transition-all duration-300">
                  <IconPin />
                </span>
                <span className="mt-1 text-stone-300">
                  ul. Grunwaldzka 3
                  <br />
                  42-500 Będzin
                </span>
              </li>

              <li className="flex items-center gap-4 group">
                <span className="p-2 bg-stone-800 rounded-full text-stone-300 group-hover:text-white group-hover:bg-stone-700 transition-all duration-300">
                  <IconMail />
                </span>
                <a
                  href="mailto:raven.leather.art@gmail.com"
                  className="text-stone-300 hover:text-white transition-colors border-b border-transparent hover:border-stone-500 pb-0.5"
                >
                  raven.leather.art@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-4 group">
                <span className="p-2 bg-stone-800 rounded-full text-stone-300 group-hover:text-white group-hover:bg-stone-700 transition-all duration-300">
                  <IconWhatsApp />
                </span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white transition-colors border-b border-transparent hover:border-stone-500 pb-0.5"
                >
                  Napisz do mnie na WhatsApp
                </a>
              </li>

              {/*
              <li className="flex items-center gap-4 group">
                <span className="p-2 bg-stone-800 rounded-full text-stone-300 group-hover:text-white group-hover:bg-stone-700 transition-all duration-300">
                  <IconMessenger />
                </span>
                <a
                  href={MESSENGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white transition-colors border-b border-transparent hover:border-stone-500 pb-0.5"
                >
                  Napisz do mnie na Messenger
                </a>
              </li>
              */}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 font-light">
          <p>
            &copy; {new Date().getFullYear()} Raven Leather. Handmade in Poland.
          </p>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link
              to="/polityka-prywatnosci"
              className="hover:text-stone-300 transition-colors"
            >
              Polityka prywatności
            </Link>
            <div className="opacity-60 hover:opacity-100 hover:text-stone-300 transition-all">
              Design by Raven Leather
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
