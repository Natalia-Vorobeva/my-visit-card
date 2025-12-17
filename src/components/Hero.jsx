// eslint-disable react-hooks/exhaustive-deps
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Smartphone, ExternalLink, Zap, Quote } from 'lucide-react';

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
		<section
			className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col pt-20 md:pt-24"
			style={{ minHeight: '100vh' }}
		>
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

			{/* Две равные горизонтальные части */}
			<div className="flex flex-col lg:flex-row flex-grow">

				{/* Левая часть - СЛОГАН */}			

				<div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6 lg:p-8 xl:p-12">
					<motion.div
						initial={{ opacity: 0, x: -30, scale: 0.95 }}
						animate={{ opacity: 1, x: 0, scale: 1 }}
						transition={{
							delay: 0.5,
							type: "spring",
							stiffness: 80,
							damping: 12
						}}
						className="relative w-full max-w-2xl group"
					>
						{/* Матовый стеклянный фон */}
						<div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/95 to-gray-900/90 rounded-3xl shadow-2xl shadow-black/30"></div>

						{/* Тонкая стеклянная текстура */}
						<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] rounded-3xl"></div>

						{/* Основной контейнер с матовым стеклом */}
						<div className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 border border-gray-700/50 shadow-2xl shadow-black/40 overflow-hidden">

							{/* Тонкое неоновое свечение по краям */}
							<motion.div
								className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur"
								initial={{ opacity: 0.2 }}
								animate={{
									opacity: [0.2, 0.4, 0.2],
								}}
								transition={{
									repeat: Infinity,
									duration: 4,
									ease: "easeInOut"
								}}
							/>

							{/* Текстура матового стекла */}
							{/* <div className="absolute inset-0 rounded-3xl" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")` }} ></div> */}

							{/* Главный текст с улучшенной контрастностью */}
							<h2 className="relative text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">

								{/* Первая строка: Собственный сайт — */}
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.7 }}
									className="mb-4 md:mb-6"
								>
									<span className="text-gray-100 block font-light tracking-wide drop-shadow-lg">
										Собственный сайт —
									</span>
								</motion.div>

								{/* Вторая строка: не расходы, а инвестиция (ГЛАВНЫЙ АКЦЕНТ) */}
								<motion.div
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.9, type: "spring" }}
									className="mb-4 md:mb-6 relative"
								>
									<div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 blur-xl rounded-lg opacity-60"></div>
									<span className="relative bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent block font-bold leading-[1.1] tracking-tight drop-shadow-2xl">
										не расходы, а инвестиция
									</span>
								</motion.div>

								{/* Третья строка: в репутацию и рост */}
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 1.1 }}
								>
									<span className="text-gray-200 block font-medium text-xl md:text-2xl lg:text-3xl tracking-wider">
										в репутацию и рост
									</span>
								</motion.div>
							</h2>

							{/* Подчеркивающий акцент */}
							<motion.div
								className="h-[2px] bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-cyan-500/60 rounded-full mt-6 md:mt-8"
								initial={{ width: 0 }}
								animate={{ width: "100%" }}
								transition={{ delay: 1.3, duration: 1.5, ease: "easeOut" }}
							/>

							{/* Улучшенная подпись с контрастом */}
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.5 }}
								className="mt-6 md:mt-8"
							>
								<div className="relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-4 md:p-5 border border-gray-700/30">
									{/* Декоративные элементы */}
									<div className="absolute -top-1 left-4 w-8 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
									<div className="absolute -bottom-1 right-4 w-8 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>

									<div className="flex flex-col items-center justify-center gap-2">
										<div className="flex items-center gap-3">
											<div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
											<div className="text-sm md:text-base text-gray-100 font-bold uppercase tracking-wider">
												Финансовый принцип digital-эпохи
											</div>
											<div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
										</div>
										<div className="text-xs text-gray-300 font-medium tracking-wide opacity-80">
											инвестиции в digital-инструменты окупаются многократно
										</div>
									</div>
								</div>
							</motion.div>

							{/* Угловые акценты */}
							<div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-60"></div>
							<div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"></div>
							<div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-60"></div>
							<div className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-60"></div>
						</div>
					</motion.div>
				</div>

				{/* Правая часть - ОСТАЛЬНОЙ КОНТЕНТ */}
				<div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 xl:p-12">
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="text-center w-full max-w-2xl"
					>
						{/* Главный заголовок */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="mb-6 md:mb-8"
						>
							<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
								<div className="space-y-1 md:space-y-2">
									<span className="text-gray-900 block font-light tracking-tight">За кулисами</span>
									<span className="text-gray-900 block font-bold border-l-4 border-blue-600 pl-3 md:pl-4">
										проектов и решений
									</span>
								</div>
							</h1>
						</motion.div>

						{/* Ссылки на проекты */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
							className="mb-6 md:mb-8"
						>
							<h3 className="text-xs sm:text-sm font-semibold text-gray-500 mb-2 md:mb-3">
								Примеры из моего портфолио:
							</h3>
							<div className="flex flex-wrap gap-2 justify-center">
								{portfolioLinks.map((project, index) => (
									<motion.a
										key={project.name}
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.8 + index * 0.1 }}
										whileHover={{ y: -2, scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className={`px-3 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-r ${project.color} text-white rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-1.5 hover:shadow-lg transition-all shadow-md`}
									>
										{project.name}
										<ExternalLink className="w-3 h-3" />
									</motion.a>
								))}
							</div>
						</motion.div>

						{/* Карточки технологий */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 }}
							className="w-full mb-4 md:mb-6"
						>
							<h3 className="text-xs sm:text-sm font-semibold text-gray-500 mb-3 md:mb-4 tracking-wider uppercase">
								Технологии в работе:
							</h3>
							<div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto">
								{[
									{
										name: 'React',
										icon: Code,
										color: 'from-blue-500 to-cyan-500',
										desc: 'Динамичные интерфейсы',
										benefit: 'Эффективность'
									},
									{
										name: 'Vite',
										icon: Zap,
										color: 'from-purple-500 to-pink-500',
										desc: 'Мгновенная загрузка',
										benefit: 'Скорость'
									},
									{
										name: 'Tailwind',
										icon: Palette,
										color: 'from-emerald-500 to-teal-500',
										desc: 'Адаптивный дизайн',
										benefit: 'Доступность'
									},
									{
										name: 'Framer',
										icon: Smartphone,
										color: 'from-orange-500 to-red-500',
										desc: 'Плавные анимации',
										benefit: 'Вовлечение'
									},
								].map((tech, index) => (
									<motion.div
										key={tech.name}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 1 + index * 0.1 }}
										whileHover={{ y: -3, scale: 1.05 }}
										className="relative group"
									>
										<div className={`bg-gradient-to-br ${tech.color} rounded-xl p-0.5 shadow-lg`}>
											<div className="bg-white rounded-xl p-2 sm:p-3 text-center">
												<div className="flex justify-center mb-1 sm:mb-2">
													<div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${tech.color} bg-opacity-10`}>
														<tech.icon className="w-4 h-4 sm:w-5 sm:h-5" />
													</div>
												</div>
												<div className="font-bold text-gray-900 text-sm mb-0.5 sm:mb-1">{tech.name}</div>
												<div className="text-xs text-gray-600 mb-1">{tech.desc}</div>
												<div className="text-xs font-semibold px-1.5 py-0.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 inline-block">
													{tech.benefit} ↑
												</div>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Индикатор скролла */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.5 }}
							className="mt-2 md:mt-4"
						>
							<div className="text-xs text-gray-500 mb-1">Исследовать кейсы</div>
							<div className="flex flex-col items-center space-y-0.5">
								{[0, 1, 2].map((i) => (
									<motion.div
										key={i}
										animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
										transition={{
											repeat: Infinity,
											duration: 1.2,
											delay: i * 0.15,
										}}
										className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
									/>
								))}
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;