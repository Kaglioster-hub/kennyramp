import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Kenny Ramp",
  description: "Hip-Hop Urban Tech Lo-fi Chill Guardian Rap Music",
  metadataBase: new URL("https://kennyramp.vrabo.it"),
  keywords: [
    "Kenny Ramp",
    "H501Crew",
    "Hip-Hop",
    "Urban",
    "Lo-fi",
    "Rap indipendente",
    "Musica Roma",
  ],
  openGraph: {
    title: "Kenny Ramp | H501Crew",
    description: "Musica Hip-Hop Urban Tech Lo-fi Chill Guardian",
    url: "https://kennyramp.vrabo.it",
    siteName: "KennyRamp H501Crew",
    type: "website",
    images: [
      {
        url: "/cover1.png",
        width: 1200,
        height: 630,
        alt: "Kenny Ramp Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenny Ramp | H501Crew",
    description: "Musica Hip-Hop Urban Tech Lo-fi Chill Guardian",
    images: ["/cover1.png"],
    creator: "@kennyramp",
  },
  alternates: {
    canonical: "https://kennyramp.vrabo.it",
    languages: {
      "it-IT": "https://kennyramp.vrabo.it",
      "en-US": "https://kennyramp.vrabo.it/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gradient-to-b from-black via-[#0e0e0e] to-graphite text-white antialiased selection:bg-gold/30 selection:text-gold">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
