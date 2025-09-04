"use client";
import { useState } from "react";

export default function Bio() {
  const [lang, setLang] = useState("it");

  return (
    <section id="bio" className="section bg-velvet">
      <div className="container text-center">
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title">🧾 Bio</h2>
          {/* Switch lingua */}
          <div className="flex gap-2 text-sm">
            <button
              onClick={() => setLang("it")}
              className={`px-2 py-1 rounded ${
                lang === "it" ? "bg-gold text-black font-bold" : "bg-black/30 text-gray-300"
              }`}
            >
              IT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded ${
                lang === "en" ? "bg-gold text-black font-bold" : "bg-black/30 text-gray-300"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="text-gray-200 max-w-3xl mx-auto leading-8 space-y-6 text-left">
          {lang === "it" ? (
            <>
              {/* --- VERSIONE ITALIANA --- */}
              <p>
                <strong>Kenny Ramp</strong>, artista indipendente romano, si avvicina alla musica
                nei primi anni 2000. Nel 2006/2007 registra il suo primo demo solista{" "}
                <em>Voce nel frastuono</em>, un lavoro grezzo ma autentico che lo fa notare nella
                scena underground. Tra il 2008 e il 2009 la sua ricerca si radicalizza: dopo le
                prime esperienze da frontman, sceglie la via della produzione indipendente,
                costruendo un percorso libero da mode e compromessi.
              </p>

              <p>
                Con l’amico <strong>Change</strong> fonda la <strong>H501Crew</strong> a Primaporta,
                che diventa presto un riferimento per il quartiere. Qui entra in gioco{" "}
                <strong>Hyst</strong> (allora legato ad AltoEnt), che ne riconosce talento e visione,
                aprendogli nuove connessioni. Sarà proprio Hyst a fargli conoscere{" "}
                <strong>BabySmoka</strong> (oggi <strong>YDFW Ñino</strong>) e{" "}
                <strong>DrLupo</strong> (oggi <strong>Mordi</strong>), con cui nasceranno legami
                personali e collaborazioni durature.
              </p>

              <blockquote className="border-l-4 border-gold pl-4 italic text-gold/90 shadow-glowGold">
                «Kenny Ramp non leviga: lascia che la verità graffi. Ogni imperfezione è un marchio di autenticità.»
              </blockquote>

              <h3 className="text-xl font-semibold text-gold mt-8">🌍 Esperienze e viaggi</h3>
              <p>
                Nel 2015 si trasferisce a <strong>Melbourne</strong>, dove ritrova DrLupo e arricchisce
                il suo percorso con esperienze di vita e lavoro. Tra il 2016 e il 2017 vive a{" "}
                <strong>Bratislava</strong>, lavorando per <strong>IBM</strong>, esperienza intensa
                segnata anche da un lutto che lo riporta a Roma con nuova consapevolezza. Nel 2020
                affronta problemi legali a <strong>Boston</strong>. Poco dopo torna a Roma, proprio
                allo scoppio della pandemia: l’isolamento forzato diventa laboratorio creativo, da cui
                nascono nuove tracce e visioni.
              </p>

              <h3 className="text-xl font-semibold text-gold mt-8">🎶 Presente e futuro</h3>
              <p>
                La sua discografia include <em>Kilkenny K1</em> (2010), <em>Herpes</em> (2011),{" "}
                <em>Kr-Easy</em> (2013), <em>RLS#26</em> (2015), <em>Carpe EP</em> (2017),{" "}
                <em>Trollamilanima</em> (2018), <em>Gran Turismo</em> (2021),{" "}
                <em>Gran Turismo 2</em> (2022), <em>SIMDV 1/2</em> (2024), e singoli come{" "}
                <em>Mont Saint-Michel</em> (2021), <em>Non ci sei</em> (2021), <em>Maestrini</em> (2025).
              </p>
              <p>
                Il 18 settembre 2025 uscirà <strong>SIMDV 3 – Kuore Matto: The Renaissance Giullari Version</strong>,
                nuovo capitolo che conferma la sua voce cruda, libera e irrinunciabile.
              </p>
            </>
          ) : (
            <>
              {/* --- ENGLISH VERSION --- */}
              <p>
                <strong>Kenny Ramp</strong>, independent artist from Rome, began his musical journey
                in the early 2000s. In 2006/2007 he recorded his first solo demo{" "}
                <em>Voce nel frastuono</em>, raw but authentic, which caught the attention of the
                underground scene. Between 2008 and 2009 his path became more radical: after early
                experiences as a frontman, he embraced full independence, building a career free from
                trends and compromises.
              </p>

              <p>
                With his friend <strong>Change</strong>, he founded the <strong>H501Crew</strong> in
                Primaporta, soon becoming a reference point for the neighborhood. At that time{" "}
                <strong>Hyst</strong> (then linked to AltoEnt) recognized his talent and vision,
                introducing him to new connections. It was Hyst who introduced him to{" "}
                <strong>BabySmoka</strong> (now <strong>YDFW Ñino</strong>) and{" "}
                <strong>DrLupo</strong> (now <strong>Mordi</strong>), with whom long-lasting bonds and
                collaborations were built.
              </p>

              <blockquote className="border-l-4 border-gold pl-4 italic text-gold/90 shadow-glowGold">
                “Kenny Ramp does not polish: he lets truth scratch. Every imperfection is a mark of authenticity.”
              </blockquote>

              <h3 className="text-xl font-semibold text-gold mt-8">🌍 Experiences and journeys</h3>
              <p>
                In 2015 he moved to <strong>Melbourne</strong>, reconnecting with DrLupo and enriching
                his path with life and work experiences. From 2016 to 2017 he lived in{" "}
                <strong>Bratislava</strong>, working for <strong>IBM</strong>—a period marked by both
                intensity and personal loss that brought him back to Rome with new awareness. In 2020
                he faced legal troubles in <strong>Boston</strong>. Shortly after, he returned to Rome
                just as the pandemic began: the forced isolation became a creative laboratory, giving
                birth to dozens of tracks and new visions.
              </p>

              <h3 className="text-xl font-semibold text-gold mt-8">🎶 Present and future</h3>
              <p>
                His discography includes <em>Kilkenny K1</em> (2010), <em>Herpes</em> (2011),{" "}
                <em>Kr-Easy</em> (2013), <em>RLS#26</em> (2015), <em>Carpe EP</em> (2017),{" "}
                <em>Trollamilanima</em> (2018), <em>Gran Turismo</em> (2021),{" "}
                <em>Gran Turismo 2</em> (2022), <em>SIMDV 1/2</em> (2024), and singles such as{" "}
                <em>Mont Saint-Michel</em> (2021), <em>Non ci sei</em> (2021), <em>Maestrini</em> (2025).
              </p>
              <p>
                On September 18, 2025, he will release <strong>SIMDV 3 – Kuore Matto: The Renaissance Giullari Version</strong>,
                a new chapter confirming his raw, free, and essential voice in the Italian independent scene.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
