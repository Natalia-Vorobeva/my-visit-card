import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Добавляем useNavigate
import { motion, AnimatePresence } from 'framer-motion';
import {
	Palette, Layout, Moon, Sun, Zap, Code,
	Smartphone, Globe, CheckCircle, ArrowRight,
	ExternalLink, Eye, Sparkles, Layers,
	Check, Copy, Type, Bold, Italic,
	Heart, Rocket,
	Code2, Cloud, Coffee, Gamepad2, Brain, PaintBucket
} from 'lucide-react';

const Designer = () => {
	const [theme, setTheme] = useState('dark');
	const [activeTab, setActiveTab] = useState('demo');
	const [selectedTech, setSelectedTech] = useState(null);
	const [currentDesignStyle, setCurrentDesignStyle] = useState('minimal');
	const [copiedColor, setCopiedColor] = useState(null);
	const [activeFont, setActiveFont] = useState('inter');
	const [buttonStates, setButtonStates] = useState({
		primary: false,
		secondary: false,
		tertiary: false
	});
	const [selectedCard, setSelectedCard] = useState(null);
	const [fontWeight, setFontWeight] = useState('normal');
	const [fontStyle, setFontStyle] = useState('normal');
	const [activeColorPalette, setActiveColorPalette] = useState('primary');
	const [activeAvatar, setActiveAvatar] = useState(null);

	const navigate = useNavigate();

	const [mockupDesigns, setMockupDesigns] = useState([
		{ id: 1, type: 'desktop', label: 'Десктоп', icon: Layout, active: true },
		{ id: 2, type: 'tablet', label: 'Планшет', icon: Smartphone, active: false },
		{ id: 3, type: 'mobile', label: 'Мобильный', icon: Globe, active: false },
	]);

	const tabs = [
		{ id: 'demo', label: 'Демо', icon: Eye },
		{ id: 'tech', label: 'Технологии', icon: Code },
		{ id: 'design', label: 'Дизайн', icon: Palette },
	];

	useEffect(() => {
		// Немедленная прокрутка вверх
		window.scrollTo(0, 0);

		// Страховка через короткий таймаут
		const timer = setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'auto' });
		}, 10);

		return () => clearTimeout(timer);
	}, []);

	// Обработчик для кнопки "Все кейсы"
	const handleBackToCases = (e) => {
		e.preventDefault();
		// Используем navigate для быстрого перехода
		navigate('/', {
			state: { scrollToSection: 'cases' },
			replace: true
		});
	};

	const colorPalettes = {
		primary: {
			name: 'Primary',
			colors: ['#8B5CF6', '#EC4899'],
			description: 'Основные брендовые цвета'
		},
		dark: {
			name: 'Dark Theme',
			colors: ['#1F2937', '#111827'],
			description: 'Темная тема'
		},
		light: {
			name: 'Light Theme',
			colors: ['#F9FAFB', '#FFFFFF'],
			description: 'Светлая тема'
		},
		accent: {
			name: 'Accent',
			colors: ['#06B6D4', '#10B981'],
			description: 'Акцентные цвета'
		}
	};
	const avatarList = [
		{ emoji: '👨‍💻', label: 'Разработчик', color: 'from-blue-500 to-purple-500' },
		{ emoji: '🎨', label: 'Дизайнер', color: 'from-pink-500 to-rose-500' },
		{ emoji: '🚀', label: 'Проекты', color: 'from-orange-500 to-red-500' },
		{ emoji: '🎵', label: 'Музыка', color: 'from-green-500 to-emerald-500' },
		{ emoji: '📸', label: 'Фото', color: 'from-yellow-500 to-amber-500' },
		{ emoji: '🧠', label: 'ИИ', color: 'from-indigo-500 to-violet-500' },
		{ emoji: '☕️', label: 'Кофе', color: 'from-brown-500 to-amber-800' },
		{ emoji: '🎮', label: 'Геймер', color: 'from-purple-500 to-fuchsia-500' },
	];

	// Аватарки с иконками
	const iconAvatars = [
		{ icon: Code2, label: 'Код', color: 'from-blue-400 to-cyan-400' },
		{ icon: PaintBucket, label: 'Дизайн', color: 'from-purple-400 to-pink-400' },
		{ icon: Rocket, label: 'Запуск', color: 'from-orange-400 to-red-400' },
		{ icon: Brain, label: 'AI', color: 'from-indigo-400 to-violet-400' },
		{ icon: Cloud, label: 'Облако', color: 'from-sky-400 to-blue-400' },
		{ icon: Coffee, label: 'Кофе', color: 'from-amber-400 to-orange-400' },
		{ icon: Gamepad2, label: 'Игры', color: 'from-green-400 to-emerald-400' },
		{ icon: Heart, label: 'Любимое', color: 'from-rose-400 to-pink-400' },
	];

	const themeColors = {
		light: {
			bg: 'bg-gradient-to-br from-gray-50 to-gray-100',
			card: 'bg-white',
			text: 'text-gray-900',
			secondary: 'text-gray-600',
			accent: 'from-purple-500 to-pink-500',
			border: 'border-gray-200'
		},
		dark: {
			bg: 'bg-gradient-to-br from-gray-900 to-gray-800',
			card: 'bg-gray-800',
			text: 'text-white',
			secondary: 'text-gray-300',
			accent: 'from-purple-400 to-pink-400',
			border: 'border-gray-700'
		}
	};

	const copyToClipboard = (color) => {
		navigator.clipboard.writeText(color);
		setCopiedColor(color);
		setTimeout(() => setCopiedColor(null), 2000);
	};

	// Функция для нажатия кнопок
	const handleButtonClick = (type) => {
		setButtonStates(prev => ({ ...prev, [type]: true }));
		setTimeout(() => {
			setButtonStates(prev => ({ ...prev, [type]: false }));
		}, 1000);
	};

	const currentTheme = themeColors[theme];

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	// Получаем активное устройство
	const activeDevice = mockupDesigns.find(device => device.active)?.type || 'desktop';

	// Количество проектов в зависимости от устройства
	const getProjectsCount = () => {
		switch (activeDevice) {
			case 'desktop': return 6;
			case 'tablet': return 4;
			case 'mobile': return 2;
			default: return 6;
		}
	};

	// Колонки в сетке в зависимости от устройства
	const getGridColumns = () => {
		switch (activeDevice) {
			case 'desktop': return 'grid-cols-3';
			case 'tablet': return 'grid-cols-2';
			case 'mobile': return 'grid-cols-1';
			default: return 'grid-cols-3';
		}
	};

	return (
		<div className={`min-h-screen transition-colors duration-300 ${currentTheme.bg} ${currentTheme.text}`}>
			<div className="pt-20">
				<div className="max-w-7xl mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
						<div>
							{/* Заменяем Link на обработчик */}
							<motion.div
								whileHover={{ x: -5 }}
								onClick={handleBackToCases}
								className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4 cursor-pointer"
							>
								<ArrowRight className="w-4 h-4 rotate-180" />
								<span className="font-medium">Все кейсы</span>
							</motion.div>



							<Link to="/" onClick={() => {
								// Переходим на главную и сразу скроллим к #cases
								if (window.location.pathname !== '/') {
									window.location.href = '/#cases';
								} else {
									const casesSection = document.getElementById('cases');
									if (casesSection) casesSection.scrollIntoView({ behavior: 'smooth' });
								}
							}}>
							</Link>

							<div className="flex items-center gap-3 mb-2">
								<div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
									<Palette className="w-5 h-5 text-white" />
								</div>
								<div>
									<h1 className="text-2xl md:text-3xl font-bold">My Visit Card</h1>
									<p className={`text-sm ${currentTheme.secondary}`}>Живая демонстрация адаптивного дизайна с темной/светлой темой</p>
								</div>
							</div>
						</div>

						{/* Переключатель темы */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={toggleTheme}
							className={`flex items-center gap-2 px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} transition-colors`}
						>
							{theme === 'dark' ? (
								<>
									<Sun className="w-4 h-4" />
									<span className="text-sm">Светлая тема</span>
								</>
							) : (
								<>
									<Moon className="w-4 h-4" />
									<span className="text-sm">Темная тема</span>
								</>
							)}
						</motion.button>
					</div>

					{/* Основной контент - одна колонка */}
					<div className="grid lg:grid-cols-3 gap-6">
						{/* Левая панель - навигация и опции */}
						<div className={`rounded-2xl p-6 ${currentTheme.card} border ${currentTheme.border} shadow-lg`}>
							<div className="mb-6">
								<h2 className="text-lg font-bold mb-4">Демонстрация</h2>
								<div className="space-y-2">
									{tabs.map((tab) => (
										<motion.button
											key={tab.id}
											whileHover={{ x: 5 }}
											onClick={() => setActiveTab(tab.id)}
											className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === tab.id
												? `bg-gradient-to-r ${currentTheme.accent} text-white`
												: `hover:bg-gray-100 dark:hover:bg-gray-700 ${currentTheme.secondary}`
												}`}
										>
											<tab.icon className="w-4 h-4" />
											<span className="font-medium">{tab.label}</span>
											{activeTab === tab.id && (
												<ArrowRight className="w-4 h-4 ml-auto" />
											)}
										</motion.button>
									))}
								</div>
							</div>

							<div className="mb-6">
								<div className="flex items-center justify-between mb-3">
									<h3 className="font-bold">Устройства</h3>
									<div className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-500">
										{mockupDesigns.find(d => d.active)?.label}
									</div>
								</div>
								<div className="grid grid-cols-3 gap-2">
									{mockupDesigns.map((device) => (
										<motion.button
											key={device.id}
											whileHover={{ y: -2 }}
											whileTap={{ scale: 0.95 }}
											onClick={() => {
												setMockupDesigns(prev => prev.map(d => ({
													...d,
													active: d.id === device.id
												})));
											}}
											className={`flex flex-col items-center p-3 rounded-lg transition-all ${device.active
												? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-300/30'
												: `hover:bg-gray-100 dark:hover:bg-gray-700 ${currentTheme.secondary}`
												}`}
										>
											<device.icon className={`w-5 h-5 mb-1 ${device.active ? 'text-purple-500' : ''}`} />
											<span className={`text-xs ${device.active ? 'text-purple-500 font-medium' : ''}`}>
												{device.label}
											</span>
										</motion.button>
									))}
								</div>
							</div>

							<div className="mb-6">
								<h3 className="font-bold mb-3">Элементы дизайна</h3>
								<div className="space-y-2">
									{[
										{ id: 'header', label: 'Шапка', active: false },
										{ id: 'hero', label: 'Герой-секция', active: true },
										{ id: 'projects', label: 'Проекты', active: true },
										{ id: 'contact', label: 'Контакты', active: false }
									].map((element) => (
										<motion.button
											key={element.id}
											whileHover={{ x: 5 }}
											className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${element.active
												? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400'
												: 'hover:bg-gray-100 dark:hover:bg-gray-700'
												}`}
										>
											<div className="flex items-center justify-between">
												<span>{element.label}</span>
												{element.active && (
													<div className="w-2 h-2 rounded-full bg-purple-500"></div>
												)}
											</div>
										</motion.button>
									))}
								</div>
							</div>

							<div className={`p-4 rounded-lg bg-gradient-to-r ${currentTheme.accent} bg-opacity-10`}>
								<h4 className="font-bold mb-2 flex items-center gap-2">
									<Sparkles className="w-4 h-4" />
									Особенности
								</h4>
								<ul className="space-y-2 text-sm">
									{[
										{ text: 'Адаптивный дизайн', active: true },
										{ text: 'Темная/светлая тема', active: true },
										{ text: 'Плавные анимации', active: true },
									].map((feature, index) => (
										<motion.li
											key={feature.text}
											initial={{ opacity: 0, x: -10 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 }}
											className="flex items-center gap-2"
										>
											{feature.active ? (
												<CheckCircle className="w-4 h-4 text-green-500" />
											) : (
												<div className="w-4 h-4 rounded-full border border-gray-300"></div>
											)}
											<span className={feature.active ? '' : 'opacity-50'}>{feature.text}</span>
										</motion.li>
									))}
								</ul>
							</div>
						</div>

						{/* Центральная панель - контент */}
						<div className="lg:col-span-2">
							<AnimatePresence mode="wait">
								{activeTab === 'demo' && (
									<motion.div
										key="demo"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										className={`rounded-2xl p-6 ${currentTheme.card} border ${currentTheme.border} shadow-lg h-full`}
									>
										<div className="flex items-center justify-between mb-6">
											<div>
												<h2 className="text-xl font-bold mb-2">Интерактивный макет</h2>
												<p className={`text-sm ${currentTheme.secondary}`}>
													Кликайте на элементы, чтобы увидеть взаимодействие
												</p>
											</div>
											<div className="flex items-center gap-4">
												<div className="flex gap-2">
													{['desktop', 'tablet', 'mobile'].map((size) => (
														<motion.button
															key={size}
															whileHover={{ scale: 1.1 }}
															whileTap={{ scale: 0.9 }}
															className={`w-8 h-8 rounded-lg flex items-center justify-center ${mockupDesigns.find(d => d.type === size)?.active
																? 'bg-purple-500 text-white'
																: 'bg-gray-100 dark:bg-gray-700'
																}`}
															onClick={() => {
																const device = mockupDesigns.find(d => d.type === size);
																if (device) {
																	setMockupDesigns(prev => prev.map(d => ({
																		...d,
																		active: d.type === size
																	})));
																}
															}}
														>
															{size === 'desktop' ? '💻' : size === 'tablet' ? '📱' : '📲'}
														</motion.button>
													))}
												</div>
												<div className="flex gap-2">
													<div className="w-3 h-3 rounded-full bg-red-400"></div>
													<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
													<div className="w-3 h-3 rounded-full bg-green-400"></div>
												</div>
											</div>
										</div>

										{/* Интерактивный макет */}
										<div className="relative h-[500px] rounded-xl overflow-hidden mb-6 border-2 border-purple-300/30">
											<div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
												{/* Панель инструментов */}
												<div className={`h-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border-b ${currentTheme.border} flex items-center px-4 justify-between`}>
													<div className="flex items-center gap-4">
														<div className="flex gap-1.5">
															<div className="w-3 h-3 rounded-full bg-red-400 cursor-pointer hover:opacity-80"></div>
															<div className="w-3 h-3 rounded-full bg-yellow-400 cursor-pointer hover:opacity-80"></div>
															<div className="w-3 h-3 rounded-full bg-green-400 cursor-pointer hover:opacity-80"></div>
														</div>
														<div className="text-sm font-medium opacity-75">misha-design.com</div>
													</div>
													<div className="flex items-center gap-3">
														<motion.button
															whileHover={{ scale: 1.1 }}
															className={`px-3 py-1 text-sm rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}
														>
															Schema
														</motion.button>
													</div>
												</div>

												{/* Основной контент */}
												<div className="p-8 overflow-y-auto h-[calc(100%-3rem)]">
													{/* Заголовок */}
													<div className="mb-8">
														<motion.div
															className={`h-8 w-64 mb-2 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}
															animate={{
																width: ['16rem', '18rem', '16rem']
															}}
															transition={{
																repeat: Infinity,
																duration: 3
															}}
														/>
														<div className="h-4 w-48 rounded bg-gradient-to-r from-purple-500/30 to-pink-500/30"></div>
													</div>

													{/* Секция Projects */}
													<div className="mb-8">
														<div className="flex items-center justify-between mb-4">
															<div>
																<h3 className="text-lg font-bold mb-1">Projects</h3>
																<p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
																	A selection of recent projects I've designed and developed.
																</p>
															</div>
															<div className="text-xs px-2 py-1 rounded bg-gradient-to-r from-purple-500/20 to-pink-500/20">
																{getProjectsCount()} projects
															</div>
														</div>

														{/* Сетка проектов */}
														<div className={`grid ${getGridColumns()} gap-4`}>
															{Array.from({ length: getProjectsCount() }, (_, i) => i + 1).map((project) => (
																<motion.div
																	key={project}
																	whileHover={{ scale: 1.05, y: -5 }}
																	className={`aspect-square rounded-lg cursor-pointer ${theme === 'dark'
																		? 'bg-gradient-to-br from-purple-900/40 to-pink-900/40 hover:from-purple-800/40 hover:to-pink-800/40'
																		: 'bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200'
																		} border ${currentTheme.border} flex flex-col items-center justify-center p-4`}
																>
																	<div className="text-2xl mb-2">🎨</div>
																	<div className={`text-center ${theme === 'dark' ? 'text-purple-300' : 'text-purple-600'}`}>
																		<div className="font-medium mb-1">Project {project}</div>
																		<div className="text-xs opacity-75">
																			{activeDevice === 'desktop' && 'UI/UX Design • 2024'}
																			{activeDevice === 'tablet' && 'UI/UX Design'}
																			{activeDevice === 'mobile' && 'Design'}
																		</div>
																	</div>
																</motion.div>
															))}
														</div>
													</div>

													{/* Пагинация - только для десктопа и планшета */}
													{activeDevice !== 'mobile' && (
														<div className="flex justify-center mt-8 gap-2">
															{[1, 2, 3].map((page) => (
																<motion.button
																	key={page}
																	whileHover={{ scale: 1.2 }}
																	whileTap={{ scale: 0.9 }}
																	className={`w-8 h-8 rounded-full flex items-center justify-center ${page === 1
																		? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
																		: theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
																		}`}
																>
																	{page}
																</motion.button>
															))}
														</div>
													)}
												</div>
											</div>
										</div>

										<div className="grid grid-cols-3 gap-4">
											<div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
												<div className="flex items-center gap-2 mb-2">
													<Code2 className="w-4 h-4" />
													<span className="font-medium">Javascript</span>
												</div>
												<p className="text-sm opacity-75">Полный дизайн в Figma с компонентами</p>
											</div>
											<div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
												<div className="flex items-center gap-2 mb-2">
													<Zap className="w-4 h-4" />
													<span className="font-medium">Анимации</span>
												</div>
												<p className="text-sm opacity-75">60fps анимации на Framer Motion</p>
											</div>
											<div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
												<div className="flex items-center gap-2 mb-2">
													<Smartphone className="w-4 h-4" />
													<span className="font-medium">Адаптив</span>
												</div>
												<p className="text-sm opacity-75">Полная адаптация под все устройства</p>
											</div>
										</div>
									</motion.div>
								)}

								{activeTab === 'tech' && (
									<motion.div
										key="tech"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										className={`rounded-2xl p-6 ${currentTheme.card} border ${currentTheme.border} shadow-lg h-full`}
									>
										<div className="flex items-center justify-between mb-6">
											<h2 className="text-xl font-bold">Технологический стек</h2>
											<div className="text-sm opacity-75">Выберите технологию для деталей</div>
										</div>

										<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
											{[
												{
													icon: Code,
													name: 'React',
													desc: 'Компоненты',
													color: 'from-blue-500 to-cyan-500',
													details: 'Hooks, Context, Router, Lazy Loading'
												},
												{
													icon: Layout,
													name: 'Tailwind',
													desc: 'Стилизация',
													color: 'from-teal-500 to-emerald-500',
													details: 'JIT, Dark Mode, Custom Config'
												},
												{
													icon: Sparkles,
													name: 'Framer',
													desc: 'Анимации',
													color: 'from-purple-500 to-pink-500',
													details: 'Springs, Gestures, Variants'
												},
												{
													icon: Layers,
													name: 'Vite',
													desc: 'Сборка',
													color: 'from-rose-500 to-orange-500',
													details: 'HMR, ESBuild, Plugin System'
												},
												{
													icon: Code2,
													name: 'JavaScript',
													desc: 'Язык',
													color: 'from-yellow-500 to-orange-500',
													details: 'ES6+, Async/Await, Modules, DOM API'
												},
												{
													icon: Globe,
													name: 'Vercel',
													desc: 'Хостинг',
													color: 'from-gray-500 to-black',
													details: 'Edge Functions, Analytics, CI/CD'
												},
											].map((tech, index) => (
												<motion.div
													key={tech.name}
													initial={{ opacity: 0, scale: 0.9 }}
													animate={{ opacity: 1, scale: 1 }}
													whileHover={{ scale: 1.05, y: -5 }}
													transition={{ delay: index * 0.1 }}
													className={`p-4 rounded-xl border ${currentTheme.border} hover:shadow-lg transition-all cursor-pointer ${selectedTech === tech.name ? 'ring-2 ring-purple-500' : ''}`}
													onClick={() => setSelectedTech(tech.name === selectedTech ? null : tech.name)}
												>
													<div className="flex items-center gap-3 mb-3">
														<div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center`}>
															<tech.icon className="w-6 h-6 text-white" />
														</div>
														<div>
															<div className="font-bold text-lg">{tech.name}</div>
															<div className="text-sm opacity-75">{tech.desc}</div>
														</div>
													</div>

													{selectedTech === tech.name && (
														<motion.div
															initial={{ opacity: 0, height: 0 }}
															animate={{ opacity: 1, height: 'auto' }}
															className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700"
														>
															<p className="text-sm opacity-75">{tech.details}</p>
															<motion.button
																whileHover={{ scale: 1.05 }}
																whileTap={{ scale: 0.95 }}
																className="mt-3 text-sm text-purple-500 hover:text-purple-600"
															>
																Подробнее →
															</motion.button>
														</motion.div>
													)}
												</motion.div>
											))}
										</div>


									</motion.div>
								)}

								{activeTab === 'design' && (
									<motion.div
										key="design"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										className={`rounded-2xl p-6 ${currentTheme.card} border ${currentTheme.border} shadow-lg h-full`}
									>
										<div className="flex items-center justify-between mb-6">
											<div>
												<h2 className="text-xl font-bold">Дизайн-система</h2>
												<p className={`text-sm ${currentTheme.secondary}`}>Интерактивные компоненты</p>
											</div>
											<div className="flex gap-2">
												<motion.button
													whileHover={{ scale: 1.05 }}
													whileTap={{ scale: 0.95 }}
													className={`px-3 py-1 text-sm rounded ${currentDesignStyle === 'minimal'
														? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
														: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
													onClick={() => setCurrentDesignStyle('minimal')}
												>
													Минимализм
												</motion.button>
												<motion.button
													whileHover={{ scale: 1.05 }}
													whileTap={{ scale: 0.95 }}
													className={`px-3 py-1 text-sm rounded ${currentDesignStyle === 'bold'
														? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
														: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
													onClick={() => setCurrentDesignStyle('bold')}
												>
													Яркий
												</motion.button>
											</div>
										</div>

										<div className="space-y-8">
											{/* Цветовые палитры */}
											<div>
												<div className="flex items-center justify-between mb-4">
													<h3 className="font-bold text-gray-900 dark:text-gray-100">Цветовые палитры</h3>
													{copiedColor && (
														<motion.div
															initial={{ opacity: 0, y: -10 }}
															animate={{ opacity: 1, y: 0 }}
															className="text-sm flex items-center gap-2 text-green-500 dark:text-green-400"
														>
															<Check className="w-4 h-4" />
															<span className="text-gray-900 dark:text-gray-100">Скопировано:</span>
															<span className="font-mono">{copiedColor}</span>
														</motion.div>
													)}
												</div>
												<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
													{[
														{ name: 'Primary', colors: ['#8B5CF6', '#EC4899'], desc: 'Основные цвета' },
														{ name: 'Dark', colors: ['#1F2937', '#111827'], desc: 'Темная тема' },
														{ name: 'Light', colors: ['#F9FAFB', '#FFFFFF'], desc: 'Светлая тема' },
														{ name: 'Accent', colors: ['#06B6D4', '#10B981'], desc: 'Акцентные' },
													].map((palette) => (
														<motion.div
															key={palette.name}
															whileHover={{ y: -5 }}
															whileTap={{ scale: 0.95 }}
															onClick={() => {
																copyToClipboard(palette.colors[0]);
																setActiveColorPalette(palette.name.toLowerCase());
															}}
															className={`text-center cursor-pointer group p-3 rounded-xl transition-all ${activeColorPalette === palette.name.toLowerCase()
																? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-900/20'
																: 'bg-white dark:bg-gray-800 hover:shadow-lg'
																} border ${currentTheme.border}`}
														>
															<div className="h-16 rounded-lg mb-3 overflow-hidden relative">
																<div
																	className="h-1/2 relative group-hover:brightness-110 transition-all"
																	style={{ backgroundColor: palette.colors[0] }}
																>
																	<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
																		<Copy className="w-4 h-4 text-white/90" />
																	</div>
																</div>
																<div
																	className="h-1/2"
																	style={{ backgroundColor: palette.colors[1] }}
																/>
															</div>
															<div className="font-semibold text-sm mb-1 text-gray-900 dark:text-gray-100">
																{palette.name}
															</div>
															<div className="text-xs mb-1 text-gray-700 dark:text-gray-300">
																{palette.desc}
															</div>
															<div className="text-xs text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
																<div className="w-2 h-2 rounded-full" style={{ backgroundColor: palette.colors[0] }} />
																<span className="font-mono">{palette.colors[0]}</span>
															</div>
														</motion.div>
													))}
												</div>
											</div>

											{/* Типографика */}
											<div>
												<div className="flex items-center justify-between mb-4">
													<h3 className="font-bold text-gray-900 dark:text-gray-100">Типографика</h3>
													<div className="flex gap-2">
														<motion.button
															whileHover={{ scale: 1.05 }}
															whileTap={{ scale: 0.95 }}
															onClick={() => setFontWeight(fontWeight === 'bold' ? 'normal' : 'bold')}
															className={`p-2 rounded-lg ${fontWeight === 'bold'
																? 'bg-purple-500 text-white'
																: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
																}`}
														>
															<Bold className="w-4 h-4" />
														</motion.button>
														<motion.button
															whileHover={{ scale: 1.05 }}
															whileTap={{ scale: 0.95 }}
															onClick={() => setFontStyle(fontStyle === 'italic' ? 'normal' : 'italic')}
															className={`p-2 rounded-lg ${fontStyle === 'italic'
																? 'bg-purple-500 text-white'
																: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
																}`}
														>
															<Italic className="w-4 h-4" />
														</motion.button>
													</div>
												</div>

												<div className="space-y-4">
													{[
														{
															name: 'Inter',
															style: 'sans-serif',
															weight: 'font-bold',
															preview: 'Пример текста на Inter',
															chars: 'Aa Bb Cc 123 !@#'
														},
														{
															name: 'Roboto',
															style: 'sans-serif',
															weight: 'font-medium',
															preview: 'Пример текста на Roboto',
															chars: 'Dd Ee Ff 456 #$%'
														},
														{
															name: 'Monospace',
															style: 'monospace',
															weight: 'font-normal',
															preview: 'Пример текста на Monospace',
															chars: 'Gg Hh Ii 789 &*()'
														},
													].map((font) => (
														<motion.div
															key={font.name}
															whileHover={{ scale: 1.01 }}
															whileTap={{ scale: 0.99 }}
															onClick={() => setActiveFont(font.name.toLowerCase())}
															className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${activeFont === font.name.toLowerCase()
																? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
																: `border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-400 bg-white dark:bg-gray-800`
																}`}
														>
															<div className="flex items-center justify-between mb-2">
																<div className="flex items-center gap-2">
																	<Type className="w-4 h-4 text-gray-700 dark:text-gray-300" />
																	<span className="font-medium text-gray-900 dark:text-gray-100">{font.name}</span>
																	<span className={`text-xs px-2 py-1 rounded ${theme === 'dark'
																		? 'bg-gray-700 text-gray-300'
																		: 'bg-gray-100 text-gray-700'
																		}`}>
																		{font.style}
																	</span>
																</div>
																{activeFont === font.name.toLowerCase() && (
																	<Check className="w-5 h-5 text-purple-500" />
																)}
															</div>
															<div
																className={`text-lg ${font.weight} ${fontWeight === 'bold' ? 'font-bold' : ''
																	} ${fontStyle === 'italic' ? 'italic' : ''
																	} ${activeFont === font.name.toLowerCase()
																		? 'text-purple-600 dark:text-purple-400'
																		: 'text-gray-900 dark:text-gray-100'
																	}`}
																style={{ fontFamily: font.name === 'Monospace' ? 'monospace' : 'sans-serif' }}
															>
																{font.preview}
															</div>
															<div className={`text-sm mt-1 ${activeFont === font.name.toLowerCase()
																? 'text-purple-500 dark:text-purple-400'
																: 'text-gray-600 dark:text-gray-400'
																}`}>
																{font.chars}
															</div>
														</motion.div>
													))}
												</div>
											</div>

											{/* Компоненты */}
											<div>
												<h3 className="font-bold mb-4 text-gray-500 dark:text-gray-300">Компоненты</h3>
												<div className="space-y-8">
													{/* Кнопки */}
													<div>
														<h4 className="font-medium mb-3 text-gray-500 dark:text-gray-200">Кнопки</h4>
														<div className="flex flex-wrap gap-4 items-center">
															<motion.button
																whileHover={{ scale: 1.05 }}
																whileTap={{ scale: 0.95 }}
																onClick={() => handleButtonClick('primary')}
																className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium relative overflow-hidden"
															>
																{buttonStates.primary ? '✓ Нажата!' : 'Основная кнопка'}
																{buttonStates.primary && (
																	<motion.div
																		className="absolute inset-0 bg-white/20"
																		initial={{ x: '-100%' }}
																		animate={{ x: '100%' }}
																		transition={{ duration: 1 }}
																	/>
																)}
															</motion.button>

															<motion.button
																whileHover={{ scale: 1.05 }}
																whileTap={{ scale: 0.95 }}
																onClick={() => handleButtonClick('secondary')}
																className="px-6 py-3 rounded-lg border-2 border-purple-500 text-purple-500 dark:text-purple-400 font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
															>
																{buttonStates.secondary ? '✓ Нажата!' : 'Вторичная кнопка'}
															</motion.button>

															<motion.button
																whileHover={{ scale: 1.05 }}
																whileTap={{ scale: 0.95 }}
																onClick={() => handleButtonClick('tertiary')}
																className={`px-6 py-3 rounded-lg font-medium transition-colors ${theme === 'dark'
																	? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
																	: 'bg-gray-100 text-gray-800 hover:bg-gray-200'
																	}`}
															>
																{buttonStates.tertiary ? '✓ Нажата!' : 'Третичная кнопка'}
															</motion.button>
														</div>
													</div>

													{/* Поле ввода */}
													<div>
														<h4 className="font-medium mb-3 text-gray-500 dark:text-gray-200">Поля ввода</h4>
														<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
															<div className={`p-4 rounded-lg border ${currentTheme.border} bg-white dark:bg-gray-800`}>
																<div className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Обычное поле</div>
																<input
																	type="text"
																	placeholder="Введите текст..."
																	className={`w-full px-4 py-2 rounded-lg border ${currentTheme.border} bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500`}
																/>
															</div>
															<div className={`p-4 rounded-lg border ${currentTheme.border} bg-white dark:bg-gray-800`}>
																<div className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Поле с ошибкой</div>
																<input
																	type="text"
																	placeholder="Ошибка ввода..."
																	className={`w-full px-4 py-2 rounded-lg border border-red-500 bg-transparent text-gray-900 dark:text-gray-100 placeholder-red-400 dark:placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-500`}
																/>
																<div className="text-sm text-red-500 dark:text-red-400 mt-1">Обязательное поле</div>
															</div>
														</div>
													</div>

													{/* Карточки */}
													<div>
														<h4 className="font-medium mb-3 text-gray-800 dark:text-gray-200">Карточки</h4>
														<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
															{[
																{
																	id: 1,
																	title: 'Карточка проекта',
																	desc: 'Hover для деталей',
																	icon: '🎨',
																	content: 'Детальная информация о проекте. Здесь может быть описание, используемые технологии, сроки реализации и результаты.'
																},
																{
																	id: 2,
																	title: 'Карточка услуги',
																	desc: 'Нажмите для выбора',
																	icon: '✨',
																	content: 'Описание услуги с указанием сроков, стоимости и условий. Можно добавить список преимуществ и отзывы клиентов.'
																},
															].map((card) => (
																<motion.div
																	key={card.id}
																	whileHover={{ y: -5 }}
																	whileTap={{ scale: 0.98 }}
																	onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
																	className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${selectedCard === card.id
																		? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
																		: `border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-400 bg-white dark:bg-gray-800`
																		}`}
																>
																	<div className="flex items-center gap-3 mb-2">
																		<div className="text-2xl">{card.icon}</div>
																		<div className="flex-1">
																			<div className="font-medium text-gray-900 dark:text-gray-100">{card.title}</div>
																			<div className={`text-sm text-gray-600 dark:text-gray-400`}>{card.desc}</div>
																		</div>
																		<ArrowRight className={`w-4 h-4 transition-transform ${selectedCard === card.id ? 'rotate-90 text-purple-500' : 'text-gray-400'
																			}`} />
																	</div>
																	{selectedCard === card.id && (
																		<motion.div
																			initial={{ opacity: 0, height: 0 }}
																			animate={{ opacity: 1, height: 'auto' }}
																			className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700"
																		>
																			<div className={`text-sm text-gray-700 dark:text-gray-300`}>
																				{card.content}
																			</div>
																		</motion.div>
																	)}
																</motion.div>
															))}
														</div>
													</div>

													{/* Аватарки с emojis */}
													<div>
														<div className="flex items-center justify-between mb-3">
															<h4 className="font-medium text-gray-800 dark:text-gray-200">Аватарки (Emojis)</h4>
															{activeAvatar && (
																<div className="text-sm text-purple-500 dark:text-purple-400">
																	Выбрано: {avatarList.find(a => a.emoji === activeAvatar)?.label}
																</div>
															)}
														</div>
														<div className="flex flex-wrap gap-4">
															{avatarList.map((avatar, index) => (
																<motion.div
																	key={index}
																	whileHover={{ scale: 1.1, rotate: 5 }}
																	whileTap={{ scale: 0.9 }}
																	onClick={() => setActiveAvatar(activeAvatar === avatar.emoji ? null : avatar.emoji)}
																	className={`flex flex-col items-center cursor-pointer ${activeAvatar === avatar.emoji ? 'ring-2 ring-purple-500 rounded-full p-1' : ''
																		}`}
																>
																	<div
																		className={`w-12 h-12 rounded-full bg-gradient-to-r ${avatar.color} flex items-center justify-center text-xl shadow-lg transition-transform`}
																	>
																		{avatar.emoji}
																	</div>
																	<div className={`text-xs mt-2 ${activeAvatar === avatar.emoji
																		? 'text-purple-600 dark:text-purple-400 font-medium'
																		: 'text-gray-600 dark:text-gray-400'
																		}`}>
																		{avatar.label}
																	</div>
																</motion.div>
															))}
														</div>
													</div>

													{/* Аватарки с иконками */}
													<div>
														<div className="flex items-center justify-between mb-3">
															<h4 className="font-medium text-gray-800 dark:text-gray-200">Аватарки (Иконки)</h4>
															<div className="text-xs text-gray-500 dark:text-gray-400">Lucide React Icons</div>
														</div>
														<div className="flex flex-wrap gap-4">
															{iconAvatars.map((avatar, index) => (
																<motion.div
																	key={index}
																	whileHover={{ scale: 1.1, rotate: 5 }}
																	whileTap={{ scale: 0.9 }}
																	className="flex flex-col items-center"
																>
																	<div
																		className={`w-12 h-12 rounded-full bg-gradient-to-r ${avatar.color} flex items-center justify-center shadow-lg transition-all hover:shadow-xl`}
																	>
																		<avatar.icon className="w-6 h-6 text-white" />
																	</div>
																	<div className="text-xs mt-2 text-gray-600 dark:text-gray-400">
																		{avatar.label}
																	</div>
																</motion.div>
															))}
														</div>
													</div>

													{/* Бейджи */}
													<div>
														<h4 className="font-medium mb-3 text-gray-800 dark:text-gray-200">Бейджи и теги</h4>
														<div className="flex flex-wrap gap-2">
															{[
																{ text: 'Новое', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
																{ text: 'Популярное', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
																{ text: 'Продано', color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' },
																{ text: 'Скидка', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
																{ text: 'Premium', color: 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 dark:from-yellow-900/30 dark:to-orange-900/30 dark:text-yellow-300' },
																{ text: 'AI', color: 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-300' },
																{ text: 'Beta', color: 'bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 dark:from-cyan-900/30 dark:to-blue-900/30 dark:text-cyan-300' },
																{ text: 'Pro', color: 'bg-gradient-to-r from-gray-800 to-black text-white dark:from-gray-700 dark:to-black dark:text-gray-200' },
															].map((badge, index) => (
																<motion.span
																	key={index}
																	whileHover={{ scale: 1.05 }}
																	whileTap={{ scale: 0.95 }}
																	className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer ${badge.color}`}
																>
																	{badge.text}
																</motion.span>
															))}
														</div>
													</div>
												</div>
											</div>
										</div>
									</motion.div>
								)}

							</AnimatePresence>

							{/* Footer внутри панели */}
							<div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
								<div className="text-sm opacity-75 max-w-md">
									{activeTab === 'demo' && 'Кликайте на элементы макета для взаимодействия'}
									{activeTab === 'tech' && 'Выбирайте технологии для просмотра деталей'}
									{activeTab === 'design' && 'Изучайте дизайн-систему и компоненты'}
								</div>
								<div className="flex gap-3">
									{/* Кнопка "Все кейсы" внизу тоже использует тот же обработчик */}
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={handleBackToCases}
										className="px-4 py-2 rounded-lg border border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
									>
										Все кейсы
									</motion.button>


									<Link to="/" onClick={() => {
										if (window.location.pathname !== '/') {
											window.location.href = '/#cases';
										} else {
											const casesSection = document.getElementById('cases');
											if (casesSection) casesSection.scrollIntoView({ behavior: 'smooth' });
										}
									}}>
										<motion.button
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className="px-4 py-2 rounded-lg border border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
										>
											Все кейсы
										</motion.button>
									</Link>
									<a
										href="https://my-portfolio-vorobeva.vercel.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<motion.button
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-shadow"
										>
											<ExternalLink className="w-4 h-4" />
											<span>Портфолио</span>
										</motion.button>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Индикатор темы */}
					<div className="fixed bottom-6 right-6 z-50">
						<div className={`px-4 py-2 rounded-full backdrop-blur-sm ${theme === 'dark' ? 'bg-black/30' : 'bg-white/30'} border ${currentTheme.border}`}>
							<div className="flex items-center gap-2 text-sm">
								{theme === 'dark' ? (
									<>
										<Moon className="w-4 h-4" />
										<span>Тёмная тема активна</span>
									</>
								) : (
									<>
										<Sun className="w-4 h-4" />
										<span>Светлая тема активна</span>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export default Designer;