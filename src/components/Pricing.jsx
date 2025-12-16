import { motion } from 'framer-motion';
import { Check, Zap, Clock, Star, ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
	const [activePeriod, setActivePeriod] = useState('monthly');

	const packages = [
		{
			id: 1,
			name: "Базовый",
			tagline: "Старт вашего онлайн-присутствия",
			description: "Простая визитка для быстрого старта",
			price: "4 000 ₽",
			oldPrice: "6 000 ₽",
			deliveryTime: "3-5 дней",
			features: [
				"Адаптивный дизайн",
				"Несложный слайдер (до 5 фото)",
				"Основная информация о вас",
				"Контакты и соцсети",
				"Хостинг на 1 месяц в подарок",
				"Базовая SEO-оптимизация"
			],
			color: "from-blue-50 to-cyan-50",
			buttonColor: "from-blue-500 to-cyan-500",
			recommended: false,
			suitableFor: ["Начинающие специалисты", "Пробный проект", "Минимальный бюджет"]
		},
		{
			id: 2,
			name: "Профессиональный",
			tagline: "Сайт с элементами автоматизации",
			description: "Для активного привлечения клиентов",
			price: "8 000 ₽",
			oldPrice: "12 000 ₽",
			deliveryTime: "5-7 дней",
			features: [
				"Всё из пакета Базовый +",
				"Форма обратной связи",
				"Расширенная галерея/слайдер",
				"Тёмная/светлая тема",
				"Отзывы клиентов",
				"Система бронирования",
				"Интеграция с соцсетями",
				"SEO-оптимизация"
			],
			color: "from-purple-50 to-pink-50",
			buttonColor: "from-purple-500 to-pink-500",
			recommended: true,
			suitableFor: ["Активные специалисты", "Растущий бизнес", "Постоянный поток клиентов"]
		},
		{
			id: 3,
			name: "Премиум",
			tagline: "Полный комплект для бизнеса",
			description: "Включает личный кабинет (как в демо)",
			price: "35 000 ₽",
			oldPrice: "42 000 ₽",
			deliveryTime: "20-40 дней",
			features: [
				"Личный кабинет клиента (демо выше)",
				"Онлайн-запись и календарь",
				"Система уведомлений",
				"История заказов и платежей",
				"Личные сообщения с клиентами",
				"Мобильная версия ЛК",
				"API для будущих интеграций",
				"Глубокая SEO-оптимизация",
				"Приоритетная поддержка 365 дней"
			],
			color: "from-amber-50 to-orange-50",
			buttonColor: "from-amber-500 to-orange-500",
			recommended: false,
			suitableFor: ["Успешные бизнесы", "Масштабирование", "Премиум-сегмент"]
		}
	];

	const examples = [
		{
			title: "Сайт мастера парикмахера",
			url: "https://natalia-vorobeva.github.io/business_card_hairdresser",
			features: ["Галерея работ", "Запись онлайн", "Портфолио"],
			color: "bg-gradient-to-r from-pink-100 to-rose-100"
		},
		{
			title: "Презентация слайдеров",
			url: "https://natalia-vorobeva.github.io/carousels/",
			features: ["Интерактивные слайдеры", "Анимации", "Адаптивность"],
			color: "bg-gradient-to-r from-blue-100 to-indigo-100"
		},
		{
			title: "Сайт мастера маникюра",
			url: "https://natalia-vorobeva.github.io/business_card_manicure/",
			features: ["Категории услуг", "Фильтрация", "Быстрая загрузка"],
			color: "bg-gradient-to-r from-emerald-100 to-teal-100"
		},
		{
			title: "Личный кабинет (демо)",
			url: "/personal-account-demo",
			features: ["Профиль", "История заказов", "Настройки"],
			color: "bg-gradient-to-r from-amber-100 to-yellow-100"
		},
		// {
		// 	title: "Личный кабинет (демо-2)",
		// 	url: "/client-account-demo",
		// 	features: ["Управление заказами", "Сообщения", "Аналитика"],
		// 	color: "bg-gradient-to-r from-amber-100 to-yellow-100"
		// }
	];

	return (
		<section id="pricing" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-6xl mx-auto">
				{/* Заголовок с акцентом на срочность */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 rounded-full mb-4">
						<Zap className="w-4 h-4 text-orange-600" />
						<span className="text-sm font-medium text-orange-700">СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</span>
					</div>
					<h2 className="text-4xl font-bold mb-4">Сайт-визитка от 4 000 ₽</h2>
					<p className="text-gray-600 max-w-2xl mx-auto text-lg">
						Начинающий разработчик = доступные цены.
						<span className="font-semibold text-blue-600"> Идеальный момент для старта вашего бизнеса!</span>
					</p>
				</motion.div>

				{/* Срочность и выгода */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className="mb-12"
				>
					<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
						<h3 className="text-2xl font-bold mb-4">Почему сейчас лучшее время?</h3>
						<div className="grid md:grid-cols-3 gap-6">
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
									<Calendar className="w-6 h-6" />
								</div>
								<div className="font-bold text-lg mb-2">Быстрый старт</div>
								<p className="text-white/80 text-sm">Сайт готов за 3-10 дней</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
									<Sparkles className="w-6 h-6" />
								</div>
								<div className="font-bold text-lg mb-2">Цены на взлете</div>
								<p className="text-white/80 text-sm">Пока я начинающий - цены самые низкие</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
									<Star className="w-6 h-6" />
								</div>
								<div className="font-bold text-lg mb-2">Индивидуальный подход</div>
								<p className="text-white/80 text-sm">Каждый проект - особенный</p>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Тарифы */}
				<div className="grid md:grid-cols-3 gap-8 mb-16">
					{packages.map((pkg, index) => (
						<motion.div
							key={pkg.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className={`relative ${pkg.recommended ? 'transform md:-translate-y-4' : ''}`}
						>
							{pkg.recommended && (
								<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
									<div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
										САМЫЙ ВЫГОДНЫЙ
									</div>
								</div>
							)}

							<div className={`${pkg.color} rounded-2xl p-6 h-full border-2 ${pkg.recommended ? 'border-purple-300 shadow-xl' : 'border-gray-200'
								}`}>
								{/* Заголовок тарифа */}
								<div className="mb-6">
									<h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
									<p className="text-gray-600 mb-1">{pkg.tagline}</p>
									<p className="text-sm text-gray-500">{pkg.description}</p>
								</div>

								{/* Цена */}
								<div className="mb-6">
									<div className="flex items-baseline gap-2">
										<span className="text-4xl font-bold">{pkg.price}</span>
										<span className="text-gray-400 line-through">{pkg.oldPrice}</span>
									</div>
									<div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
										<Clock className="w-4 h-4" />
										<span>Срок: {pkg.deliveryTime}</span>
									</div>
								</div>

								{/* Кому подходит */}
								<div className="mb-6">
									<div className="text-sm font-semibold text-gray-700 mb-2">Идеально для:</div>
									<div className="flex flex-wrap gap-2">
										{pkg.suitableFor.map((item, idx) => (
											<span
												key={idx}
												className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs"
											>
												{item}
											</span>
										))}
									</div>
								</div>

								{/* Что входит */}
								<div className="mb-8">
									<div className="text-sm font-semibold text-gray-700 mb-3">Что входит:</div>
									<ul className="space-y-2">
										{pkg.features.map((feature, idx) => (
											<li key={idx} className="flex items-start text-sm">
												<Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Кнопка заказа */}
								<motion.a
									href="#contact"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className={`block w-full py-3 bg-gradient-to-r ${pkg.buttonColor} text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all`}
								>
									Заказать {pkg.name.toLowerCase()} пакет
								</motion.a>
							</div>
						</motion.div>
					))}
				</div>

				{/* Примеры работ */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12"
				>
					<div className="text-center mb-8">
						<h3 className="text-2xl font-bold mb-4">Возьмите понравившийся элемент</h3>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Не все возможные варианты представлены здесь. Можно комбинировать элементы из разных проектов!
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{examples.map((example, index) => (
							<motion.a
								key={example.title}
								href={example.url}
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 + index * 0.1 }}
								whileHover={{ y: -5 }}
								className={`${example.color} rounded-2xl p-6 block hover:shadow-lg transition-shadow`}
							>
								<div className="mb-4">
									<div className="text-lg font-bold mb-2">{example.title}</div>
									<div className="text-sm text-gray-600">Демо-версия →</div>
								</div>
								<div className="flex flex-wrap gap-2">
									{example.features.map((feature, idx) => (
										<span
											key={idx}
											className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs"
										>
											{feature}
										</span>
									))}
								</div>
							</motion.a>
						))}
					</div>
				</motion.div>

				{/* Важное примечание */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
				>
					<div className="flex flex-col md:flex-row items-center gap-6">
						<div className="md:w-2/3">
							<h3 className="text-2xl font-bold mb-4">Не нашли подходящий вариант?</h3>
							<p className="text-gray-700 mb-4">
								Я создам индивидуальное решение именно под ваши задачи. Расскажите, что вам нужно,
								и я предложу оптимальный вариант в рамках вашего бюджета.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center">
									<Check className="w-4 h-4 text-green-500 mr-2" />
									<span>Можно взять любой элемент из моих работ</span>
								</li>
								<li className="flex items-center">
									<Check className="w-4 h-4 text-green-500 mr-2" />
									<span>Добавить нужную именно вам функциональность</span>
								</li>
								<li className="flex items-center">
									<Check className="w-4 h-4 text-green-500 mr-2" />
									<span>Скорректировать дизайн под ваш бренд</span>
								</li>
							</ul>
						</div>
						<div className="md:w-1/3">
							<motion.a
								href="#contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="block w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
							>
								<span>Обсудить индивидуальный проект</span>
								<ArrowRight className="w-5 h-5" />
							</motion.a>
							<p className="text-center text-sm text-gray-500 mt-3">
								Отвечаю в течение 2 часов в рабочее время
							</p>
						</div>
					</div>
				</motion.div>

				{/* Срочный CTA */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-center text-white"
				>
					<h3 className="text-2xl font-bold mb-4">ЛОВИТЕ МОМЕНТ! 🚀</h3>
					<p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
						Пока я начинающий разработчик - цены самые низкие на рынке.
						Через полгода такой сайт будет стоить в 2-3 раза дороже!
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<motion.a
							href="#contact"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:shadow-xl transition-all"
						>
							ЗАКАЗАТЬ СЕЙЧАС СО СКИДКОЙ
						</motion.a>
						<motion.a
							href="tel:+79991234567"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white/30 transition-all"
						>
							ПОЗВОНИТЬ СЕЙЧАС
						</motion.a>
					</div>
					<p className="mt-6 text-sm opacity-80">
						Осталось 3 свободных слота на этот месяц
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Pricing;