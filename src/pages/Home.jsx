import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Cases from '../components/Cases';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    // Сброс флага при каждом изменении location
    hasScrolledRef.current = false;
    
    // Всегда скроллим наверх при заходе на главную
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]); // Зависимость от пути, а не от всего location

  useEffect(() => {
    // Обработка state для скролла к определенной секции
    if (location.state?.scrollToSection && !hasScrolledRef.current) {
      hasScrolledRef.current = true;
      
      const timer = setTimeout(() => {
        const section = document.getElementById(location.state.scrollToSection);
        if (section) {
          section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
        // Очищаем state после скролла
        navigate('.', { state: null, replace: true });
      }, 150); // Увеличил таймаут для гарантии рендера
      
      return () => clearTimeout(timer);
    }

    // Обработка хэша в URL (якорных ссылок)
    if (location.hash && !hasScrolledRef.current) {
      hasScrolledRef.current = true;
      const id = location.hash.replace('#', '');
      
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
        // Убираем хэш из URL
        navigate('.', { hash: '', replace: true });
      }, 150);
      
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

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