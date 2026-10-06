import React from "react";
import { Link } from "react-router-dom";
import { IconWhatsApp } from "./ContactIcons.jsx";
import { WHATSAPP_URL } from "../utils/contactLinks.js";

const EMAIL = "raven.leather.art@gmail.com";

const linkClass =
  "text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-900 transition-colors";

const steps = [
  {
    title: "Wybór bazy (Model i cena „od...”)",
    body: (
      <p>
        Przejrzyj galerię na stronie i wybierz model, który najbardziej Ci się
        podoba. Ceny widoczne przy produktach to ceny wyjściowe („cena
        od...”). Ostateczny koszt może się zwiększyć w zależności od wybranych
        przez Ciebie materiałów, okuć oraz stopnia skomplikowania
        personalizacji.
      </p>
    ),
  },
  {
    title: "Kontakt w dogodny dla Ciebie sposób",
    body: (
      <>
        <p>
          Gdy już wiesz, który model Cię interesuje, napisz do mnie. Możesz
          wybrać najbardziej komfortowy dla siebie kanał kontaktu:
        </p>
        <ul className="list-disc pl-5 space-y-2 marker:text-stone-400">
          <li>
            WhatsApp:{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              napisz do mnie na WhatsApp
            </a>
          </li>
          <li>
            E-mail:{" "}
            <a href={`mailto:${EMAIL}`} className={linkClass}>
              {EMAIL}
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Ustalenie szczegółów i terminów",
    body: (
      <>
        <p>
          Wspólnie zaprojektujemy Twój produkt. Na tym etapie ustalimy wszystkie
          szczegóły wykonania:
        </p>
        <ul className="list-disc pl-5 space-y-2 marker:text-stone-400">
          <li>Kolor skóry</li>
          <li>Kolor nici</li>
          <li>Dodatki: rodzaj klamry, guzików, nitów, dodatków i innych.</li>
        </ul>
        <p>
          Po zaakceptowaniu przez obie strony wstępnego projektu, podam Ci
          orientacyjny termin realizacji zamówienia (zależny od obecnej liczby
          zamówień w pracowni).
        </p>
      </>
    ),
  },
  {
    title: "Ostateczna wycena i akceptacja",
    body: (
      <p>
        Po ustaleniu wszystkich detali przygotuję dla Ciebie ostateczną wycenę
        końcową oraz podam kwotę zadatku, który jest warunkiem rozpoczęcia
        prac. Aby przejść do realizacji, będę potrzebował Twojej ostatecznej
        akceptacji tych warunków.
      </p>
    ),
  },
  {
    title: "Zadatek i rezerwacja miejsca w kolejce",
    body: (
      <p>
        Po Twojej akceptacji i wpłynięciu zadatku na konto, wpisuję Twoje
        zamówienie do kolejki i oficjalnie rozpoczynam pracę nad produktem. Od
        tego momentu Twoje zamówienie zyskuje gwarantowany termin realizacji.
      </p>
    ),
  },
];

export default function JakZamowic() {
  return (
    <section className="w-full bg-stone-50">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <span className="text-stone-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
          Zamówienia
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 leading-tight mb-10">
          Jak zamówić <br />
          <span className="italic text-stone-500">w Raven Leather</span>
        </h1>

        <div className="space-y-5 text-stone-600 font-light leading-relaxed text-[15px] md:text-base">
          <p>
            Wszystkie produkty w mojej pracowni powstają od podstaw ręcznie – od
            wycięcia skóry, przez ręczne szycie, aż po wykończenie krawędzi czy
            nitowanie. Dzięki temu każdy produkt ma swój niepowtarzalny
            charakter, a Ty zyskujesz unikalny przedmiot stworzony z myślą o
            Tobie.
          </p>
          <p>
            Ponieważ zależy mi, aby produkt był idealnie dopasowany do Twoich
            potrzeb, proces zamawiania opiera się na bezpośrednim kontakcie.
            Zamówienie spersonalizowanego produktu zamkniesz w{" "}
            <strong className="font-medium text-stone-900">
              5 prostych krokach
            </strong>
            :
          </p>
        </div>

        <ol className="mt-12 space-y-10">
          {steps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-8">
              <span className="font-serif text-4xl md:text-5xl leading-none text-stone-300 tabular-nums">
                {index + 1}
              </span>
              <div className="space-y-3 text-stone-600 font-light leading-relaxed text-[15px] md:text-base">
                <h2 className="text-xl md:text-2xl font-serif text-stone-900 leading-snug">
                  {step.title}
                </h2>
                {step.body}
              </div>
            </li>
          ))}
        </ol>

        <aside className="mt-14 border-l-2 border-stone-400 bg-white px-6 py-5 rounded-r-sm shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500 mb-3">
            Ważna informacja (Prawa konsumenta)
          </h2>
          <p className="text-stone-600 font-light leading-relaxed text-[15px] md:text-base">
            Wyroby Raven Leather tworzone na indywidualne zamówienie, według
            specyfikacji ustalonej z Klientem (produkty personalizowane,
            customowe), nie podlegają zwrotom konsumenckim bez podania
            przyczyny. Każdy etap produkcji zatwierdzamy wspólnie, co
            gwarantuje, że otrzymasz produkt dokładnie taki, jakiego oczekujesz.
          </p>
        </aside>

        <div className="mt-14 text-center">
          <p className="font-serif text-xl md:text-2xl text-stone-900 leading-snug mb-8">
            Masz pytania lub chcesz zacząć projektować swój portfel, pasek lub
            torbę?{" "}
            <span className="italic text-stone-500">
              Napisz do mnie już teraz!
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-stone-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors duration-300 shadow-lg hover:shadow-xl rounded-sm"
            >
              <IconWhatsApp className="h-4 w-4" />
              Napisz na WhatsApp
            </a>
            <Link
              to="/kontakt"
              className="px-8 py-3 border border-stone-300 text-stone-800 text-xs font-bold uppercase tracking-[0.2em] hover:border-stone-900 hover:bg-white transition-all duration-300 rounded-sm text-center"
            >
              Formularz kontaktowy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
