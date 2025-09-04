import '../styles/globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Kenny Ramp',
  description: 'Hip-Hop Urban Tech Lo-fi Chill Guardian Rap Music',
  openGraph: {
    title: 'Kenny Ramp | H501Crew',
    description: 'Musica Hip-Hop Urban Tech Lo-fi Chill Guardian',
    url: 'https://kennyramp.vrabo.it',
    siteName: 'KennyRamp H501Crew',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
