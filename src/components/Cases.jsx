import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Palette, Brain, ArrowRight, ArrowUpRight, Briefcase, Check, Layers, Sparkles, User, Zap, Heart, ChevronRight, ExternalLink, Code2, Scissors, Palette as PaletteIcon, Earth, Building2, Globe, Activity } from 'lucide-react';

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
			metrics: ["100% адаптив", "Автоматизация"],
			businessValue: "Увеличение конверсии и автоматизация записи"
		},
		{
			id: 2,
			title: "My Visit Card Demo",
			subtitle: "Интерактивная демонстрация адаптивного дизайна",
			description: "Живая демонстрация адаптивной визитки с переключением тем, интерактивными компонентами и дизайн-системой.",
			path: "/cases/designer",
			icon: Palette,
			color: "from-indigo-400 to-purple-500",
			bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
			metrics: ["Адаптивность", "2 темы", "Дизайн-система", "Интерактивность"],
			businessValue: "Наглядная демонстрация технических навыков"
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
			metrics: ["Безопасность", "Конфиденциальность"],
			businessValue: "Автоматизация и повышение доверия клиентов"
		},
		{
			id: 4,
			title: "Личный кабинет",
			subtitle: "Демо для онлайн-сервиса",
			description: "Полноценная система управления заказами и клиентами с аналитикой и уведомлениями.",
			path: "/client-account-demo",
			icon: User,
			color: "from-amber-400 to-yellow-500",
			bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
			metrics: ["Управление", "Сообщения", "Аналитика"],
			businessValue: "Автоматизация работы с клиентами"
		},
		// {
		// 	id: 2,
		// 	title: "Сайт-визитка в официальном стиле",
		// 	description: "Официальный сайт-визитка дипломата с мультиязычной поддержкой (русский/английский/французский), адаптивным дизайном, формой обратной связи и строгим корпоративным стилем",
		// 	icon: <FaGem />,
		// 	tech: ["ReactJS", "Vite"],
		// 	// link: "#",
		// 	demo: "https://officialstyle.vercel.app/"
		// },	

		// {
		// 	id: 6,
		// 	title: "Варианты слайдеров для сайта",
		// 	description: "Варианты слайдеров для сайта",
		// 	icon: <FaHands />,
		// 	tech: ["Swiper", "Embla", "Ligthbox", "Splide"],
		// 	demo: "https://natalia-vorobeva.github.io/carousels/"
		// },	
		
		{
			id: 5,
			title: "Веб-компоненты",
			subtitle: "Готовые решения для вашего сайта",
			description: "Коллекция интерактивных компонентов и слайдеров",
			path: null,
			icon: Layers,
			color: "from-blue-400 to-cyan-500",
			bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
			metrics: ["Слайдеры", "Анимации", "Готовые решения"],
			businessValue: "Экономия времени на разработку",
			projects: [
				{
					title: "Презентация слайдеров",
					url: "https://carousels-portfolio.vercel.app/",
					description: "7 типов интерактивных слайдеров с анимациями",
					features: ["7 типов слайдеров", "Адаптивность", "Плавные анимации"],
					icon: Layers,
					color: "from-blue-400 to-cyan-400"
				},
				{
					title: "Мировой дашборд новостей",
					url: "https://d3-portfolio.vercel.app/",
					description: "7 типов интерактивных слайдеров с анимациями",
					features: ["Агрегация новостей из множества источников",
						"Интерактивная визуализация с D3.js",
						"Фильтрация по регионам и категориям",
						"Адаптивный дизайн для всех устройств"],
					icon: Activity,
					color: "from-blue-600 to-cyan-800"
				},
			]
		},
		{
			id: 6,
			title: "Услуги красоты",
			subtitle: "Сайты для мастеров индустрии красоты",
			description: "Специализированные решения для мастеров индустрии красоты",
			path: null,
			icon: Sparkles,
			color: "from-pink-400 to-purple-500",
			bgColor: "bg-gradient-to-br from-pink-50 to-purple-50",
			metrics: ["Галерея", "Услуги", "Запись онлайн"],
			businessValue: "Профессиональное онлайн-присутствие",
			projects: [
				{
					title: "Сайт мастера парикмахера",
					url: "https://hairdresser-portfolio.vercel.app/",
					description: "Бизнес-сайт с галереей и записью",
					features: ["Галерея работ", "Онлайн-запись", "Портфолио"],
					icon: Scissors,
					color: "from-rose-400 to-pink-400"
				},
				{
					title: "Сайт мастера маникюра",
					url: "https://natalia-vorobeva.github.io/business_card_manicure/",
					description: "Сайт с категориями услуг и фильтрацией",
					features: ["Категории услуг", "Фильтрация", "Быстрая загрузка"],
					icon: Sparkles,
					color: "from-fuchsia-400 to-purple-400"
				},
				{
					title: "Сайт мастера шугаринга",
					url: "https://natalia-vorobeva.github.io/business_card_sugaring/",
					description: "Специализированный сайт для мастера шугаринга",
					features: ["Прайс-лист", "Галерея работ", "Консультация"],
					icon: PaletteIcon,
					color: "from-violet-400 to-indigo-400"
				}
			]
		},
		{
			id: 7,
			title: "Официальный стиль",
			subtitle: "Государственные и корпоративные проекты",
			description: "Разработка веб-ресурсов для государственных учреждений и крупных корпораций с соблюдением официального стиля, корпоративных стандартов и требований к безопасности",
			path: null,
			icon: Building2,
			color: "text-blue-600",
			bgColor: "bg-blue-50",
			metrics: ["Соблюдение госстандартов", "Поддержка 3+ языков", "Доступность WCAG 2.1"],
			businessValue: "Укрепление официального имиджа и повышение уровня доверия со стороны клиентов и партнеров",
			projects: [				
				{
			title: "Сайт в официальном стиле",
			url: "https://officialstyle.vercel.app/",
			description: "Официальный сайт-визитка дипломата с мультиязычной поддержкой (русский/английский/французский), адаптивным дизайном и строгим корпоративным стилем.",
			features: [
				"Многоязычный интерфейс (RU/EN/FR)",
				"Полностью адаптивный дизайн",
				"Форма обратной связи",
				"Оптимизированная производительность",
				"Соблюдение официального стиля"
			],
			icon: Globe,
			color: "from-blue-400 to-cyan-400"
		}
			]
		},
		{
			id: 8,
			title: "Фитнес-тренер",
			subtitle: "Планируется",
			description: "Сайт с расписанием тренировок, онлайн-записью и программой питания.",
			path: null,
			icon: Zap,
			color: "from-green-400 to-emerald-500",
			bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
			metrics: ["Расписание", "Онлайн-запись", "Программы"],
			businessValue: "Автоматизация записи на тренировки",
			planned: true
		},
		{
			id: 9,
			title: "Кондитерская",
			subtitle: "Планируется",
			description: "Сайт с каталогом десертов, онлайн-заказом и калькулятором стоимости.",
			path: null,
			icon: Heart,
			color: "from-rose-400 to-red-500",
			bgColor: "bg-gradient-to-br from-rose-50 to-red-50",
			metrics: ["Каталог", "Онлайн-заказ", "Калькулятор"],
			businessValue: "Увеличение онлайн-продаж десертов",
			planned: true
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
						Возьмите готовый вариант или понравившийся элемент
						<span>Можно комбинировать элементы из разных проектов!</span>
					</p>
				</motion.div>

				{/* Кейсы */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					{cases.map((caseItem, index) => (
						<motion.div
							key={caseItem.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ y: -5 }}
							className={`relative group ${caseItem.planned ? 'opacity-75' : ''}`}
						>
							{caseItem.path ? (
								<Link to={caseItem.path}>
									<CardContent caseItem={caseItem} />
								</Link>
							) : caseItem.projects ? (
								// Специальный дизайн для карточек с проектами
								<ProjectContainer caseItem={caseItem} />
							) : (
								<CardContent caseItem={caseItem} />
							)}

							{caseItem.planned && (
								<div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent rounded-2xl flex items-start justify-left">
									<span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
										В планах
									</span>
								</div>
							)}
						</motion.div>
					))}
				</div>
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
			</div>
		</section>
	);
};

// Выносим содержимое карточки в отдельный компонент
const CardContent = ({ caseItem }) => (
	<div className={`${caseItem.bgColor} rounded-2xl p-6 h-full cursor-pointer border-2 border-transparent group-hover:border-blue-200 transition-all duration-300`}>
		{/* Метрики наверху */}
		{caseItem.metrics && caseItem.metrics.length > 0 && (
			<div className="flex flex-wrap gap-2 mb-4">
				{caseItem.metrics.map((metric, idx) => (
					<span
						key={idx}
						className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold"
					>
						{metric}
					</span>
				))}
			</div>
		)}

		{/* Иконка */}
		<motion.div
			whileHover={{ rotate: 15, scale: 1.1 }}
			className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${caseItem.color} p-3 mb-4 flex items-center justify-center shadow-lg`}
		>
			<caseItem.icon className="w-7 h-7 text-white" />
		</motion.div>

		{/* Контент */}
		<h3 className="text-xl font-bold mb-2">{caseItem.title}</h3>
		{caseItem.subtitle && (
			<p className="text-blue-600 font-semibold text-sm mb-2">{caseItem.subtitle}</p>
		)}
		{caseItem.description && (
			<p className="text-gray-600 text-sm mb-4">{caseItem.description}</p>
		)}

		{/* Бизнес-ценность */}
		{caseItem.businessValue && (
			<div className="mt-4 pt-4 border-t border-gray-200">
				<div className="text-xs text-gray-500 mb-1">Бизнес-ценность:</div>
				<div className="font-semibold text-gray-800 text-sm">{caseItem.businessValue}</div>
			</div>
		)}

		{/* CTA */}
		{caseItem.path && (
			<motion.div
				whileHover={{ x: 3 }}
				className="flex items-center text-blue-600 font-semibold text-sm mt-4"
			>
				<span>Изучить детали</span>
				<ArrowUpRight className="w-4 h-4 ml-1" />
			</motion.div>
		)}
	</div>
);

// Специальный компонент для карточек с проектами
const ProjectContainer = ({ caseItem }) => (
	<div className={`${caseItem.bgColor} rounded-2xl p-6 h-full border-2 border-transparent group-hover:border-blue-200 transition-all duration-300`}>
		{/* Заголовок категории */}
		<div className="flex items-start gap-3 mb-6">
			<motion.div
				whileHover={{ rotate: 15, scale: 1.1 }}
				className={`w-12 h-12 rounded-xl bg-gradient-to-br ${caseItem.color} p-3 flex items-center justify-center shadow-lg flex-shrink-0`}
			>
				<caseItem.icon className="w-6 h-6 text-white" />
			</motion.div>
			<div>
				<h3 className="text-xl font-bold">{caseItem.title}</h3>
				{caseItem.subtitle && (
					<p className="text-blue-600 font-semibold text-sm">{caseItem.subtitle}</p>
				)}
				{caseItem.description && (
					<p className="text-gray-600 text-sm mt-1">{caseItem.description}</p>
				)}
			</div>
		</div>

		{/* Метрики */}
		{caseItem.metrics && caseItem.metrics.length > 0 && (
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
		)}

		{/* Проекты */}
		<div className="space-y-4">
			{caseItem.projects.map((project, idx) => (
				<motion.a
					key={idx}
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					whileHover={{ x: 3 }}
					className="block group/project"
				>
					<div className="p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all">
						<div className="flex items-start gap-3">
							{project.icon && (
								<div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} p-2 flex items-center justify-center shadow-md flex-shrink-0`}>
									<project.icon className="w-5 h-5 text-white" />
								</div>
							)}
							<div className="flex-1 min-w-0">
								<div className="flex items-center justify-between mb-1">
									<h4 className="font-bold text-gray-900 truncate">{project.title}</h4>
									<ExternalLink className="w-4 h-4 text-gray-400 group-hover/project:text-blue-500 transition-colors flex-shrink-0" />
								</div>
								{project.description && (
									<p className="text-sm text-gray-600 mb-2">{project.description}</p>
								)}
								{project.features && project.features.length > 0 && project.features[0] && (
									<div className="flex flex-wrap gap-1">
										{project.features.map((feature, fIdx) => (
											feature && (
												<span
													key={fIdx}
													className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
												>
													{feature}
												</span>
											)
										))}
									</div>
								)}
							</div>
						</div>
					</div>
				</motion.a>
			))}
		</div>

		{/* Бизнес-ценность */}
		{caseItem.businessValue && (
			<div className="mt-6 pt-6 border-t border-gray-200">
				<div className="text-xs text-gray-500 mb-1">Бизнес-ценность:</div>
				<div className="font-semibold text-gray-800 text-sm">{caseItem.businessValue}</div>
			</div>
		)}

		{/* Общий CTA */}
		<div className="mt-6">
			<motion.div
				whileHover={{ x: 3 }}
				className="flex items-center text-blue-600 font-semibold text-sm"
			>
				<ChevronRight className="w-4 h-4 ml-1" />
			</motion.div>
		</div>
	</div>
);

export default Cases;