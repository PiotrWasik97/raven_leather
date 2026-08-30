import React from "react";
import workshopPhoto from "../assets/Marcin.jpg";

export default function OMnie() {
  return (
    <section className="w-full h-[calc(100vh-80px)] bg-stone-950 md:bg-stone-50 relative md:flex md:flex-row overflow-hidden">
      <div className="absolute inset-0 z-0 md:relative md:w-5/12 lg:w-1/2 h-full flex-shrink-0">
        <img
          src={workshopPhoto}
          alt="Marcin w pracowni"
          className="w-full h-full object-cover object-top opacity-60 md:opacity-90 transition-opacity duration-300 grayscale-[20%]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-stone-950/20 md:bg-gradient-to-r md:from-stone-900/10 md:to-transparent md:via-transparent"></div>
      </div>

      <div
        className="relative z-10 w-full md:w-7/12 lg:w-1/2 h-full flex flex-col items-center 
                      overflow-y-auto
                      px-6 
                      md:bg-stone-50 md:px-[40px] 
                      lg:px-[60px] 
                      xl:px-[100px]"
      >
        <div className="max-w-2xl w-full py-[40px] my-auto">
          <span className="text-stone-300 md:text-stone-500 font-bold uppercase tracking-[0.2em] text-[12px] mb-3 block md:mt-2">
            Rzemieślnik & Pasjonat
          </span>

          <h2 className="text-[28px] md:text-[32px] xl:text-[42px] font-serif font-bold text-stone-50 md:text-stone-900 mb-5 leading-tight drop-shadow-md md:drop-shadow-none">
            Nazywam się <br />
            <span className="italic text-stone-200 md:text-stone-500">
              Marcin Wasik
            </span>
          </h2>

          <div className="space-y-5 text-stone-100 md:text-stone-600 leading-[1.6] font-light text-[15px] xl:text-[16px]">
            <p>
              To ja tworzę wszystko, co widzisz w Raven Leather. Moja pracownia
              nie jest fabryką. Nie ma tu taśm produkcyjnych, głośnych maszyn
              tnących setki metrów materiału ani pośpiechu. Jest za to zapach
              naturalnej skóry, cisza i skupienie, które towarzyszą mi przy
              każdym uderzeniu wybijaka czy prowadzeniu igieł. Od pierwszego
              szkicu, przez ręczne wycinanie, aż po finalne polerowanie
              krawędzi. Każdy etap produkt pokonuje wyłącznie w moich dłoniach.
            </p>
            <h2 className="text-[28px] md:text-[32px] xl:text-[42px] font-serif font-bold text-stone-50 md:text-stone-900 mb-5 leading-tight drop-shadow-md md:drop-shadow-none">
              Dlaczego skóra?
            </h2>

            <p>
              Prawdziwa, wysokogatunkowa skóra to materiał fascynujący. Ma swoją
              fakturę, zapach, a nawet drobne naturalne ślady, które czynią
              każdy jej płat unikalnym. Nie interesują mnie tanie zamienniki ani
              skóra ekologiczna, która po kilku miesiącach pęka i ląduje w
              koszu. Wybieram tylko selekcjonowane skóry naturalne najwyższej
              klasy. Chcę, abyś biorąc do ręki mój produkt - czy to luksusową
              torebkę, czy codzienny brelok do kluczy - od razu poczuł tę
              niesamowitą, zmysłową mięsistość i autentyczność.
            </p>

            <h2 className="text-[28px] md:text-[32px] xl:text-[42px] font-serif font-bold text-stone-50 md:text-stone-900 mb-5 leading-tight drop-shadow-md md:drop-shadow-none">
              Filozofia bez kompromisów
            </h2>
            <p>
              Wierzę, że przedmioty, którymi się otaczamy, definiują nasz styl
              życia. W czasach, gdy świat zalały rzeczy tanie i jednorazowe, ja
              proponuję coś zupełnie innego:{" "}
              <strong className="text-white md:text-stone-900 font-medium">
                trwałość, która przetrwa pokolenia
              </strong>
              . Kiedy zamawiasz u mnie portfel, pasek czy torbę, nie kupujesz
              zwykłego przedmiotu z półki. Kupujesz godziny mojej pracy, moje
              rzemieślnicze doświadczenie i obietnicę jakości. Ta skóra będzie
              żyła razem z Tobą. Z czasem pokryje się szlachetną patyną,
              ściemnieje i nabierze charakteru, stając się unikalnym zapisem
              Twojej własnej historii.
            </p>

            <div
              className="border-l-2 border-stone-300 md:border-stone-400 pl-6 py-2 my-8 
                              bg-white/10 md:bg-white 
                              italic 
                              text-white md:text-stone-800 
                              text-[14px] xl:text-[16px] rounded-r-sm backdrop-blur-sm md:shadow-sm"
            >
              Dziękuję, że doceniasz autentyczną pracę ludzkich rąk. <br />
              "Marcin"
            </div>

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
