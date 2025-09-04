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
                lang === "it"
                  ? "bg-gold text-black font-bold"
                  : "bg-black/30 text-gray-300"
              }`}
            >
              IT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded ${
                lang === "en"
                  ? "bg-gold text-black font-bold"
                  : "bg-black/30 text-gray-300"
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
                personali e collaborazioni durature. Per lui, collaborare significa spesso unire
                intenti e poi divergere, lasciare che le differenze creino nuove traiettorie.
                Al contrario, le collaborazioni nate solo per il mercato le considera simili
                alle amicizie tossiche di certa gente opportunista: relazioni senza anima.
                L’arte, per Kenny, è un’altra cosa, un movimento vitale che non si riduce a
                strategia commerciale.
              </p>

              <blockquote className="border-l-4 border-gold pl-4 italic text-gold/90 shadow-glowGold">
                «Kenny Ramp non leviga: lascia che la verità graffi. Ogni imperfezione è un marchio di autenticità.»
              </blockquote>

              <h3 className="text-xl font-semibold text-gold mt-8">🎓 Formazione e approccio</h3>
              <p>
                Ha compiuto studi classici, che hanno segnato il suo immaginario e il suo lessico,
                pur senza mai cadere nell’accademismo. Non ama parlare della sua vita privata:
                ha sempre mantenuto un confine netto tra palco e realtà, mostrando al pubblico
                soltanto il lato empatico. È capace di apparire fuori dagli schemi e fuori misura,
                ma dietro questa immagine rimane saldo un rigore interiore. In questo senso,
                si avvicina idealmente alla figura di <strong>Luigi Tenco</strong>, e ne fa eco
                in una citazione che sente sua: «Perché scrivi di cose tristi? Perché quando sono felice esco.»
              </p>

              <h3 className="text-xl font-semibold text-gold mt-8">🌍 Esperienze e viaggi</h3>
              <p>
                Nel 2015 si trasferisce a <strong>Melbourne</strong>, dove ritrova DrLupo e arricchisce
                il suo percorso con esperienze di vita e lavoro. Tra il 2016 e il 2017 vive a{" "}
                <strong>Bratislava</strong>, lavorando per <strong>IBM</strong>, esperienza intensa
                segnata anche da un lutto che lo riporta a Roma con nuova consapevolezza. Nel 2020
                affronta problemi legali a <strong>Boston</strong>. Poco dopo torna a Roma, tre-quattro mesi prima dello
                scoppio della pandemia: l’isolamento forzato diventa laboratorio creativo, da cui nascono nuove tracce e visioni.
                È in questo periodo che la sua vita subisce un profondo e repentino mutamento,
                proprio a causa della sua coerenza recondita, che lo ha portato a mantenere
                una posizione di puro senso critico, subendo spesso incomprensioni o riconoscimenti tardivi.
              </p>

              <h3 className="text-xl font-semibold text-gold mt-8">🎚️ Produzione e visione</h3>
              <p>
                Per quanto riguarda la produzione, Kenny ha sempre sostenuto che l’hip hop,
                inteso nel suo vero significato, fosse rappresentazione fedele del reale e del
                contesto. Da qui la sua scelta di campionare molto e spesso direttamente dal
                luogo stesso di origine, dalla cultura e dalla lingua che viveva attorno a lui.
                Nei suoi brani i campioni di musica e suoni italiani non sono casualità, ma
                dichiarazione di poetica. Un gesto che all’inizio appariva anomalo e avanguardistico,
                e che oggi, in un’epoca in cui il sampling italiano domina la scena, rivela tutta
                la sua lungimiranza.
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
                nuovo capitolo che conferma la sua voce cruda, libera e irrinunciabilmente vera. 
                Sarà disponibile su tutte le piattaforme di streaming, escluso Apple iTunes, per
                questioni legate alla grafica dell’album, modificata all’ultimo momento e resa coerente
                con lo stile dei due SIMDV precedenti, poi rimossi dalle piattaforme.
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
                <strong>DrLupo</strong> (now <strong>Mordi</strong>). For Kenny, collaboration means
                joining forces and then diverging, allowing differences to create new directions.
                In contrast, collaborations driven purely by market logic resemble toxic friendships
                built on opportunism. Art, in his view, is something else entirely.
              </p>

              <blockquote className="border-l-4 border-gold pl-4 italic text-gold/90 shadow-glowGold">
                “Kenny Ramp does not polish: he lets truth scratch. Every imperfection is a mark of authenticity.”
              </blockquote>

              <h3 className="text-xl font-semibold text-gold mt-8">🎓 Background and approach</h3>
              <p>
                He studied classics, which shaped his imagery and lexicon without making him
                academic. He has always avoided exposing his private life, keeping it outside the
                public’s reach except for his empathetic side. He often appears unconventional and
                outside the box, yet he embodies an inner discipline. In this sense, he is one of the
                first to re-approach the figure of <strong>Luigi Tenco</strong>, echoing a line he
                feels deeply: “Why do you write about sad things? Because when I’m happy, I go out.”
              </p>

              <h3 className="text-xl font-semibold text-gold mt-8">🌍 Experiences and journeys</h3>
              <p>
                In 2015 he moved to <strong>Melbourne</strong>, reconnecting with DrLupo and enriching
                his path with life and work experiences. From 2016 to 2017 he lived in{" "}
                <strong>Bratislava</strong>, working for <strong>IBM</strong>—a period marked by both
                intensity and personal loss that brought him back to Rome with new awareness. In 2020
                he faced legal troubles in <strong>Boston</strong>. Shortly after, he returned to Rome
                just before the pandemic broke out: the forced isolation became a creative laboratory,
                giving birth to new tracks and visions.
              </p>

              <h3 className="text-xl font-semibold text-gold mt-8">🎚️ Production and vision</h3>
              <p>
                Kenny has always believed that hip hop, in its truest sense, must represent reality
                and context. For this reason, he chose to sample extensively and directly from his
                own surroundings, culture, and language. Italian samples in his repertoire are not
                random but deliberate statements of poetics—an avant-garde approach at the time,
                which paradoxically anticipated today’s trend where Italian sampling has become
                mainstream.
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
                On September 18, 2025, he will release{" "}
                <strong>SIMDV 3 – Kuore Matto: The Renaissance Giullari Version</strong>, a new
                chapter that confirms his raw, free, and uncompromising voice. It will be available
                on all streaming platforms, except Apple iTunes, due to artwork issues aligned with
                the previous SIMDV releases.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
