import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/raven.leather.art@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: "Nowa wiadomość ze strony Raven Leather!",
            _captcha: "false",
          }),
        },
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Błąd wysyłki:", error);
      setStatus("error");
    }
  };

  return (
    <section className="w-full h-auto md:h-[calc(100vh-96px)] bg-stone-50 flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-stone-100 md:bg-stone-50">
        <span className="text-stone-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
          Pozostańmy w kontakcie
        </span>

        <h2 className="text-4xl md:text-4xl lg:text-5xl font-serif text-stone-900 mb-6 md:mb-8 leading-tight">
          Masz pytania? <br />
          <span className="italic text-stone-500">Napisz do mnie.</span>
        </h2>

        <p className="text-stone-600 font-light leading-relaxed mb-8 md:mb-12 max-w-md text-sm md:text-base">
          Chcesz zapytać o dostępność produktu, zamówienie indywidualne lub po
          prostu porozmawiać o skórze? Jestem do Twojej dyspozycji.
        </p>

        <div className="space-y-6">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">
              Adres
            </span>
            <span className="text-stone-800 font-serif text-lg">
              ul. Króla Władysława Jagiełły 15
            </span>
            <span className="text-stone-600 font-light">42-500 Będzin</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">
              Telefon
            </span>
            <a
              href="tel:+48509109173"
              className="text-stone-800 font-serif text-lg hover:text-stone-600 transition-colors"
            >
              +48 509 109 173
            </a>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">
              Email
            </span>
            <a
              href="mailto:raven.leather.art@gmail.com"
              className="text-stone-800 font-serif text-lg hover:text-stone-600 transition-colors"
            >
              raven.leather.art@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-white flex flex-col justify-center shadow-sm">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center text-center animate-fadeIn py-10">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-stone-900 mb-2">
              Wiadomość wysłana!
            </h3>
            <p className="text-stone-500 font-light">
              Dziękujemy za kontakt. Odpiszemy najszybciej jak to możliwe.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-stone-400 hover:text-stone-900 text-xs font-bold uppercase tracking-widest underline decoration-stone-200 underline-offset-4"
            >
              Wyślij kolejną wiadomość
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-5 max-w-md w-full mx-auto relative"
          >
            {status === "submitting" && (
              <div className="absolute inset-0 bg-white/50 z-10 cursor-wait"></div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2"
              >
                Imię
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-stone-50 border border-stone-200 p-3 md:p-4 text-stone-800 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all rounded-sm"
                placeholder="Twoje imię"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-stone-50 border border-stone-200 p-3 md:p-4 text-stone-800 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all rounded-sm"
                placeholder="twoj@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2"
              >
                Wiadomość
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-stone-50 border border-stone-200 p-3 md:p-4 text-stone-800 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all rounded-sm resize-none"
                placeholder="W czym mogę pomóc?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className={`w-full bg-stone-900 text-white font-bold text-xs uppercase tracking-[0.2em] py-4 transition-all duration-300 rounded-sm mt-2 shadow-lg hover:shadow-xl cursor-pointer ${status === "submitting" ? "opacity-70 cursor-wait" : "hover:bg-stone-700"}`}
            >
              {status === "submitting" ? "Wysyłanie..." : "Wyślij Wiadomość"}
            </button>

            {status === "error" && (
              <p className="text-red-500 text-xs text-center mt-2">
                Coś poszło nie tak. Spróbuj ponownie.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
