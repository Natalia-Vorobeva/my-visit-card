import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Palette, Brain, ArrowRight, ArrowUpRight, Briefcase, Check, Layers, Sparkles, User, Zap, Heart, ExternalLink, Code2, Scissors, Palette as PaletteIcon, Earth, Building2, Globe, Activity } from 'lucide-react';

const Cases = () => {
	const cases = [
		{
			id: 5,
			title: "Компоненты",
			description: "Готовые решения",
			icon: Layers,
			color: "from-blue-400 to-cyan-500",
			bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
			metrics: ["Слайдеры", "Анимации"],
			badge: "Набор",
			projects: [
				{
					title: "Слайдеры",
					url: "https://carousels-portfolio.vercel.app/",
					icon: Layers,
					color: "from-blue-400 to-cyan-400"
				},
				{
					title: "Дашборд",
					url: "https://d3-portfolio.vercel.app/",
					icon: Activity,
					color: "from-blue-600 to-cyan-800"
				},
			]
		},
		{
			id: 6,
			title: "Красота",
			description: "Сайты для мастеров",
			icon: Sparkles,
			color: "from-pink-400 to-purple-500",
			bgColor: "bg-gradient-to-br from-pink-50 to-purple-50",
			metrics: ["Галерея", "Запись"],
			badge: "Категория",
			projects: [
				{
					title: "Парикмахер",
					url: "https://hairdresser-portfolio.vercel.app/",
					icon: Scissors,
					color: "from-rose-400 to-pink-400"
				},
				{
					title: "Маникюр",
					url: "https://natalia-vorobeva.github.io/business_card_manicure/",
					icon: Sparkles,
					color: "from-fuchsia-400 to-purple-400"
				},
				{
					title: "Шугаринг",
					url: "https://natalia-vorobeva.github.io/business_card_sugaring/",
					icon: PaletteIcon,
					color: "from-violet-400 to-indigo-400"
				}
			]
		},
		{
			id: 7,
			title: "Официальный",
			description: "Гос. и корпоративные",
			icon: Building2,
			color: "from-blue-400 to-indigo-500",
			bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
			metrics: ["3 языка", "WCAG 2.1"],
			badge: "Стиль",
			projects: [
				{
					title: "Дипломат",
					url: "https://officialstyle.vercel.app/",
					icon: Globe,
					color: "from-blue-400 to-cyan-400"
				}
			]
		},
		{
			id: 1,
			title: "Фотограф",
			description: "Бизнес-сайт",
			path: "/cases/photographer",
			icon: Camera,
			color: "from-amber-400 to-rose-500",
			bgColor: "bg-gradient-to-br from-amber-50 to-rose-50",
			metrics: ["Адаптив", "Автоматизация"],
			badge: "Кейс"
		},
		// {
		// 	id: 2,
		// 	title: "My Visit Card Demo",
		// 	description: "Адаптивный дизайн",
		// 	path: "/cases/designer",
		// 	icon: Palette,
		// 	color: "from-indigo-400 to-purple-500",
		// 	bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
		// 	metrics: ["2 темы", "Компоненты"],
		// 	badge: "Демо"
		// },
		{
			id: 3,
			title: "Психолог",
			description: "Сайт специалиста",
			path: "/cases/psychologist",
			icon: Brain,
			color: "from-emerald-400 to-cyan-500",
			bgColor: "bg-gradient-to-br from-emerald-50 to-cyan-50",
			metrics: ["Безопасность", "Блог"],
			badge: "Кейс"
		},
		
		// {
		// 	id: 8,
		// 	title: "Фитнес",
		// 	description: "Планируется",
		// 	icon: Zap,
		// 	color: "from-gray-400 to-gray-500",
		// 	bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
		// 	metrics: ["Расписание", "Запись"],
		// 	badge: "Скоро",
		// 	planned: true
		// }
	];

	return (
		<section id="cases" className="py-16 px-4 sm:px-6 bg-white">
			<div className="max-w-6xl mx-auto">
				{/* Заголовок */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-10 sm:mb-12"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-3 sm:mb-4">
						<Briefcase className="w-3.5 h-3.5 text-blue-600" />
						<span className="text-xs font-medium text-blue-700">Бизнес-кейсы</span>
					</div>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
						Проекты с результатами
					</h2>
					<p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
						Берите готовое или комбинируйте элементы из разных проектов
					</p>
				</motion.div>

				{/* Сетка карточек */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
					{cases.map((caseItem, index) => (
						<motion.div
							key={caseItem.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.05 }}
							whileHover={{ y: -3 }}
							className="relative group"
						>
							{caseItem.path ? (
								<Link to={caseItem.path} className="block h-full">
									<CompactCard caseItem={caseItem} />
								</Link>
							) : caseItem.projects ? (
								<CompactProjectCard caseItem={caseItem} />
							) : (
								<CompactCard caseItem={caseItem} />
							)}
						</motion.div>
					))}
				</div>

				{/* Примечание */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8"
				>
					<div className="flex flex-col md:flex-row items-center gap-5 md:gap-6">
						<div className="md:w-2/3">
							<h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Нужен индивидуальный проект?</h3>
							<p className="text-gray-700 text-sm sm:text-base mb-3 md:mb-4">
								Создам решение под ваши задачи. Можно использовать любые элементы из моих работ.
							</p>
							<ul className="space-y-1.5 text-gray-600 text-sm">
								<li className="flex items-center">
									<Check className="w-3.5 h-3.5 text-green-500 mr-2 flex-shrink-0" />
									<span>Добавить нужную функциональность</span>
								</li>
								<li className="flex items-center">
									<Check className="w-3.5 h-3.5 text-green-500 mr-2 flex-shrink-0" />
									<span>Адаптировать под ваш бренд</span>
								</li>
								<li className="flex items-center">
									<Check className="w-3.5 h-3.5 text-green-500 mr-2 flex-shrink-0" />
									<span>Уложиться в ваш бюджет</span>
								</li>
							</ul>
						</div>
						<div className="md:w-1/3 w-full mt-4 md:mt-0">
							<motion.a
								href="#contact"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}
								className="block w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
							>
								<span>Обсудить проект</span>
								<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
							</motion.a>
							<p className="text-center text-xs text-gray-500 mt-2">
								Отвечаю в течение 2 часов
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

// Компактная карточка для одиночных проектов
const CompactCard = ({ caseItem }) => (
	<div className={`${caseItem.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-5 h-full border border-transparent group-hover:border-blue-200 transition-all duration-300 ${caseItem.planned ? 'opacity-75' : ''}`}>
		{/* Бейдж */}
		<div className="flex justify-between items-start mb-3">
			<span className={`px-2 py-1 text-xs font-medium rounded-full ${caseItem.planned ? 'bg-gray-200 text-gray-700' : 'bg-white/80 text-gray-700'}`}>
				{caseItem.badge}
			</span>
			{caseItem.path && !caseItem.planned && (
				<ArrowUpRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
			)}
		</div>

		{/* Иконка */}
		<motion.div
			whileHover={{ rotate: 12, scale: 1.05 }}
			className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${caseItem.color} p-2.5 sm:p-3 mb-3 sm:mb-4 flex items-center justify-center shadow-md`}
		>
			<caseItem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
		</motion.div>

		{/* Контент */}
		<h3 className="font-bold text-base sm:text-lg mb-1 line-clamp-1">{caseItem.title}</h3>
		<p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">{caseItem.description}</p>

		{/* Метрики */}
		{caseItem.metrics && caseItem.metrics.length > 0 && (
			<div className="flex flex-wrap gap-1.5">
				{caseItem.metrics.slice(0, 2).map((metric, idx) => (
					<span
						key={idx}
						className="px-2 py-0.5 bg-white/80 rounded-full text-xs text-gray-700 font-medium"
					>
						{metric}
					</span>
				))}
				{caseItem.metrics.length > 2 && (
					<span className="px-2 py-0.5 bg-white/80 rounded-full text-xs text-gray-500 font-medium">
						+{caseItem.metrics.length - 2}
					</span>
				)}
			</div>
		)}

		{caseItem.planned && (
			<div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent rounded-xl sm:rounded-2xl flex items-end justify-center pb-4">
				<span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
					Скоро
				</span>
			</div>
		)}
	</div>
);

// Компактная карточка для проектов с несколькими ссылками
const CompactProjectCard = ({ caseItem }) => (
	<div className={`${caseItem.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-5 h-full border border-transparent group-hover:border-blue-200 transition-all duration-300`}>
		{/* Заголовок категории */}
		<div className="flex items-start gap-3 mb-4">
			<motion.div
				whileHover={{ rotate: 12, scale: 1.05 }}
				className={`w-10 h-10 rounded-xl bg-gradient-to-br ${caseItem.color} p-2.5 flex items-center justify-center shadow-md flex-shrink-0`}
			>
				<caseItem.icon className="w-5 h-5 text-white" />
			</motion.div>
			<div className="flex-1 min-w-0">
				<div className="flex justify-between items-start">
					<div>
						<h3 className="font-bold text-base sm:text-lg line-clamp-1">{caseItem.title}</h3>
						<p className="text-gray-600 text-xs sm:text-sm line-clamp-1">{caseItem.description}</p>
					</div>
					<span className="px-2 py-1 bg-white/80 text-gray-700 text-xs font-medium rounded-full ml-2 flex-shrink-0">
						{caseItem.badge}
					</span>
				</div>
			</div>
		</div>

		{/* Метрики */}
		{caseItem.metrics && caseItem.metrics.length > 0 && (
			<div className="flex flex-wrap gap-1.5 mb-4">
				{caseItem.metrics.slice(0, 3).map((metric, idx) => (
					<span
						key={idx}
						className="px-2 py-0.5 bg-white/80 rounded-full text-xs text-gray-700 font-medium"
					>
						{metric}
					</span>
				))}
			</div>
		)}

		{/* Список проектов */}
		<div className="space-y-2">
			{caseItem.projects.map((project, idx) => (
				<motion.a
					key={idx}
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					whileHover={{ x: 2 }}
					className="block group/project"
				>
					<div className="p-2.5 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all">
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-2 min-w-0">
								{project.icon && (
									<div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${project.color} p-1.5 flex items-center justify-center shadow-sm flex-shrink-0`}>
										<project.icon className="w-3.5 h-3.5 text-white" />
									</div>
								)}
								<span className="font-medium text-gray-900 text-sm truncate">
									{project.title}
								</span>
							</div>
							<ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover/project:text-blue-500 transition-colors flex-shrink-0" />
						</div>
					</div>
				</motion.a>
			))}
		</div>
	</div>
);

export default Cases;