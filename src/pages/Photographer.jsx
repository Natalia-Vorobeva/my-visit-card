import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, ArrowLeft, CheckCircle, XCircle, Zap, Shield, ImageIcon, Users, ArrowUpRight, Globe, Target, Calendar, ChevronLeft, ChevronRight, Clock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Photographer = () => {
	const navigate = useNavigate();

	const handleBackToCases = (e) => {
		e.preventDefault();
		navigate('/', {
			state: { scrollToSection: 'cases' },
			replace: true
		});
	};

	const comparisonData = {
		site: {
			title: "Профессиональный сайт",
			benefits: [
				"Полный контроль над дизайном и контентом",
				"Нет ограничений на количество и качество фото",
				"Интеграция с календарём записи и оплатой",
				"SEO-оптимизация для поисковых систем",
				"Аналитика поведения посетителей",
				"Личный бренд, а не платформа",
				"Высокая скорость загрузки",
				"Адаптация под все устройства"
			],
			icon: Globe,
			color: "from-amber-500 to-orange-500"
		},
		social: {
			title: "Соцсети (ВКонтакте)",
			drawbacks: [
				"Алгоритмы скрывают ваш контент",
				"Ограничения по качеству изображений",
				"Реклама конкурентов рядом с вами",
				"Нет инструментов для бронирования",
				"Сложно выделиться среди миллионов",
				"Зависимость от правил платформы",
				"Низкая конверсия в заказы",
				"Посторонний дизайн и интерфейсы"
			],
			icon: Users,
			color: "from-blue-500 to-cyan-500"
		}
	};

	const businessResults = [
		{ icon: Target, value: "2.5x", label: "выше конверсия", desc: "чем в соцсетях" },
		{ icon: Zap, value: "24/7", label: "работает на вас", desc: "даже когда вы отдыхаете" },
		{ icon: Shield, value: "100%", label: "ваш бренд", desc: "никакой чужой рекламы" }
	];

	const interactiveFeatures = [
		{
			title: "Адаптивная галерея",
			description: "Фотографии автоматически подстраиваются под экран, сохраняя качество и пропорции",
			interactive: "Наведите на пример →",
			demo: (
				<motion.div
					className="grid grid-cols-3 gap-1 p-2 bg-gray-900/5 rounded-lg"
					whileHover={{ scale: 1.02 }}
				>
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<motion.div
							key={i}
							className="aspect-square bg-gradient-to-br from-amber-200 to-orange-300 rounded-sm"
							whileHover={{ scale: 1.1, zIndex: 10 }}
							transition={{ type: "spring", stiffness: 300 }}
						/>
					))}
				</motion.div>
			)
		},
		{
			title: "Умное бронирование",
			description: "Клиенты сами выбирают время, получают напоминания, а вы — уведомления",
			interactive: "Попробуйте выбрать дату →",
			demo: (
				<motion.div className="p-4 bg-white rounded-xl shadow-sm">
					<div className="flex gap-2 mb-3">
						{['Пн', 'Вт', 'Ср', 'Чт', 'Пт'].map((day, i) => (
							<motion.button
								key={day}
								className={`px-3 py-1 rounded-lg ${i === 2 ? 'bg-amber-500 text-white' : 'bg-gray-100'}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{day}
							</motion.button>
						))}
					</div>
					<div className="text-sm text-gray-600">Выбранное время: 14:30</div>
				</motion.div>
			)
		}
	];

	return (
		<div className="pt-20">
			{/* Hero - оставляем, но добавляем акцент на бизнес-цели */}
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-20 px-4"
			>
				<div className="max-w-6xl mx-auto">
					<motion.div
          onClick={handleBackToCases}
          whileHover={{ x: -5 }}
          className="inline-flex items-center text-blue-600 mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          ← Назад к проектам с измеримыми результатами
        </motion.div>

					<div className="flex flex-col lg:flex-row items-center gap-12">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							className="lg:w-1/2"
						>
							<div className="inline-flex items-center gap-3 mb-6">
								<div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
									<Camera className="w-6 h-6 text-white" />
								</div>
								<div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl">
									<div className="text-lg font-semibold text-gray-800">Фотограф-портретист</div>
									<div className="text-sm text-amber-600">Бизнес-кейс</div>
								</div>
							</div>

							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								<span className="text-gray-900">Сайт, который</span>
								<br />
								<span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
									привлекает клиентов 24/7
								</span>
							</h1>

							<p className="text-xl text-gray-700 mb-8 leading-relaxed">
								Не просто визитка, а <span className="font-semibold text-amber-700">инструмент продаж</span>,
								который работает круглосуточно, выделяет вас среди конкурентов и превращает посетителей в клиентов.
							</p>

							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
								className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8"
							>
								<div className="flex items-center gap-3 mb-3">
									<Target className="w-5 h-5 text-amber-600" />
									<h3 className="font-bold text-lg text-gray-800">Бизнес-задача</h3>
								</div>
								<p className="text-gray-700">
									Уйти от зависимости от соцсетей, повысить ценность услуг,
									автоматизировать запись и увеличить средний чек на 30%
								</p>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							className="lg:w-1/2"
						>
							<div className="relative">
								<div className="bg-white p-6 rounded-3xl shadow-2xl">
									<div className="aspect-video bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl flex items-center justify-center overflow-hidden">
										{/* Mockup сайта */}
										<div className="w-full h-full p-4">
											<div className="flex items-center gap-2 mb-4">
												<div className="w-3 h-3 rounded-full bg-red-400"></div>
												<div className="w-3 h-3 rounded-full bg-amber-400"></div>
												<div className="w-3 h-3 rounded-full bg-green-400"></div>
												<div className="ml-4 text-sm font-semibold text-gray-600">anna-photo.ru</div>
											</div>
											<div className="grid grid-cols-3 gap-2">
												{[1, 2, 3, 4, 5, 6].map((i) => (
													<div key={i} className="aspect-square bg-gradient-to-br from-amber-200 to-orange-300 rounded-lg"></div>
												))}
											</div>
										</div>
									</div>
								</div>

								{/* Плавающие результаты */}
								<motion.div
									animate={{ y: [0, -10, 0] }}
									transition={{ repeat: Infinity, duration: 3 }}
									className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4"
								>
									<div className="text-2xl font-bold text-amber-600">+40%</div>
									<div className="text-xs text-gray-600">запросов</div>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.section>

			{/* Сравнение: Сайт vs Соцсети */}
			<section className="py-16 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Почему сайт, а не только ВКонтакте?
						</h2>
						<p className="text-gray-600 text-lg max-w-3xl mx-auto">
							Соцсети — для знакомства. Сайт — для серьёзных клиентов и роста бизнеса.
						</p>
					</motion.div>

					<div className="grid lg:grid-cols-2 gap-8">
						{/* Сайт */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className={`bg-gradient-to-br ${comparisonData.site.color} p-1 rounded-3xl`}
						>
							<div className="bg-white rounded-3xl p-8 h-full">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
										<comparisonData.site.icon className="w-6 h-6 text-white" />
									</div>
									<div>
										<h3 className="text-xl font-bold">{comparisonData.site.title}</h3>
										<div className="text-sm text-amber-600 font-semibold">Ваше личное пространство</div>
									</div>
								</div>

								<div className="space-y-4">
									{comparisonData.site.benefits.map((benefit, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.1 }}
											className="flex items-start gap-3"
										>
											<CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
											<span className="text-gray-700">{benefit}</span>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>

						{/* Соцсети */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="bg-gray-50 border border-gray-200 rounded-3xl p-8"
						>
							<div className="flex items-center gap-4 mb-6">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
									<comparisonData.social.icon className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold">{comparisonData.social.title}</h3>
									<div className="text-sm text-gray-500">Платформа, а не ваш бренд</div>
								</div>
							</div>

							<div className="space-y-4">
								{comparisonData.social.drawbacks.map((drawback, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: 20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}
										className="flex items-start gap-3"
									>
										<XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
										<span className="text-gray-600">{drawback}</span>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Интерактивные фичи */}
			{/* Интерактивные фичи */}
			<section className="py-16 px-4 bg-gradient-to-b from-amber-50/30 to-orange-50/30">
				<div className="max-w-6xl mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl font-bold text-center mb-12"
					>
						<span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
							Профессиональный инструментарий
						</span>
					</motion.h2>

					<div className="grid md:grid-cols-2 gap-8 mb-12">
						{/* Адаптивная галерея с ссылкой на демо */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							whileHover={{ y: -5 }}
							className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100"
						>
							<div className="flex items-center justify-between mb-4">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
										<ImageIcon className="w-5 h-5 text-white" />
									</div>
									<h3 className="font-bold text-xl text-gray-800">Адаптивная галерея</h3>
								</div>
								<motion.a
									href="https://natalia-vorobeva.github.io/carousels/"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="text-sm px-4 py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors"
								>
									Демо галерей →
								</motion.a>
							</div>

							<p className="text-gray-600 mb-6">
								Фотографии автоматически подстраиваются под экран, сохраняя качество и пропорции.
								Поддержка различных форматов галерей: слайдеры, сетки, masonry-раскладка.
							</p>

							<div className="space-y-4">
								<div className="flex items-center justify-between text-sm">
									<span className="text-gray-700 font-medium">Доступные форматы:</span>
									<span className="text-amber-600 font-semibold">Много вариантов галерей</span>
								</div>

								<div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4">
									<div className="grid grid-cols-2 gap-2 mb-3">
										{['Слайдер', 'Сетка'].map((type) => (
											<div key={type} className="text-center">
												<div className="w-12 h-12 mx-auto bg-white rounded-lg flex items-center justify-center mb-1 shadow-sm">
													<div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-400 rounded"></div>
												</div>
												<span className="text-xs font-medium text-gray-700">{type}</span>
											</div>
										))}
									</div>

									<motion.div
										className="grid grid-cols-3 gap-1 p-2 bg-white rounded-lg shadow-inner"
										whileHover={{ scale: 1.02 }}
									>
										{[1, 2, 3, 4, 5, 6].map((i) => (
											<motion.div
												key={i}
												className="aspect-square bg-gradient-to-br from-amber-200 to-orange-300 rounded-sm"
												whileHover={{
													scale: 1.2,
													zIndex: 10,
													boxShadow: "0 10px 25px -5px rgba(251, 146, 60, 0.3)"
												}}
												transition={{ type: "spring", stiffness: 300 }}
											/>
										))}
									</motion.div>
								</div>

								<div className="pt-4 border-t border-gray-100">
									<a
										href="https://natalia-vorobeva.github.io/carousels/"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-orange-700"
									>
										<span>Посмотреть все примеры галерей</span>
										<ArrowUpRight className="w-4 h-4" />
									</a>
								</div>
							</div>
						</motion.div>

						{/* Умное бронирование */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
							whileHover={{ y: -5 }}
							className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100"
						>
							<div className="flex items-center gap-3 mb-4">
								<div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-500 rounded-lg flex items-center justify-center">
									<Calendar className="w-5 h-5 text-white" />
								</div>
								<div>
									<h3 className="font-bold text-xl text-gray-800">Умное бронирование</h3>
									<div className="text-sm text-orange-600 font-medium">Автоматизация записи</div>
								</div>
							</div>

							<p className="text-gray-600 mb-6">
								Клиенты сами выбирают удобное время, получают напоминания, а вы — уведомления
								о новых заказах. Интеграция с вашим календарём и мессенджерами.
							</p>

							<div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-xl p-6">
								<div className="text-center mb-6">
									<div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-2">
										<Calendar className="w-4 h-4 text-orange-500" />
										<span className="text-sm font-medium text-gray-700">Симуляция записи</span>
									</div>
									<p className="text-sm text-gray-600">Попробуйте выбрать дату и время</p>
								</div>

								<div className="space-y-6">
									{/* Календарь */}
									<div className="bg-white rounded-xl p-4 shadow-sm">
										<div className="flex items-center justify-between mb-4">
											<span className="font-semibold text-gray-800">Июнь 2024</span>
											<div className="flex gap-2">
												<button className="p-2 hover:bg-gray-100 rounded-lg">
													<ChevronLeft className="w-4 h-4" />
												</button>
												<button className="p-2 hover:bg-gray-100 rounded-lg">
													<ChevronRight className="w-4 h-4" />
												</button>
											</div>
										</div>

										<div className="grid grid-cols-7 gap-2 mb-2">
											{['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
												<div key={day} className="text-center text-sm font-medium text-gray-500 py-1">
													{day}
												</div>
											))}
										</div>

										<div className="grid grid-cols-7 gap-2">
											{Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
												<motion.button
													key={day}
													className={`py-2 text-sm rounded-lg transition-all ${day === 15
															? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md'
															: day > 20
																? 'bg-gray-100 text-gray-400'
																: 'hover:bg-gray-100 text-gray-700'
														}`}
													whileHover={{ scale: day <= 20 && day !== 15 ? 1.1 : 1 }}
													whileTap={{ scale: 0.95 }}
													disabled={day > 20}
												>
													{day}
												</motion.button>
											))}
										</div>
									</div>

									{/* Выбор времени */}
									<div>
										<div className="font-medium text-gray-700 mb-3">Выберите время:</div>
										<div className="grid grid-cols-4 gap-2">
											{['10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00', '20:30'].map((time) => (
												<motion.button
													key={time}
													className={`py-3 text-sm rounded-lg font-medium ${time === '14:30'
															? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md'
															: 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
														}`}
													whileHover={{ scale: time !== '14:30' ? 1.05 : 1 }}
													whileTap={{ scale: 0.95 }}
												>
													{time}
												</motion.button>
											))}
										</div>
									</div>

									{/* Итог бронирования */}
									<motion.div
										className="bg-white rounded-xl p-4 shadow-sm border border-green-200"
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 1 }}
									>
										<div className="flex items-center justify-between mb-2">
											<span className="font-medium text-gray-700">Вы выбрали:</span>
											<span className="font-semibold text-green-600">✓</span>
										</div>
										<div className="space-y-1">
											<div className="flex items-center gap-2">
												<Calendar className="w-4 h-4 text-orange-500" />
												<span className="text-gray-800">15 июня 2024</span>
											</div>
											<div className="flex items-center gap-2">
												<Clock className="w-4 h-4 text-orange-500" />
												<span className="text-gray-800">14:30 — 16:00</span>
											</div>
											<div className="flex items-center gap-2">
												<User className="w-4 h-4 text-orange-500" />
												<span className="text-gray-800">Портретная сессия</span>
											</div>
										</div>

										<motion.button
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
											className="w-full mt-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-lg shadow-md"
										>
											Забронировать за 5 900 ₽
										</motion.button>
									</motion.div>

									<div className="pt-4 border-t border-gray-200">
										<div className="flex items-center gap-3">
											<div className="flex-1">
												<div className="text-sm text-gray-600 mb-1">Что получает фотограф:</div>
												<div className="flex flex-wrap gap-2">
													{['Уведомления', 'Календарь', 'Предоплата', 'Напоминания'].map((feature) => (
														<span key={feature} className="px-3 py-1 bg-white rounded-full text-xs font-medium border border-gray-200">
															{feature}
														</span>
													))}
												</div>
											</div>
											<div className="text-right">
												<div className="text-xs text-gray-500">Конверсия</div>
												<div className="text-lg font-bold text-green-600">+35%</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Информационный блок под фичами */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-8 text-center border border-amber-200"
					>
						<div className="max-w-2xl mx-auto">
							<h3 className="text-xl font-bold text-gray-800 mb-4">
								Каждая фича решает конкретную бизнес-задачу
							</h3>
							<p className="text-gray-600 mb-6">
								Галерея не просто показывает фото — она увеличивает время пребывания на сайте в 2 раза.
								Бронирование не просто записывает клиентов — оно сокращает неподтверждённые заказы на 60%.
							</p>
							<div className="flex flex-wrap justify-center gap-6">
								{[
									{ label: 'Удержание внимания', value: '2x', desc: 'дольше на сайте' },
									{ label: 'Снижение отказов', value: '60%', desc: 'меньше неявок' },
									{ label: 'Автоматизация', value: '8 ч/нед', desc: 'экономия времени' },
								].map((stat) => (
									<div key={stat.label} className="bg-white/80 px-6 py-3 rounded-xl">
										<div className="text-2xl font-bold text-amber-700">{stat.value}</div>
										<div className="text-sm font-medium text-gray-700">{stat.label}</div>
										<div className="text-xs text-gray-500">{stat.desc}</div>
									</div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Итог для клиента */}
			<section className="py-16 px-4 bg-gradient-to-br from-amber-900/5 to-orange-900/5">
				<div className="max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
					>
						<div className="flex items-start gap-6">
							<div className="hidden md:block">
								<div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
									<Camera className="w-8 h-8 text-white" />
								</div>
							</div>

							<div>
								<h3 className="text-2xl font-bold mb-4">
									Для кого этот подход?
								</h3>

								<div className="space-y-4 mb-8">
									<div className="flex items-start gap-3">
										<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
											<CheckCircle className="w-4 h-4 text-green-600" />
										</div>
										<p className="text-gray-700">
											<span className="font-semibold">Для фотографов,</span> которые хотят перестать быть "одним из многих"
											и начать восприниматься как эксперты
										</p>
									</div>

									<div className="flex items-start gap-3">
										<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
											<CheckCircle className="w-4 h-4 text-green-600" />
										</div>
										<p className="text-gray-700">
											<span className="font-semibold">Для профессионалов,</span> готовых инвестировать в инструменты,
											которые работают на них круглосуточно
										</p>
									</div>

									<div className="flex items-start gap-3">
										<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
											<CheckCircle className="w-4 h-4 text-green-600" />
										</div>
										<p className="text-gray-700">
											<span className="font-semibold">Для владельцев бизнеса,</span> которые понимают:
											собственный сайт — это не расходы, а инвестиция в репутацию и рост
										</p>
									</div>
								</div>

								<div className="bg-amber-50 rounded-xl p-6">
									<p className="text-gray-800 font-medium">
										Если вы узнали себя в этих описаниях — давайте создадим сайт,
										который станет вашим лучшим бизнес-партнёром.
									</p>
								</div>
							</div>
						</div>
					</motion.div>
					<div className="flex gap-4 justify-center mt-12">
          <motion.button
            onClick={handleBackToCases}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
          >
            Все кейсы
          </motion.button>
        </div>
				</div>
			</section>
		</div>
	);
};

export default Photographer;