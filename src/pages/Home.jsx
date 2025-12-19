import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Cases from '../components/Cases';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  const location = useLocation();
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    // Сброс флага при изменении location.pathname
    hasScrolledRef.current = false;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    // Если уже скроллили, выходим
    if (hasScrolledRef.current) return;

    const scrollToElement = (id, attempts = 0) => {
      const element = document.getElementById(id);
      
      if (element) {
        console.log(`Scrolling to element: ${id}`);
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        hasScrolledRef.current = true;
        return true;
      }
      
      // Если элемент не найден, пробуем еще раз с задержкой
      if (attempts < 5) { // 5 попыток
        console.log(`Element ${id} not found, retrying... (attempt ${attempts + 1})`);
        setTimeout(() => scrollToElement(id, attempts + 1), 200 * (attempts + 1));
      } else {
        console.error(`Element ${id} not found after ${attempts} attempts`);
      }
      return false;
    };

    // Определяем, куда скроллить
    let targetId = null;
    
    // 1. Если путь содержит "contact"
    if (location.pathname.includes('contact')) {
      targetId = 'contact';
    }
    // 2. Обработка хэша (#contact)
    else if (location.hash) {
      targetId = location.hash.replace('#', '');
    }
    
    // Выполняем скролл, если определили цель
    if (targetId) {
      console.log(`Target ID from URL: ${targetId}, pathname: ${location.pathname}`);
      scrollToElement(targetId);
    }
    
  }, [location]);

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