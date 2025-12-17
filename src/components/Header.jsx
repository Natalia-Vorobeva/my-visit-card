// eslint-disable react-hooks/exhaustive-deps

import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code2, Sparkles, ArrowLeft, FolderOpen, ChevronRight } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const observerRef = useRef(null);
  const sectionsRef = useRef([]);
  const hasScrolledRef = useRef(false);

  // Определяем, находимся ли мы на странице конкретного кейса или демо
  const isCasePage = location.pathname.startsWith('/cases/') || 
                     location.pathname === '/client-account-demo';
  
  // ФИКС: Для страниц кейсов header всегда должен быть непрозрачным
  useEffect(() => {
    if (isCasePage) {
      setScrolled(true);
    }
  }, [isCasePage]);

  // Обработчик скролла для определения активной секции
  useEffect(() => {
    // На страницах кейсов не отслеживаем скролл для прозрачности
    if (isCasePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Определяем активную секцию только на главной странице
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
    
    // Инициализируем при монтировании
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isCasePage]);

  // Функция для скролла к секциям на главной странице
  const handleSectionClick = (sectionId) => {
    const cleanSectionId = sectionId.replace('#', '');
    
    if (location.pathname !== '/') {
      // Переходим на главную с состоянием для скролла
      navigate('/', { 
        state: { scrollToSection: cleanSectionId },
        replace: true 
      });
    } else {
      // Если уже на главной, просто скроллим
      const element = document.getElementById(cleanSectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(cleanSectionId);
      }
    }
    setMobileMenuOpen(false);
  };

  // Функция для скролла наверх
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        // ФИКС: На страницах кейсов header всегда непрозрачный
        isCasePage || scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Логотип */}
        <NavLink 
          to="/" 
          className="flex items-center gap-2 group"
          onClick={() => {
            if (location.pathname === '/') {
              scrollToTop();
            }
          }}
        >
          <motion.div 
            whileHover={{ rotate: 15 }}
            className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
          >
            <Code2 className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <div className="font-bold text-xl">
              <span className="text-blue-600">Frontend</span>
              <span className="text-gray-900">Craft</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span className="group-hover:text-blue-600 transition-colors">бизнес-кейсы</span>
            </div>
          </div>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => {
            // Специальная стилизация для кнопки "Кейсы" на страницах кейсов
            if (link.id === 'cases' && isCasePage) {
              return (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group/cases-btn"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400/30 via-blue-400/30 to-purple-400/30 rounded-lg blur opacity-0 group-hover/cases-btn:opacity-100 transition-opacity duration-500"></div>
                  
                  <button
                    onClick={() => handleSectionClick(link.id)}
                    className="relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-emerald-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all hover:scale-[1.02] border border-emerald-400/30 backdrop-blur-sm"
                  >
                    <FolderOpen className="w-4 h-4" />
                    <span>Все кейсы</span>
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover/cases-btn:translate-x-1 transition-transform" />
                  </button>
                  
                  {/* Декоративные точки */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full opacity-70"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-70"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-70"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gradient-to-br from-purple-400 to-emerald-400 rounded-full opacity-70"></div>
                </motion.div>
              );
            }

            // Обычные ссылки
            return (
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
                          ? 'text-blue-600 font-semibold' 
                          : 'text-gray-700 hover:text-blue-600'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <motion.div
                            layoutId="underline"
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
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
                        ? 'text-blue-600 font-semibold' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="underline-section"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                      />
                    )}
                  </button>
                )}
              </motion.div>
            );
          })}
          
          {/* Ссылка на основное портфолио */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative ml-4 group/portfolio-btn"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover/portfolio-btn:opacity-100 transition-opacity duration-500"></div>
            
            <a
              href="https://my-portfolio-vorobeva.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-5 py-2.5 bg-gradient-to-br from-gray-800/90 via-gray-900/95 to-gray-800/90 text-white font-medium rounded-lg hover:shadow-xl transition-all flex items-center gap-2 border border-gray-700/50 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>К портфолио</span>
            </a>
            
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-60"></div>
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-60"></div>
          </motion.div>
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
            {navLinks.map((link) => {
              // Специальная стилизация для кнопки "Кейсы" на страницах кейсов в мобильном меню
              if (link.id === 'cases' && isCasePage) {
                return (
                  <div key={link.id} className="mb-3">
                    <button
                      onClick={() => handleSectionClick(link.id)}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-md transition-all w-full"
                    >
                      <FolderOpen className="w-5 h-5" />
                      <span>Все кейсы</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                    <div className="text-xs text-center text-gray-500 mt-1">
                      Нажмите чтобы вернуться к списку
                    </div>
                  </div>
                );
              }

              // Обычные ссылки в мобильном меню
              return link.type === 'internal' ? (
                <NavLink
                  key={link.id}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg font-medium ${
                      isActive 
                        ? 'bg-blue-50 text-blue-600' 
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
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            
            {/* Ссылка на основное портфолио в мобильном меню */}
            <div className="relative mt-4 group/portfolio-mobile">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 rounded-lg blur opacity-0 group-hover/portfolio-mobile:opacity-100 transition-opacity duration-500"></div>
              
              <a
                href="https://my-portfolio-vorobeva.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="relative block px-4 py-3 rounded-lg font-medium bg-gradient-to-br from-gray-800/90 via-gray-900/95 to-gray-800/90 text-white border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <ArrowLeft className="w-4 h-4" />
                  <span>К портфолио</span>
                </div>
                <div className="text-xs text-gray-300 mt-1 opacity-80">Основной сайт с проектами</div>
                
                <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-60"></div>
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-60"></div>
              </a>
            </div>
            
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
                  href="mailto:vorobjeva.natalia76@gmail.com"
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