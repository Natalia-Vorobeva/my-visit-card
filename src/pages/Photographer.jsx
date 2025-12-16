import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, ArrowLeft, Image as ImageIcon, Calendar, Zap } from 'lucide-react';

const Photographer = () => {
  const features = [
    { icon: ImageIcon, title: "Галерея", desc: "Адаптивная сетка фотографий" },
    { icon: Calendar, title: "Запись", desc: "Онлайн-бронирование сессий" },
    { icon: Zap, title: "Скорость", desc: "Быстрая загрузка изображений" }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-amber-50 to-rose-50 py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <Link to="/cases">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center gap-2 text-amber-600 font-semibold mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Назад к кейсам
            </motion.div>
          </Link>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-rose-500 rounded-xl flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div>
                  {/* <div className="text-sm text-amber-600 font-semibold">УЧЕБНЫЙ ПРОЕКТ</div> */}
                  <div className="text-lg">Фотограф портретист</div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Сайт-портфолио для фотографа
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                Современный и быстрый сайт для демонстрации работ и привлечения клиентов
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {['React', 'Tailwind CSS', 'Framer Motion', 'Адаптивный'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-rose-100 rounded-2xl flex items-center justify-center">
                    <Camera className="w-24 h-24 text-amber-600/50" />
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <ImageIcon className="w-8 h-8 text-amber-600" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <Calendar className="w-6 h-6 text-rose-600" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Что реализовано
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Demo */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Технологии в действии</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Framer Motion анимации</span>
                  <span className="text-sm text-green-600">✓ реализовано</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-amber-400 to-rose-500"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Tailwind CSS адаптивность</span>
                  <span className="text-sm text-green-600">✓ реализовано</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-amber-400 to-rose-500"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Оптимизация загрузки</span>
                  <span className="text-sm text-green-600">✓ реализовано</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="h-full bg-gradient-to-r from-amber-400 to-rose-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-3xl p-12"
          >
            <h3 className="text-3xl font-bold mb-6">Хотите такой же сайт?</h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Я могу создать для вас современный и функциональный сайт
            </p>
            
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold rounded-xl shadow-lg"
              >
                Обсудить проект
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Photographer