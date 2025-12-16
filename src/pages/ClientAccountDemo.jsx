import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  User, Package, Settings, Bell, Calendar, CreditCard, 
  MessageSquare, HelpCircle, LogOut, ArrowLeft,
  CheckCircle, Clock, XCircle, Star, TrendingUp,
  Shield, Download, FileText, Users, BarChart,
  Zap, Lock, Cloud, Smartphone, Globe
} from 'lucide-react';
import { useState } from 'react';

const ClientAccountDemo = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Новый заказ получен', time: '10 минут назад', read: false },
    { id: 2, text: 'Оплата подтверждена', time: '2 часа назад', read: true },
    { id: 3, text: 'Заказ выполнен', time: 'Вчера', read: true },
  ]);

  const orders = [
    { id: 1, name: 'Сайт-визитка', status: 'completed', price: '4 000 ₽', date: '12.04.2024' },
    { id: 2, name: 'Доработка галереи', status: 'in-progress', price: '2 000 ₽', date: '15.04.2024' },
    { id: 3, name: 'Добавление формы', status: 'pending', price: '1 500 ₽', date: '18.04.2024' },
  ];

  const stats = {
    totalOrders: 3,
    totalSpent: '7 500 ₽',
    satisfaction: '4.8/5',
    activeProjects: 1
  };

  const handleLogout = () => {
    alert('Выход выполнен (демо-режим)');
  };

  const features = [
    { icon: Shield, title: 'Безопасность', desc: 'Защита данных клиентов' },
    { icon: BarChart, title: 'Аналитика', desc: 'Статистика и отчеты' },
    { icon: Users, title: 'Управление', desc: 'Все клиенты в одном месте' },
    { icon: Cloud, title: 'Облако', desc: 'Доступ с любого устройства' },
  ];

  const integrationOptions = [
    'Телеграм-бот для уведомлений',
    'Интеграция с Яндекс.Кассой',
    'СМС-оповещения клиентов',
    'Синхронизация с Google Calendar',
    'API для мобильного приложения',
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Навигация назад - на блок с проектами */}
        <Link to="/#cases" className="inline-flex items-center text-blue-600 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          ← Назад к проектам с измеримыми результатами
        </Link>

        {/* Информационный блок о ЛК */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Личный кабинет клиента — демо-версия</h1>
              <p className="text-lg opacity-90 mb-6">
                Показательная версия системы, которую я разрабатываю для автоматизации вашего бизнеса. 
                Увидите, как это работает изнутри.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Реальные данные</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Адаптивный дизайн</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Полностью рабочий прототип</span>
              </div>
            </div>
            <div className="lg:w-1/3 text-center">
              <div className="text-6xl mb-4">👑</div>
              <div className="text-2xl font-bold">Входит в пакет ПРЕМИУМ</div>
              <div className="text-sm opacity-80 mt-2">15 000 ₽</div>
            </div>
          </div>
        </motion.div>

        {/* Демо личного кабинета */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
        >
          {/* Шапка ЛК */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Личный кабинет клиента</h1>
                <p className="opacity-90">Демо-версия системы управления вашими заказами</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="font-bold">Иван Иванов</div>
                  <div className="text-sm opacity-80">ivan@example.com</div>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Сайдбар навигации */}
            <div className="lg:w-1/4 border-r p-6">
              <nav className="space-y-2">
                {[
                  { id: 'profile', icon: User, label: 'Профиль' },
                  { id: 'orders', icon: Package, label: 'Мои заказы' },
                  { id: 'calendar', icon: Calendar, label: 'Календарь' },
                  { id: 'payments', icon: CreditCard, label: 'Оплаты' },
                  { id: 'messages', icon: MessageSquare, label: 'Сообщения' },
                  { id: 'settings', icon: Settings, label: 'Настройки' },
                  { id: 'help', icon: HelpCircle, label: 'Помощь' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                    {item.id === 'messages' && (
                      <span className="ml-auto w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        3
                      </span>
                    )}
                  </button>
                ))}
              </nav>

              {/* Выход */}
              <button
                onClick={handleLogout}
                className="w-full mt-6 flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Выйти
              </button>
            </div>

            {/* Основной контент */}
            <div className="lg:w-3/4 p-6">
              {activeTab === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <h2 className="text-2xl font-bold mb-6">Мой профиль</h2>
                  
                  {/* Статистика */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Всего заказов', value: stats.totalOrders, icon: Package, color: 'blue' },
                      { label: 'Потрачено', value: stats.totalSpent, icon: CreditCard, color: 'green' },
                      { label: 'Удовлетворение', value: stats.satisfaction, icon: Star, color: 'yellow' },
                      { label: 'Активные проекты', value: stats.activeProjects, icon: TrendingUp, color: 'purple' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                            <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
                          </div>
                          <div>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Информация профиля */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4">Личная информация</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Имя</label>
                        <div className="bg-white p-3 rounded-lg border">Иван Иванов</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Email</label>
                        <div className="bg-white p-3 rounded-lg border">ivan@example.com</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Телефон</label>
                        <div className="bg-white p-3 rounded-lg border">+7 (999) 123-45-67</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Компания</label>
                        <div className="bg-white p-3 rounded-lg border">Мой бизнес</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'orders' && (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Мои заказы</h2>
                  
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <div className="text-lg font-bold">{order.name}</div>
                              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                order.status === 'completed' ? 'bg-green-100 text-green-800' :
                                order.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {order.status === 'completed' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                                {order.status === 'in-progress' && <Clock className="w-3 h-3 inline mr-1" />}
                                {order.status === 'pending' && <Clock className="w-3 h-3 inline mr-1" />}
                                {order.status === 'completed' ? 'Выполнено' :
                                 order.status === 'in-progress' ? 'В работе' : 'Ожидание'}
                              </div>
                            </div>
                            <div className="text-sm text-gray-600">Дата: {order.date}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600 mb-1">{order.price}</div>
                            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                              Подробнее →
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'messages' && (
                <motion.div
                  key="messages"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Сообщения</h2>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Написать сообщение
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { user: 'Менеджер проекта', lastMessage: 'Ваш сайт готов к сдаче...', time: '10:30', unread: true },
                      { user: 'Техподдержка', lastMessage: 'Вопрос по оплате решен...', time: 'Вчера', unread: false },
                      { user: 'Дизайнер', lastMessage: 'Отправил вам макет...', time: '2 дня назад', unread: false },
                    ].map((msg, idx) => (
                      <div key={idx} className={`p-4 border rounded-xl cursor-pointer hover:bg-gray-50 ${
                        msg.unread ? 'border-blue-300 bg-blue-50' : ''
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-bold">{msg.user}</div>
                          <div className="text-sm text-gray-500">{msg.time}</div>
                        </div>
                        <div className="text-gray-600">{msg.lastMessage}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Настройки</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold text-lg mb-4">Уведомления</h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="w-5 h-5" />
                          <span>Уведомления о статусе заказов</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="w-5 h-5" />
                          <span>Новости и обновления</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" className="w-5 h-5" />
                          <span>Рекламные рассылки</span>
                        </label>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold text-lg mb-4">Безопасность</h3>
                      <div className="space-y-4">
                        <button className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                          Сменить пароль
                        </button>
                        <button className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 ml-0 md:ml-4">
                          Двухфакторная аутентификация
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Расширенный информационный контент */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Преимущества ЛК */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Преимущества личного кабинета</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Варианты интеграции */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6">Что можно интегрировать?</h3>
            <ul className="space-y-3">
              {integrationOptions.map((option, index) => (
                <li key={index} className="flex items-center">
                  <Zap className="w-5 h-5 text-green-500 mr-3" />
                  <span>{option}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-white/50 rounded-xl">
              <p className="text-sm text-gray-700">
                <strong>Стоимость интеграции:</strong> от 3 000 ₽ за каждый дополнительный модуль
              </p>
            </div>
          </motion.div>
        </div>

        {/* Бизнес-выгода */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Бизнес-результаты после внедрения ЛК</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">+40%</div>
                <div className="text-lg">Удержание клиентов</div>
                <div className="text-sm opacity-80 mt-2">Повторные покупки</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">-60%</div>
                <div className="text-lg">Времени на админ. задачи</div>
                <div className="text-sm opacity-80 mt-2">Автоматизация процессов</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">2.5×</div>
                <div className="text-lg">Средний чек</div>
                <div className="text-sm opacity-80 mt-2">Кросс-продажи</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Таблица сравнения */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Что входит в стоимость ЛК?</h3>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left">Функция</th>
                  <th className="p-4 text-center">Базовый</th>
                  <th className="p-4 text-center">Профессиональный</th>
                  <th className="p-4 text-center bg-gradient-to-r from-amber-50 to-orange-50">Премиум</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Управление заказами', '❌', '✅', '✅'],
                  ['Личные сообщения', '❌', '✅', '✅'],
                  ['История платежей', '❌', '✅', '✅'],
                  ['Календарь записи', '❌', '❌', '✅'],
                  ['Мобильная версия', '❌', '❌', '✅'],
                  ['API для интеграций', '❌', '❌', '✅'],
                  ['Техподдержка', '30 дней', '90 дней', '365 дней'],
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row[0]}</td>
                    <td className="p-4 text-center">{row[1]}</td>
                    <td className="p-4 text-center">{row[2]}</td>
                    <td className="p-4 text-center bg-gradient-to-r from-amber-50/50 to-orange-50/50 font-semibold">
                      {row[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA с четкой ценой */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Хотите такой же личный кабинет?</h3>
            <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
              Полная стоимость разработки — <span className="font-bold">15 000 ₽</span><br/>
              <span className="text-sm opacity-80">(включает все функции из демо)</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-xl transition-all"
                >
                  Посмотреть все тарифы
                </motion.button>
              </Link>
              <Link to="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white/30 transition-all"
                >
                  Обсудить детали проекта
                </motion.button>
              </Link>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Срок разработки: 7-10 дней
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4" /> Гарантия: 90 дней
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientAccountDemo;