import { useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, User, Package, Settings, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PersonalAccountDemo = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-6xl mx-auto px-4">
        <Link to="/playground" className="inline-flex items-center text-blue-600 mb-6">
          ← Назад
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Шапка */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Личный кабинет</h1>
                <p>Демо-версия личного кабинета для вашего бизнеса</p>
              </div>
              <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                <LogOut className="w-5 h-5" />
                Выйти
              </button>
            </div>
          </div>

          <div className="flex">
            {/* Сайдбар */}
            <div className="w-64 border-r p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <User className="w-5 h-5" />
                  Профиль
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'orders' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <Package className="w-5 h-5" />
                  Мои заказы
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  Настройки
                </button>
                <button
                  onClick={() => setActiveTab('help')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'help' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <HelpCircle className="w-5 h-5" />
                  Помощь
                </button>
              </nav>
            </div>

            {/* Основной контент */}
            <div className="flex-1 p-6">
              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold">Мой профиль</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold mb-4">Информация</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-gray-500">Имя</label>
                          <p className="font-semibold">Иван Иванов</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-500">Email</label>
                          <p className="font-semibold">ivan@example.com</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-500">Телефон</label>
                          <p className="font-semibold">+7 (999) 123-45-67</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold mb-4">Статистика</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-gray-500">Заказов</label>
                          <p className="font-semibold text-2xl">12</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-500">На сумму</label>
                          <p className="font-semibold text-2xl">45 000 ₽</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-500">Статус</label>
                          <p className="font-semibold text-green-600">Активный</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'orders' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Мои заказы</h2>
                  <div className="space-y-4">
                    {[1, 2, 3].map((order) => (
                      <div key={order} className="border rounded-xl p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-bold">Заказ №{order}00{order}</div>
                            <div className="text-sm text-gray-500">12.04.2023</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">5 000 ₽</div>
                            <div className={`text-sm ${
                              order === 1 ? 'text-green-600' : 
                              order === 2 ? 'text-blue-600' : 
                              'text-gray-600'
                            }`}>
                              {order === 1 ? 'Выполнен' : order === 2 ? 'В процессе' : 'Ожидает оплаты'}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Настройки аккаунта</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold mb-4">Уведомления</h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked />
                          <span>Уведомления о заказах</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked />
                          <span>Новости и обновления</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" />
                          <span>Рекламные рассылки</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'help' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Помощь</h2>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <p className="mb-4">
                      Если у вас возникли вопросы, напишите нам на почту или в Telegram.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Email:</span>
                        <span>support@example.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Telegram:</span>
                        <span>@support_bot</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccountDemo;