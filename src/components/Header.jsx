import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code2, Sparkles, ArrowLeft } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const observerRef = useRef(null);
  const sectionsRef = useRef([]);

  // Обработчик скролла для определения активной секции
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Определяем активную секцию
      if (location.pathname === '/') {
        const sections = ['home', 'cases', 'process', 'playground', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Intersection Observer для более точного определения
  useEffect(() => {
    if (location.pathname !== '/') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.1
      }
    );

    const sections = ['home', 'cases', 'process', 'playground', 'contact'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
        sectionsRef.current.push(element);
      }
    });

    return () => {
      sectionsRef.current.forEach(element => {
        if (element) observer.unobserve(element);
      });
      sectionsRef.current = [];
    };
  }, [location.pathname]);

  // Функция для проверки активного пути
  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Функция для скролла к секциям на главной странице
  const handleSectionClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Даем время для перехода на главную, затем скроллим
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }
    setMobileMenuOpen(false);
  };

  // Навигационные ссылки
  const navLinks = [
    { id: 'home', type: 'internal', to: '/', label: 'Главная' },
    { id: 'cases', type: 'section', label: 'Кейсы' },
    { id: 'process', type: 'section', label: 'Процесс' },
    { id: 'playground', type: 'section', label: 'Стоимость' },
    { id: 'contact', type: 'section', label: 'Контакты' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Логотип - ссылка на основное портфолио */}
        <a 
          href="https://my-portfolio-vorobeva.vercel.app/" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
        >
          <motion.div 
            whileHover={{ rotate: 15 }}
            className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
          >
            <Code2 className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <div className="font-bold text-xl">
              <span className="text-primary">Frontend</span>
              <span className="text-gray-900">Craft</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span className="group-hover:text-blue-600 transition-colors">дополнение к портфолио</span>
            </div>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.type === 'internal' ? (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-3 py-2 font-medium transition-colors ${
                      isActive 
                        ? 'text-primary font-semibold' 
                        : 'text-gray-700 hover:text-primary'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ) : (
                <button
                  onClick={() => handleSectionClick(link.id)}
                  className={`relative px-3 py-2 font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-primary font-semibold' 
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="underline-section"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    />
                  )}
                </button>
              )}
            </motion.div>
          ))}
          
          {/* Ссылка на основное портфолио в десктоп меню */}
          <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            href="https://my-portfolio-vorobeva.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Вернуться к портфолио</span>
          </motion.a>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t shadow-lg"
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              link.type === 'internal' ? (
                <NavLink
                  key={link.id}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg font-medium ${
                      isActive 
                        ? 'bg-blue-50 text-primary' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleSectionClick(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium ${
                    activeSection === link.id
                      ? 'bg-blue-50 text-primary' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}
            
            {/* Ссылка на основное портфолио в мобильном меню */}
            <a
              href="https://my-portfolio-vorobeva.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 hover:bg-blue-100 mt-4"
            >
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Вернуться к портфолио</span>
              </div>
              <div className="text-xs text-blue-500 mt-1">Основной сайт с проектами</div>
            </a>
            
            {/* Контакты в мобильном меню */}
            <div className="pt-4 mt-4 border-t">
              <div className="flex gap-4">
                <a
                  href="https://t.me/vorobjevaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-center font-medium"
                >
                  Telegram
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="flex-1 px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-lg text-center font-medium text-blue-700"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;