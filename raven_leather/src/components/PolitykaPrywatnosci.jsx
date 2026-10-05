import React from "react";

const ADMINISTRATOR = {
  name: "Marcin Wasik",
  street: "ul. Grunwaldzka 3",
  city: "42-500 Będzin",
  email: "raven.leather.art@gmail.com",
};

const EFFECTIVE_DATE = "5 października 2026 r.";

function Section({ number, title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl md:text-2xl font-serif text-stone-900">
        {number}. {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function List({ children }) {
  return (
    <ul className="list-disc pl-5 space-y-2 marker:text-stone-400">
      {children}
    </ul>
  );
}

export default function PolitykaPrywatnosci() {
  const mail = (
    <a
      href={`mailto:${ADMINISTRATOR.email}`}
      className="text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-900 transition-colors"
    >
      {ADMINISTRATOR.email}
    </a>
  );

  return (
    <section className="w-full bg-stone-50">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <span className="text-stone-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
          Dokumenty
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 leading-tight mb-4">
          Polityka prywatności
        </h1>
        <p className="text-stone-500 text-sm mb-12">
          Obowiązuje od {EFFECTIVE_DATE}
        </p>

        <div className="space-y-10 text-stone-600 font-light leading-relaxed text-[15px] md:text-base">
          <p>
            Szanuję Twoją prywatność. Poniżej wyjaśniam, jakie dane osobowe
            zbieram za pośrednictwem strony Raven Leather, w jakim celu, jak
            długo je przechowuję i jakie prawa Ci przysługują.
          </p>

          <Section number={1} title="Administrator danych">
            <p>
              Administratorem Twoich danych osobowych jest{" "}
              <strong className="font-medium text-stone-900">
                {ADMINISTRATOR.name}
              </strong>
              , {ADMINISTRATOR.street}, {ADMINISTRATOR.city}.
            </p>
            <p>
              We wszystkich sprawach dotyczących danych osobowych możesz pisać
              na adres {mail} lub listownie na adres podany powyżej.
            </p>
          </Section>

          <Section number={2} title="Jakie dane przetwarzam i w jakim celu">
            <List>
              <li>
                <strong className="font-medium text-stone-900">
                  Formularz kontaktowy
                </strong>{" "}
                – imię, adres e-mail i treść wiadomości. Wykorzystuję je, aby
                odpowiedzieć na Twoją wiadomość, a jeśli dotyczy ona zamówienia
                – aby przygotować ofertę i zrealizować zamówienie.
              </li>
              <li>
                <strong className="font-medium text-stone-900">
                  Kontakt e-mailowy lub przez WhatsApp
                </strong>{" "}
                – dane, które sam mi przekazujesz, np. imię, adres e-mail, numer
                telefonu i treść wiadomości. Cel jest taki sam jak przy
                formularzu.
              </li>
              <li>
                <strong className="font-medium text-stone-900">
                  Dane techniczne
                </strong>{" "}
                – serwer, na którym działa strona, automatycznie zapisuje
                podstawowe informacje o wizycie (adres IP, datę i godzinę, typ
                przeglądarki). Służą one wyłącznie zapewnieniu bezpieczeństwa i
                poprawnego działania strony.
              </li>
            </List>
          </Section>

          <Section number={3} title="Podstawa prawna">
            <List>
              <li>
                art. 6 ust. 1 lit. b RODO – działania podejmowane na Twoje
                żądanie przed zawarciem umowy oraz realizacja zamówienia,
              </li>
              <li>
                art. 6 ust. 1 lit. f RODO – mój prawnie uzasadniony interes,
                czyli odpowiadanie na wiadomości oraz zapewnienie bezpieczeństwa
                strony.
              </li>
            </List>
            <p>
              Podanie danych jest dobrowolne, ale bez adresu e-mail nie będę
              mógł odpowiedzieć na wiadomość wysłaną przez formularz.
            </p>
          </Section>

          <Section number={4} title="Komu przekazuję dane">
            <p>
              Dane mogą trafić wyłącznie do firm, które pomagają mi prowadzić
              stronę i korespondencję:
            </p>
            <List>
              <li>Hostinger – dostawca hostingu, na którym działa strona,</li>
              <li>
                FormSubmit (formsubmit.co) – usługa, która przekazuje wiadomości
                z formularza na moją skrzynkę e-mail,
              </li>
              <li>
                Google (usługa Gmail) – dostawca poczty, w której przechowuję
                korespondencję,
              </li>
              <li>
                Meta (WhatsApp) – jeśli kontaktujesz się ze mną przez WhatsApp;
                Meta przetwarza wtedy dane również na podstawie własnej polityki
                prywatności.
              </li>
            </List>
            <p>
              Nie sprzedaję Twoich danych i nie przekazuję ich nikomu w celach
              marketingowych.
            </p>
          </Section>

          <Section number={5} title="Przekazywanie danych poza EOG">
            <p>
              Część wymienionych dostawców (np. Google, Meta, FormSubmit) może
              przetwarzać dane poza Europejskim Obszarem Gospodarczym, w tym w
              USA. Takie przekazanie może odbywać się na zasadach przewidzianych
              w RODO, w szczególności na podstawie decyzji Komisji Europejskiej
              stwierdzającej odpowiedni stopień ochrony (EU-US Data Privacy
              Framework) lub standardowych klauzul umownych.
            </p>
          </Section>

          <Section number={6} title="Jak długo przechowuję dane">
            <List>
              <li>
                korespondencję (formularz, e-mail, WhatsApp) – przez czas
                prowadzenia rozmowy, a następnie przez 12 miesięcy od ostatniego
                kontaktu, na wypadek jej kontynuacji lub ponownego zamówienia,
              </li>
              <li>
                dane związane z zamówieniem – przez czas jego realizacji, a
                następnie do upływu terminów przedawnienia ewentualnych
                roszczeń,
              </li>
              <li>
                dane techniczne – przez okres wynikający z ustawień dostawcy
                hostingu.
              </li>
            </List>
          </Section>

          <Section number={7} title="Twoje prawa">
            <p>Masz prawo do:</p>
            <List>
              <li>dostępu do swoich danych i otrzymania ich kopii,</li>
              <li>sprostowania danych,</li>
              <li>usunięcia danych,</li>
              <li>ograniczenia przetwarzania,</li>
              <li>przenoszenia danych,</li>
              <li>
                wniesienia sprzeciwu wobec przetwarzania opartego na prawnie
                uzasadnionym interesie.
              </li>
            </List>
            <p>
              Aby skorzystać z tych praw, napisz na adres {mail}. Masz również
              prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych
              (ul. Stawki 2, 00-193 Warszawa).
            </p>
          </Section>

          <Section number={8} title="Zautomatyzowane decyzje">
            <p>
              Twoje dane nie są wykorzystywane do profilowania ani do
              podejmowania decyzji w sposób zautomatyzowany.
            </p>
          </Section>

          <Section number={9} title="Zmiany polityki prywatności">
            <p>
              Polityka może być aktualizowana, np. gdy zmienią się usługi, z
              których korzystam. Aktualna wersja jest zawsze dostępna na tej
              stronie.
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}
