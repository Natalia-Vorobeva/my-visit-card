import Hero from '../components/Hero';
import Cases from '../components/Cases';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="cases">
        <Cases />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="playground">
        <Pricing />
      </div>
      <div id="contact">
        <ContactCTA />
      </div>
    </>
  );
};

export default Home;