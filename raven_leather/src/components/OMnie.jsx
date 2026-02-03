import React from 'react';
import workshopPhoto from '../assets/marcin-photo.jpg'; 

export default function OMnie() {
  return (
    <section className="w-full h-[calc(100vh-80px)] bg-stone-950 md:bg-stone-50 relative md:flex md:flex-row overflow-hidden">
      
      <div className="absolute inset-0 z-0 md:relative md:w-5/12 lg:w-1/2 h-full flex-shrink-0">
        <img 
          src={workshopPhoto} 
          alt="Marcin w pracowni" 
          className="w-full h-full object-cover opacity-60 md:opacity-90 transition-opacity duration-300 grayscale-[20%]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-stone-950/20 md:bg-gradient-to-r md:from-stone-900/10 md:to-transparent md:via-transparent"></div>
      </div>

      <div className="relative z-10 w-full md:w-7/12 lg:w-1/2 h-full flex flex-col items-center 
                      overflow-y-auto
                      px-6 
                      md:bg-stone-50 md:px-[40px] 
                      lg:px-[60px] 
                      xl:px-[100px]">
        
        <div className="max-w-2xl w-full py-[40px] my-auto"> 
            
            <span className="text-stone-300 md:text-stone-500 font-bold uppercase tracking-[0.2em] text-[12px] mb-3 block md:mt-2">
              Rzemieślnik & Pasjonat
            </span>

            <h2 className="text-[28px] md:text-[32px] xl:text-[42px] font-serif font-bold text-stone-50 md:text-stone-900 mb-5 leading-tight drop-shadow-md md:drop-shadow-none">
              Cześć, jestem <br/>
              <span className="italic text-stone-200 md:text-stone-500">
                Marcin
              </span>.
            </h2>

            <div className="space-y-5 text-stone-100 md:text-stone-600 leading-[1.6] font-light text-[15px] xl:text-[16px]">
              <p>
                Raven Leather to nie tylko marka, to odzwierciedlenie mojej osobistej podróży. 
                Wszystko zaczęło się w<strong className="text-white md:text-stone-900 font-medium"> 2022 roku</strong>, 
                gdy po raz pierwszy poczułem zapach surowej skóry i wziąłem do ręki narzędzia kaletnicze.
              </p>

              <p>
                To, co zaczęło się jako ciekawość, szybko przerodziło się w prawdziwą pasję. 
                Każdy portfel, pasek czy etui, które wychodzi z moich rąk, jest efektem godzin 
                precyzyjnej pracy, cierpliwości i szacunku do materiału.
              </p>

              <div className="border-l-2 border-stone-300 md:border-stone-400 pl-6 py-2 my-8 
                              bg-white/10 md:bg-white 
                              italic 
                              text-white md:text-stone-800 
                              text-[14px] xl:text-[16px] rounded-r-sm backdrop-blur-sm md:shadow-sm">
                "Nie tworzę produktów masowych. Tworzę przedmioty z duszą, które starzeją się razem z Tobą."
              </div>

              <p>
                Mój zakład znajduje się w <strong className="text-white md:text-stone-900 font-medium">Będzinie</strong>. 
                To tutaj, w sercu Zagłębia, projektuję i ręcznie wykańczam każdy detal, 
                dbając o to, by produkty Raven Leather służyły Ci przez lata.
              </p>
            </div>

        </div>

      </div>
    </section>
  );
}