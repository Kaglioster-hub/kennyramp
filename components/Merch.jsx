"use client";

export default function Merch() {
  const items = [
    { id: 1, title: "SIMDV 3 – Kuore Matto (The Renaissance Giullari Version)", year: 2025, cover: "/cover1.png" },
    { id: 2, title: "SIMDV 1/2", year: 2024, cover: "/cover2.png" },
    { id: 3, title: "Gran Turismo 2", year: 2022, cover: "/cover3.png" },
    { id: 4, title: "Gran Turismo", year: 2021, cover: "/cover4.png" },
    { id: 5, title: "Trollamilanima", year: 2018, cover: "/cover5.png" },
    { id: 6, title: "Carpe EP", year: 2017, cover: "/cover6.png" },
    { id: 7, title: "RLS#26", year: 2015, cover: "/cover7.png" },
    { id: 8, title: "Kr-Easy", year: 2013, cover: "/cover8.png" },
    { id: 9, title: "Herpes", year: 2011, cover: "/cover9.png" },
    { id: 10, title: "Kilkenny K1", year: 2010, cover: "/cover10.png", physical: true },
  ];

  const paypalBaseUrl = "https://www.paypal.com/cgi-bin/webscr";
  const paypalBusiness = "paypal@vrabo.it";

  // Calcolo prezzi dinamici (dal più vecchio al più giovane)
  const years = items.map(i => i.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  const getPrices = (year) => {
    const ratio = (year - minYear) / (maxYear - minYear || 1);
    const digital = (10.9 + (4 * ratio)).toFixed(2); // 10.90 → 14.90
    const physical = (14.9 + (5 * ratio)).toFixed(2); // 14.90 → 19.90
    return { digital, physical };
  };

  return (
    <section id="merch" className="section bg-velvet">
      <div className="container text-center">
        <h2 className="section-title">🛒 Merch</h2>
        <p className="text-gray-300 mb-10">
          Catalogo ufficiale Kenny Ramp – album dal 2010 a oggi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => {
            const { digital, physical } = getPrices(item.year);
            return (
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
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    <span className="text-gray-300 text-sm">
                      Disponibile in digitale
                      {item.physical ? " + copia fisica" : ""}
                    </span>
                  </div>

                  {/* PayPal Buttons */}
                  <div className="flex flex-col gap-2 mt-auto">
                    {/* Digitale */}
                    <form action={paypalBaseUrl} method="post" target="_blank">
                      <input type="hidden" name="cmd" value="_xclick" />
                      <input type="hidden" name="business" value={paypalBusiness} />
                      <input type="hidden" name="item_name" value={`${item.title} (Digitale)`} />
                      <input type="hidden" name="amount" value={digital} />
                      <input type="hidden" name="currency_code" value="EUR" />
                      <button
                        type="submit"
                        className="w-full bg-gold text-black py-2 rounded-lg font-semibold hover:opacity-90 transition"
                      >
                        💿 Acquista Digitale – €{digital}
                      </button>
                    </form>

                    {/* Fisica (solo Kilkenny) */}
                    {item.physical && (
                      <>
                        <form action={paypalBaseUrl} method="post" target="_blank">
                          <input type="hidden" name="cmd" value="_xclick" />
                          <input type="hidden" name="business" value={paypalBusiness} />
                          <input type="hidden" name="item_name" value={`${item.title} (Fisica – Italia)`} />
                          <input type="hidden" name="amount" value={physical} />
                          <input type="hidden" name="currency_code" value="EUR" />
                          <input type="hidden" name="shipping" value="6.90" />
                          <button
                            type="submit"
                            className="w-full bg-gold text-black py-2 rounded-lg font-semibold hover:opacity-90 transition"
                          >
                            📀 Fisica (Italia) – €{(parseFloat(physical) + 6.9).toFixed(2)}
                          </button>
                        </form>

                        <form action={paypalBaseUrl} method="post" target="_blank">
                          <input type="hidden" name="cmd" value="_xclick" />
                          <input type="hidden" name="business" value={paypalBusiness} />
                          <input type="hidden" name="item_name" value={`${item.title} (Fisica – Estero)`} />
                          <input type="hidden" name="amount" value={physical} />
                          <input type="hidden" name="currency_code" value="EUR" />
                          <input type="hidden" name="shipping" value="12.90" />
                          <button
                            type="submit"
                            className="w-full bg-gold text-black py-2 rounded-lg font-semibold hover:opacity-90 transition"
                          >
                            🌍 Fisica (Estero) – €{(parseFloat(physical) + 12.9).toFixed(2)}
                          </button>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
