import { Link } from 'react-router-dom';

const Designer = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold mb-4">
                <Link to="/cases" className="hover:text-indigo-700 transition">← Все кейсы</Link>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Лендинг-портфолио для UX-дизайнера Миши</h1>
              <p className="text-xl text-gray-700 mb-8">Современное цифровое портфолио для привлечения зарубежных клиентов</p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white rounded-full shadow">React</span>
                <span className="px-4 py-2 bg-white rounded-full shadow">Next.js</span>
                <span className="px-4 py-2 bg-white rounded-full shadow">Tailwind CSS</span>
                <span className="px-4 py-2 bg-white rounded-full shadow">Framer Motion</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl">🎨</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Проблематика</h2>
              <div className="space-y-6">
                <div className="p-6 bg-indigo-50 rounded-2xl">
                  <h3 className="font-bold text-lg mb-2">Конкуренция на международном рынке</h3>
                  <p className="text-gray-700">Много дизайнеров с красивыми портфолио. Нужно было выделиться.</p>
                </div>
                <div className="p-6 bg-purple-50 rounded-2xl">
                  <h3 className="font-bold text-lg mb-2">Сложность демонстрации процесса</h3>
                  <p className="text-gray-700">Клиенты хотят видеть не только результат, но и подход к работе.</p>
                </div>
                <div className="p-6 bg-violet-50 rounded-2xl">
                  <h3 className="font-bold text-lg mb-2">Требования к перфомансу</h3>
                  <p className="text-gray-700">Портфолио должно грузиться быстро даже при медленном интернете.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Ключевые фичи</h2>
              <div className="space-y-6">
                <div className="p-6 border-2 border-indigo-200 rounded-2xl">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-3">A</div>
                    <h3 className="font-bold text-lg">Case studies с детализацией</h3>
                  </div>
                  <p className="text-gray-700">Каждый проект разбит на этапы: исследование, скетчи, прототипы, финальный дизайн.</p>
                </div>
                
                <div className="p-6 border-2 border-indigo-200 rounded-2xl">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-3">B</div>
                    <h3 className="font-bold text-lg">Toggle тёмной темы</h3>
                  </div>
                  <p className="text-gray-700">Переключение между light/dark mode с сохранением в localStorage.</p>
                </div>
                
                <div className="p-6 border-2 border-indigo-200 rounded-2xl">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-3">C</div>
                    <h3 className="font-bold text-lg">Анимации на scroll</h3>
                  </div>
                  <p className="text-gray-700">Плавное появление элементов, параллакс, индикатор прогресса.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Технологический стек</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="font-bold mb-2">Next.js 14</h3>
              <p className="text-sm text-gray-600">App Router, Server Components, ISR</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold mb-2">Tailwind CSS</h3>
              <p className="text-sm text-gray-600">JIT compiler, dark mode, animations</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl mb-4">🌀</div>
              <h3 className="font-bold mb-2">Framer Motion</h3>
              <p className="text-sm text-gray-600">Spring animations, gesture controls</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold mb-2">Vercel Analytics</h3>
              <p className="text-sm text-gray-600">Performance monitoring, A/B testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Итоги проекта</h2>
          
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl">
              <h3 className="font-bold text-2xl mb-4">Количественные результаты</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">3</div>
                  <p className="text-gray-700">Предложения о работе</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
                  <p className="text-gray-700">Core Web Vitals</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">2.8s</div>
                  <p className="text-gray-700">TTI на 3G</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-gray-50 rounded-3xl">
              <h3 className="font-bold text-2xl mb-4">Качественные результаты</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">✓</div>
                  <span>Упростился процесс найма для зарубежных клиентов</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">✓</div>
                  <span>Автоматизирована демонстрация работ через интеграцию с Behance API</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">✓</div>
                  <span>Реализована система блогинга для публикации статей о дизайне</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/cases" 
              className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition"
            >
              Смотреть все кейсы
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Designer