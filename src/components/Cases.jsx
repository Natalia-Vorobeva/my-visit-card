import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Palette, Brain, ArrowUpRight, Briefcase, Target, Users, User } from 'lucide-react';

const Cases = () => {
	const cases = [
		{
			id: 1,
			title: "Фотограф",
			subtitle: "Бизнес-сайт для фотографа",
			description: "Полный цикл: от концепции до реализации.",
			path: "/cases/photographer",
			icon: Camera,
			color: "from-amber-400 to-rose-500",
			bgColor: "bg-gradient-to-br from-amber-50 to-rose-50",
			metrics: ["+40% заказов", "95% скорость", "Адаптив"],
			businessValue: "Увеличение конверсии и автоматизация записи"
		},
		{
			id: 2,
			title: "Дизайнер",
			subtitle: "Портфолио для UX/UI специалиста",
			description: "Интерактивное портфолио с кейсами.",
			path: "/cases/designer",
			icon: Palette,
			color: "from-indigo-400 to-purple-500",
			bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
			metrics: ["3 клиента", "100% адаптив", "Тёмная тема"],
			businessValue: "Профессиональная презентация"
		},
		{
			id: 3,
			title: "Психолог",
			subtitle: "Сайт для специалиста",
			description: "Платформа для консультаций с защищённой записью и блогом.",
			path: "/cases/psychologist",
			icon: Brain,
			color: "from-emerald-400 to-cyan-500",
			bgColor: "bg-gradient-to-br from-emerald-50 to-cyan-50",
			metrics: ["+65% запросов", "89% конверсия", "Безопасность"],
			businessValue: "Автоматизация и повышение доверия клиентов"
		},
		// 	{
		//   id: 4,
		//   title: "Личный кабинет",
		//   subtitle: "Демо-версия для онлайн-сервиса",
		//   description: "Прототип личного кабинета с профилем, заказами и настройками.",
		//   path: "/personal-account-demo",
		//   icon: User,
		//   color: "from-amber-400 to-yellow-500",
		//   bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
		//   metrics: ["Профиль", "Заказы", "Настройки"],
		//   businessValue: "Удобное управление аккаунтом для клиентов"
		// },
		{
			id: 5,
			title: "Личный кабинет",
			subtitle: "Демо для онлайн-сервиса",
			description: "Полноценная система управления заказами и клиентами.",
			path: "/client-account-demo",
			icon: User,
			color: "from-amber-400 to-yellow-500",
			bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
			metrics: ["Управление", "Сообщения", "Аналитика"],
			businessValue: "Автоматизация работы с клиентами"
		}
	];

	const businessBenefits = [
		{
			icon: Briefcase,
			title: "Для бизнеса",
			items: ["Увеличение продаж", "Профессиональный имидж", "Автоматизация процессов"]
		},
		{
			icon: Target,
			title: "Для специалистов",
			items: ["Персональный бренд", "Привлечение клиентов", "Экономия времени"]
		},
		{
			icon: Users,
			title: "Для клиентов",
			items: ["Удобство использования", "Быстрая загрузка", "Мобильность"]
		}
	];

	return (
		<section id="cases" className="py-20 px-4 bg-white">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-4">
						<Briefcase className="w-4 h-4 text-blue-600" />
						<span className="text-sm font-medium text-blue-700">Бизнес-кейсы</span>
					</div>
					<h2 className="text-4xl font-bold mb-4">Проекты с измеримыми результатами</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Каждый проект решает конкретные бизнес-задачи и приносит измеримую пользу
					</p>
				</motion.div>

				{/* Преимущества для бизнеса */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className="mb-12"
				>
					<div className="grid md:grid-cols-3 gap-6">
						{businessBenefits.map((benefit, index) => (
							<motion.div
								key={benefit.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 + index * 0.1 }}
								whileHover={{ y: -5 }}
								className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6"
							>
								<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
									<benefit.icon className="w-6 h-6 text-white" />
								</div>
								<h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
								<ul className="space-y-2">
									{benefit.items.map((item, idx) => (
										<li key={idx} className="flex items-center text-sm text-gray-600">
											<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
											{item}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Кейсы */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{cases.map((caseItem, index) => (
						<motion.div
							key={caseItem.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							whileHover={{ y: -10 }}
							className="relative group"
						>
							<Link to={caseItem.path}>
								<div className={`${caseItem.bgColor} rounded-2xl p-8 h-full cursor-pointer border-2 border-transparent group-hover:border-blue-200 transition-all duration-300`}>
									{/* Метрики наверху */}
									<div className="flex flex-wrap gap-2 mb-6">
										{caseItem.metrics.map((metric, idx) => (
											<span
												key={idx}
												className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold"
											>
												{metric}
											</span>
										))}
									</div>

									{/* Иконка */}
									<motion.div
										whileHover={{ rotate: 15, scale: 1.1 }}
										className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${caseItem.color} p-4 mb-6 flex items-center justify-center shadow-lg`}
									>
										<caseItem.icon className="w-8 h-8 text-white" />
									</motion.div>

									{/* Контент */}
									<h3 className="text-2xl font-bold mb-2">{caseItem.title}</h3>
									<p className="text-blue-600 font-semibold mb-2">{caseItem.subtitle}</p>
									<p className="text-gray-600 mb-4">{caseItem.description}</p>

									{/* Бизнес-ценность */}
									<div className="mt-6 pt-6 border-t border-gray-200">
										<div className="text-sm text-gray-500 mb-2">Бизнес-ценность:</div>
										<div className="font-semibold text-gray-800">{caseItem.businessValue}</div>
									</div>

									{/* CTA */}
									<motion.div
										whileHover={{ x: 5 }}
										className="flex items-center text-primary font-semibold mt-6"
									>
										<span>Изучить детали</span>
										<ArrowUpRight className="w-5 h-5 ml-2" />
									</motion.div>
								</div>
							</Link>
						</motion.div>
					))}
				</div>

				{/* Деловой CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
				>
					<h3 className="text-2xl font-bold mb-4">Нужен сайт для вашего бизнеса?</h3>
					<p className="mb-6 opacity-90 max-w-2xl mx-auto">
						Создам современный сайт с фокусом на результативность и пользовательский опыт
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<motion.a
							href="#contact"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-all"
						>
							Обсудить проект
						</motion.a>
						<motion.a
							href="#playground"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 transition-all"
						>
							Посмотреть стоимость
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Cases;