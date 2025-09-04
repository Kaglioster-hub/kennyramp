"use client";

export default function Merch() {
  const items = [
    {
      id: 1,
      title: "SIMDV 3 – Kuore Matto (The Renaissance Giullari Version)",
      year: 2025,
      cover: "/cover1.png",
      available: false,
    },
    {
      id: 2,
      title: "SIMDV 1/2",
      year: 2024,
      cover: "/cover2.png",
      available: false,
    },
    {
      id: 3,
      title: "Gran Turismo 2",
      year: 2022,
      cover: "/cover3.png",
      available: false,
    },
    {
      id: 4,
      title: "Gran Turismo",
      year: 2021,
      cover: "/cover4.png",
      available: false,
    },
    {
      id: 5,
      title: "Trollamilanima",
      year: 2018,
      cover: "/cover5.png",
      available: false,
    },
    {
      id: 6,
      title: "Carpe EP",
      year: 2017,
      cover: "/cover6.png",
      available: false,
    },
    {
      id: 7,
      title: "RLS#26",
      year: 2015,
      cover: "/cover7.png",
      available: false,
    },
    {
      id: 8,
      title: "Kr-Easy",
      year: 2013,
      cover: "/cover8.png",
      available: false,
    },
    {
      id: 9,
      title: "Herpes",
      year: 2011,
      cover: "/cover9.png",
      available: false,
    },
    {
      id: 10,
      title: "Kilkenny K1",
      year: 2010,
      cover: "/cover10.png",
      available: true, // 👈 unica copia fisica disponibile
    },
  ];

  const paypalBaseUrl = "https://www.paypal.com/cgi-bin/webscr";
  const paypalBusiness = "kenny@vrabo.it";

  return (
    <section id="merch" className="section bg-velvet">
      <div className="container text-center">
        <h2 className="section-title">🛒 Merch</h2>
        <p className="text-gray-300 mb-10">
          Catalogo ufficiale Kenny Ramp – album dal 2010 a oggi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-graphite rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Cover */}
              <img
                src={item.cover}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              {/* Info */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gold">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.year}</p>

                {/* Disponibilità */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`h-3 w-3 rounded-full ${
                      item.available ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  <span className="text-gray-300 text-sm">
                    {item.available ? "Disponibile" : "Non disponibile"}
                  </span>
                </div>

                {/* PayPal Buttons */}
                {item.available ? (
                  <div className="flex flex-col gap-2 mt-auto">
                    {/* Digitale */}
                    <form
                      action={paypalBaseUrl}
                      method="post"
                      target="_blank"
                    >
                      <input type="hidden" name="cmd" value="_xclick" />
                      <input type="hidden" name="business" value={paypalBusiness} />
                      <input type="hidden" name="item_name" value={`${item.title} (Digitale)`} />
                      <input type="hidden" name="amount" value="12.90" />
                      <input type="hidden" name="currency_code" value="EUR" />
                      <button
                        type="submit"
                        className="w-full bg-gold text-black py-2 rounded-lg font-semibold hover:opacity-90 transition"
                      >
                        💿 Acquista Digitale – €12,90
                      </button>
                    </form>

                    {/* Fisica */}
                    <form
                      action={paypalBaseUrl}
                      method="post"
                      target="_blank"
                    >
                      <input type="hidden" name="cmd" value="_xclick" />
                      <input type="hidden" name="business" value={paypalBusiness} />
                      <input type="hidden" name="item_name" value={`${item.title} (Fisica)`} />
                      <input type="hidden" name="amount" value="16.90" />
                      <input type="hidden" name="currency_code" value="EUR" />
                      <button
                        type="submit"
                        className="w-full bg-gold text-black py-2 rounded-lg font-semibold hover:opacity-90 transition"
                      >
                        📀 Acquista Fisica – €16,90
                      </button>
                    </form>
                  </div>
                ) : (
                  <p className="text-gray-500 italic mt-auto">
                    Non disponibile al momento
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
