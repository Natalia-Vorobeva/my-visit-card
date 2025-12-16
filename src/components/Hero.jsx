import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code, Palette, Smartphone, ExternalLink, LayoutTemplate, Eye } from 'lucide-react';

const Hero = () => {
	const floatingShapes = [
		{ type: 'circle', x: -150, y: 50, size: 120, color: 'from-blue-400/20 to-purple-400/20', delay: 0 },
		{ type: 'square', x: 150, y: -30, size: 100, color: 'from-purple-400/20 to-pink-400/20', delay: 0.2 },
		{ type: 'triangle', x: -80, y: -100, size: 80, color: 'from-pink-400/20 to-rose-400/20', delay: 0.4 },
	];

	const portfolioLinks = [
		{ name: 'Парикмахер', url: 'https://natalia-vorobeva.github.io/business_card_hairdresser', color: 'from-pink-500 to-rose-500' },
		{ name: 'Маникюр', url: 'https://natalia-vorobeva.github.io/business_card_manicure/', color: 'from-purple-500 to-indigo-500' },
		{ name: 'Шугаринг', url: 'https://natalia-vorobeva.github.io/business_card_sugaring/', color: 'from-blue-500 to-cyan-500' },
		{ name: 'Галерея слайдеров', url: 'https://natalia-vorobeva.github.io/carousels/', color: 'from-emerald-500 to-teal-500' },
	];

	return (
		<section className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 pt-16">
			{/* Усиленные геометрические фигуры */}
			<div className="absolute inset-0 overflow-hidden">
				{floatingShapes.map((shape, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, x: shape.x, y: shape.y, rotate: 0 }}
						animate={{
							opacity: 0.4,
							x: shape.x + 50,
							y: shape.y + 30,
							rotate: 360,
						}}
						transition={{
							delay: shape.delay,
							duration: 20,
							repeat: Infinity,
							repeatType: "reverse",
							ease: "linear"
						}}
						className={`absolute bg-gradient-to-br ${shape.color} ${shape.type === 'circle' ? 'rounded-full' :
								shape.type === 'square' ? 'rounded-2xl' :
									'clip-triangle'
							}`}
						style={{
							width: shape.size,
							height: shape.size,
							left: `${30 + index * 20}%`,
							top: `${20 + index * 25}%`
						}}
					/>
				))}
			</div>

			<div className="max-w-6xl mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center"
				>
					{/* Верхний лейбл */}
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.2, type: "spring" }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-8"
					>
						<Sparkles className="w-4 h-4" />
						<span className="text-sm font-medium">Дополнение к портфолио</span>
					</motion.div>

					{/* Главный заголовок */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="text-4xl md:text-7xl font-bold mb-6"
					>
						<span className="text-gray-900">Больше проектов</span>
						<br />
						<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							и деталей
						</span>
					</motion.h1>

					{/* Подзаголовок */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
					>
						Здесь вы найдете дополнительные материалы, демо-шаблоны
						и детальные разборы моих проектов
					</motion.p>

					{/* Основные CTA кнопки */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
					>
						{/* <Link to="#cases">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-3 group"
              >
                <Eye className="w-5 h-5" />
                <span>Смотреть все работы</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link> */}

						{/* <Link to="#playground">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-400 hover:shadow-md transition-all flex items-center gap-3"
              >
                <LayoutTemplate className="w-5 h-5" />
                <span>Попробовать шаблоны</span>
              </motion.div>
            </Link> */}
					</motion.div>

					{/* Ссылки на конкретные проекты из портфолио */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
						className="mb-12"
					>
						<h3 className="text-sm font-semibold text-gray-500 mb-4">
							Примеры из моего портфолио:
						</h3>
						<div className="flex flex-wrap gap-3 justify-center">
							{portfolioLinks.map((project, index) => (
								<motion.a
									key={project.name}
									href={project.url}
									target="_blanc"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.6 + index * 0.1 }}
									whileHover={{ y: -3 }}
									className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:shadow-md transition-shadow`}
								>
									{project.name}
									<ExternalLink className="w-3 h-3" />
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* Усиленные карточки технологий */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.7 }}
						className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
					>
						{[
							{ name: 'React', icon: Code, color: 'from-blue-500 to-cyan-500' },
							{ name: 'Vite', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
							{ name: 'Tailwind', icon: Palette, color: 'from-emerald-500 to-teal-500' },
							{ name: 'Framer', icon: Smartphone, color: 'from-orange-500 to-red-500' },
						].map((tech, index) => (
							<motion.div
								key={tech.name}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.7 + index * 0.1 }}
								whileHover={{ y: -8, scale: 1.05 }}
								className="relative group"
							>
								<div className={`bg-gradient-to-br ${tech.color} rounded-xl p-1 shadow-lg`}>
									<div className="bg-white rounded-xl p-4 text-center">
										<div className="flex justify-center mb-3">
											<div className={`p-3 rounded-lg bg-gradient-to-br ${tech.color} bg-opacity-10`}>
												<tech.icon className="w-6 h-6" style={{ fill: `url(#gradient-${index})` }} />
											</div>
										</div>
										<div className="font-bold text-gray-800">{tech.name}</div>
										<div className="text-xs text-gray-500 mt-1">✓ В работе</div>
									</div>
								</div>
								{/* Градиент для иконки */}
								<svg width="0" height="0">
									<defs>
										<linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
											<stop offset="0%" stopColor="#3B82F6" />
											<stop offset="100%" stopColor="#8B5CF6" />
										</linearGradient>
									</defs>
								</svg>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>

			{/* Индикатор скролла */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
			>
				<div className="text-center">
					<div className="text-sm text-gray-500 mb-2">Листайте вниз</div>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ repeat: Infinity, duration: 1.5 }}
						className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center mx-auto"
					>
						<div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2" />
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;

// Добавить в CSS для треугольника


// Вставить в index.css