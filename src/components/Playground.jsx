import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Code, Smartphone, Zap, Eye, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Playground = () => {
  const [activeTemplate, setActiveTemplate] = useState(1);
  const [copied, setCopied] = useState(false);
  
  const templates = [
    {
      id: 1,
      title: "Минимализм Pro",
      description: "Чистый дизайн для специалистов и консультантов",
      color: "from-gray-50 to-blue-50",
      previewColor: "bg-gradient-to-br from-gray-100 to-blue-100",
      features: ["Адаптивный", "Быстрая загрузка", "SEO-оптимизирован"],
      liveDemo: "https://natalia-vorobeva.github.io/business_card_hairdresser",
      codePen: "https://codepen.io/yourusername/pen/ExYZaBQ",
      suitableFor: ["Психологи", "Коучи", "Юристы", "Консультанты"],
      codeSnippet: `// Пример компонента навигации
const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      {/* Навигация */}
    </nav>
  )
}`
    },
    {
      id: 2,
      title: "Портфолио Max",
      description: "Для демонстрации работ с интерактивной галереей",
      color: "from-indigo-50 to-purple-50",
      previewColor: "bg-gradient-to-br from-indigo-100 to-purple-100",
      features: ["Галерея работ", "Анимации", "Тёмная тема", "Фильтрация"],
      liveDemo: "https://ваш-домен-галереи.ru",
      codePen: "https://codepen.io/yourusername/pen/MWXrRgY",
      suitableFor: ["Фотографы", "Дизайнеры", "Архитекторы", "Художники"],
      codeSnippet: `// Компонент галереи с фильтрацией
const Gallery = ({ items }) => {
  const [filter, setFilter] = useState('all');
  return (
    <div className="gallery-grid">
      {/* Элементы галереи */}
    </div>
  )
}`
    },
    {
      id: 3,
      title: "Сервис Premium",
      description: "Для услуг с онлайн-записью и календарём",
      color: "from-emerald-50 to-cyan-50",
      previewColor: "bg-gradient-to-br from-emerald-100 to-cyan-100",
      features: ["Формы записи", "Календарь", "Отзывы", "Чат"],
      liveDemo: "https://ваш-домен-услуг.ru",
      codePen: "https://codepen.io/yourusername/pen/qBQwXyP",
      suitableFor: ["Парикмахеры", "Косметологи", "Мастера ногтевого сервиса", "Тренеры"],
      codeSnippet: `// Компонент формы записи
const BookingForm = () => {
  const [date, setDate] = useState(new Date());
  return (
    <form className="booking-form">
      {/* Поля формы */}
    </form>
  )
}`
    }
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(templates[activeTemplate - 1].codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full mb-4">
            <Code className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">Интерактивная песочница</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Готовые шаблоны для вашего бизнеса</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Живые демо с реальным кодом. Нажмите "Демо" чтобы увидеть работающий сайт
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Template selector */}
          <div className="lg:w-1/3 space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Выберите шаблон:</h3>
            {templates.map((template) => (
              <motion.button
                key={template.id}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTemplate(template.id)}
                className={`w-full p-6 rounded-2xl text-left transition-all border-2 ${
                  activeTemplate === template.id 
                    ? `border-blue-500 bg-gradient-to-r ${template.color} shadow-lg` 
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-xl">{template.title}</h4>
                  {activeTemplate === template.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                    >
                      <Eye className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{template.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Подходит для:</div>
                  <div className="flex flex-wrap gap-2">
                    {template.suitableFor.map((prof) => (
                      <span 
                        key={prof}
                        className="px-2 py-1 bg-white/50 rounded text-xs"
                      >
                        {prof}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {template.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-3 py-1 bg-white/70 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
          
          {/* Template preview */}
          <motion.div
            key={activeTemplate}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-2/3"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100">
              {/* Preview header */}
              <div className="p-6 border-b flex items-center justify-between bg-gradient-to-r from-gray-50 to-white">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    {templates[activeTemplate - 1].title} — живая демонстрация
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Smartphone className="w-4 h-4" />
                    <span>Адаптивный</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Zap className="w-4 h-4" />
                    <span>Быстрый</span>
                  </div>
                </div>
              </div>
              
              {/* Interactive preview */}
              <div className={`${templates[activeTemplate - 1].previewColor} p-8 min-h-[400px]`}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3,
                        repeatType: "reverse"
                      }}
                      className="lg:w-1/3 text-center"
                    >
                      <div className="text-6xl mb-6">
                        {activeTemplate === 1 && "💼"}
                        {activeTemplate === 2 && "🎨"}
                        {activeTemplate === 3 && "✂️"}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        {templates[activeTemplate - 1].title}
                      </h3>
                      <p className="text-gray-600">
                        {templates[activeTemplate - 1].description}
                      </p>
                    </motion.div>
                    
                    <div className="lg:w-2/3">
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-700">Пример кода:</h4>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleCopyCode}
                            className="flex items-center gap-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors"
                          >
                            {copied ? (
                              <>
                                <Check className="w-4 h-4 text-green-500" />
                                <span className="text-green-600">Скопировано!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                <span>Копировать код</span>
                              </>
                            )}
                          </motion.button>
                        </div>
                        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm font-mono">
                            {templates[activeTemplate - 1].codeSnippet}
                          </pre>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={templates[activeTemplate - 1].liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 text-center"
                        >
                          <Eye className="w-5 h-5" />
                          Открыть живое демо
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={templates[activeTemplate - 1].codePen}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-gray-900 text-white rounded-lg font-semibold flex items-center justify-center gap-2 text-center"
                        >
                          <Code className="w-5 h-5" />
                          Посмотреть код на CodePen
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Preview footer */}
              <div className="p-6 border-t bg-gradient-to-r from-gray-50 to-white">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Технологии: </span>
                    React + Vite + Tailwind CSS + Framer Motion
                  </div>
                  <div className="text-sm text-gray-500">
                    На основе реальных проектов из портфолио
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA под превью */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 text-center"
            >
              <h4 className="text-lg font-semibold mb-2">Нужен такой шаблон для вашего бизнеса?</h4>
              <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
                Я адаптирую любой шаблон под ваши нужды или создам полностью индивидуальный дизайн
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                <span>Обсудить адаптацию</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Playground;