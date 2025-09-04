import Hero from '../components/Hero';
import Bio from '../components/Bio';
import Discografia from '../components/Discografia';
import Merch from '../components/Merch';
import Booking from '../components/Booking';
import News from '../components/News';
import Links from '../components/Links';
import Contatti from '../components/Contatti';

export default function Page(){
  return (
    <>
      <Hero />
      <Bio />
      <Discografia />
      <Merch />
      <Booking />
      <News />
      <Links />
      <Contatti />
    </>
  );
}
