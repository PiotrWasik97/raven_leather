import React from "react";
import workshopPhoto from "../assets/Marcin.jpg";

// "Rzemieślnik & Pasjonat / Nazywam się Marcin Wasik" - on mobile it sits on
// the photo (light), on desktop above the text (dark).
function Intro({ onPhoto }) {
  return (
    <>
      <span
        className={`font-bold uppercase tracking-[0.2em] text-[12px] mb-3 block ${
          onPhoto ? "text-stone-300" : "text-stone-500 md:mt-2"
        }`}
      >
        Rzemieślnik & Pasjonat
      </span>

      <h2
        className={`text-[28px] md:text-[32px] xl:text-[42px] font-serif font-bold leading-tight ${
          onPhoto ? "text-stone-50 drop-shadow-md" : "text-stone-900 mb-5"
        }`}
      >
        Nazywam się <br />
        <span
          className={`italic ${onPhoto ? "text-stone-200" : "text-stone-500"}`}
        >
          Marcin Wasik
        </span>
      </h2>
    </>
  );
}

export default function OMnie() {
  return (
    // Desktop: photo + text side by side, filling the screen below the 6rem
    // navbar. Mobile: photo on top, text below, normal page scroll.
    <section className="w-full bg-stone-50 md:flex md:flex-row md:overflow-hidden md:h-[calc(100vh-6rem)] md:supports-[height:100dvh]:h-[calc(100dvh-6rem)]">
      {/* On desktop the column takes the photo's 3:4 shape, so the whole
          frame (head to workbench) stays visible. To show it uncropped with
          side margins instead, switch the img to object-contain. */}
      <div className="relative w-full aspect-[3/4] max-h-[calc(100svh-6rem)] overflow-hidden md:h-full md:w-auto md:max-h-none md:max-w-[50%] md:flex-shrink-0">
        <img
          src={workshopPhoto}
          alt="Marcin Wasik w swojej pracowni skórzanej"
          className="absolute inset-0 w-full h-full object-cover object-top md:opacity-90 grayscale-[20%]"
        />

        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-stone-900/10 to-transparent"></div>

        <div className="md:hidden absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent"></div>
        <div className="md:hidden absolute inset-x-0 bottom-0 px-6 pb-7">
          <Intro onPhoto />
        </div>
      </div>

      <div
        className="w-full md:flex-1 md:min-w-0 md:h-full md:overflow-y-auto flex flex-col items-center
                      px-6
                      md:px-[40px]
                      lg:px-[60px]
                      xl:px-[100px]"
      >
        <div className="max-w-2xl w-full py-10 md:py-[40px] md:my-auto">
          <div className="hidden md:block">
            <Intro />
          </div>

          <div className="space-y-5 text-stone-600 leading-[1.6] font-light text-[15px] xl:text-[16px] [&_p]:text-justify [&_p]:hyphens-auto">
            <p>
              To ja tworzę wszystko, co widzisz w Raven Leather. Moja pracownia
              nie jest fabryką. Nie ma tu taśm produkcyjnych, głośnych maszyn
              tnących setki metrów materiału ani pośpiechu. Jest za to zapach
              naturalnej skóry, cisza i skupienie, które towarzyszą mi przy
              każdym uderzeniu wybijaka czy prowadzeniu igieł. Od pierwszego
              szkicu, przez ręczne wycinanie, aż po finalne polerowanie
              krawędzi. Każdy etap produkt wykonuję wyłącznie w moich dłoniach.
            </p>
            <h2 className="text-[28px] md:text-[32px] xl:text-[42px] font-serif font-bold text-stone-900 mb-5 leading-tight">
              Dlaczego skóra?
            </h2>

            <p>
              Prawdziwa, wysokogatunkowa skóra to materiał fascynujący. Ma swoją
              fakturę, zapach, a nawet drobne naturalne ślady, które czynią
              każdy jej płat unikalnym. Nie interesują mnie tanie zamienniki ani
              skóra ekologiczna, która po kilku miesiącach pęka i ląduje w
              koszu. Wybieram tylko wyselekcjonowane skóry naturalne najwyższej
              klasy. Chcę, abyś biorąc do ręki mój produkt - czy to luksusową
              torebkę, czy codzienny brelok do kluczy - od razu poczuł tę
              niesamowitą, zmysłową mięsistość i autentyczność.
            </p>

            <h2 className="text-[28px] md:text-[32px] xl:text-[42px] font-serif font-bold text-stone-900 mb-5 leading-tight">
              Filozofia bez kompromisów
            </h2>
            <p>
              Wierzę, że przedmioty, którymi się otaczamy, definiują nasz styl
              życia. W czasach, gdy świat zalały rzeczy tanie i jednorazowe, ja
              proponuję coś zupełnie innego:{" "}
              <strong className="text-stone-900 font-medium">
                trwałość, która przetrwa pokolenia
              </strong>
              . Kiedy zamawiasz u mnie portfel, pasek czy torbę, nie kupujesz
              zwykłego przedmiotu z półki. Kupujesz godziny mojej pracy, moje
              rzemieślnicze doświadczenie i obietnicę jakości. Ta skóra będzie
              żyła razem z Tobą. Z czasem pokryje się szlachetną patyną,
              ściemnieje i nabierze charakteru, stając się unikalnym zapisem
              Twojej własnej historii.
            </p>

            {/* <div
              className="border-l-2 border-stone-300 md:border-stone-400 pl-6 py-2 my-8
                              bg-white/10 md:bg-white
                              italic
                              text-white md:text-stone-800
                              text-[14px] xl:text-[16px] rounded-r-sm backdrop-blur-sm md:shadow-sm"
            >
              Dziękuję, że doceniasz autentyczną pracę ludzkich rąk. <br />
              "Marcin"
            </div> */}

            {/* <p>
              Moja pracownia znajduje się w{" "}
              <strong className="text-white md:text-stone-900 font-medium">
                Będzinie
              </strong>
              . To tutaj, w sercu Zagłębia, projektuję i ręcznie wykańczam każdy
              detal, dbając o to, by produkty Raven Leather służyły Ci przez
              lata.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
