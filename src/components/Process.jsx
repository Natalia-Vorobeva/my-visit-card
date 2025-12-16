import { motion } from 'framer-motion';
import { MessageSquare, Palette, Code, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Обсуждение",
      description: "Поговорим о вашей задаче и пожеланиях"
    },
    {
      icon: Palette,
      title: "Дизайн",
      description: "Создам макет в Figma, согласуем"
    },
    {
      icon: Code,
      title: "Разработка",
      description: "Напишу код на React с анимациями"
    },
    {
      icon: CheckCircle,
      title: "Сдача",
      description: "Протестирую и передам готовый проект"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Как я работаю</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Простой и понятный процесс сотрудничества
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center"
                  >
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold">Сроки</div>
            <div className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              3-14 дней
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Цена</div>
            <div className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              от 4 000 ₽
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;