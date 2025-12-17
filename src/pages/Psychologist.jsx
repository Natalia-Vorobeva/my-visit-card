import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom'; // Добавляем useNavigate
import { Brain, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const Psychologist = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// Немедленная прокрутка вверх
		window.scrollTo(0, 0);

		// Страховка через короткий таймаут
		const timer = setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'auto' });
		}, 10);

		return () => clearTimeout(timer);
	}, []);

	// Обработчик для навигации назад
	const handleBackToCases = (e) => {
		e.preventDefault();
		navigate('/', {
			state: { scrollToSection: 'cases' },
			replace: true
		});
	};

	return (
		<div className="pt-20">
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-emerald-50 to-cyan-50 py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="md:w-1/2">
							<motion.div
								onClick={handleBackToCases}
								whileHover={{ x: -5 }}
								className="inline-flex items-center text-blue-600 mb-6 cursor-pointer"
							>
								<ArrowLeft className="w-4 h-4 mr-2" />
								← Назад к проектам с измеримыми результатами
							</motion.div>
							<h1 className="text-5xl md:text-6xl font-bold mb-6">Персональный сайт для психолога-консультанта</h1>
							<p className="text-xl text-gray-700 mb-8">Доверительный и спокойный сайт для описания услуг, публикации статей и записи на консультации</p>
							<div className="flex flex-wrap gap-4">
								<span className="px-4 py-2 bg-white rounded-full shadow">React</span>
								<span className="px-4 py-2 bg-white rounded-full shadow">Tailwind CSS</span>
								<span className="px-4 py-2 bg-white rounded-full shadow">Express.js</span>
								<span className="px-4 py-2 bg-white rounded-full shadow">MongoDB</span>
							</div>
						</div>
						<div className="md:w-1/2">
							<div className="bg-white p-8 rounded-3xl shadow-2xl">
								<div className="aspect-video bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl flex items-center justify-center">
									<div className="text-8xl">🧠</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Client Needs */}
			<section className="py-20 px-4 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">Основные требования клиента</h2>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center p-6">
							<div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">🔒</div>
							<h3 className="font-bold text-lg mb-2">Конфиденциальность</h3>
							<p className="text-gray-600">Безопасная передача данных, SSL-сертификат, защита персональной информации</p>
						</div>

						<div className="text-center p-6">
							<div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">📝</div>
							<h3 className="font-bold text-lg mb-2">Простота записи</h3>
							<p className="text-gray-600">Интуитивная система бронирования сессий с напоминаниями</p>
						</div>

						<div className="text-center p-6">
							<div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">📚</div>
							<h3 className="font-bold text-lg mb-2">Образовательный контент</h3>
							<p className="text-gray-600">Блог со статьями, разделение по темам и категориям</p>
						</div>
					</div>
				</div>
			</section>

			{/* Solution Details */}
			<section className="py-20 px-4 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12">
						<div>
							<h2 className="text-3xl font-bold mb-6">Функции</h2>

							<div className="space-y-6">
								<div className="bg-white p-6 rounded-2xl shadow">
									<div className="flex items-center mb-3">
										<div className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center mr-4">1</div>
										<h3 className="font-bold text-lg">Защищённая форма обратной связи</h3>
									</div>
									<p className="text-gray-700">End-to-end шифрование сообщений, защита от спама через reCAPTCHA v3, уведомления в Telegram.</p>
								</div>

								<div className="bg-white p-6 rounded-2xl shadow">
									<div className="flex items-center mb-3">
										<div className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center mr-4">2</div>
										<h3 className="font-bold text-lg">Система бронирования</h3>
									</div>
									<p className="text-gray-700">Интеграция с Google Calendar, автоматические напоминания за 24 часа, отмена и перенос сессий.</p>
								</div>

								<div className="bg-white p-6 rounded-2xl shadow">
									<div className="flex items-center mb-3">
										<div className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center mr-4">3</div>
										<h3 className="font-bold text-lg">Админ-панель</h3>
									</div>
									<p className="text-gray-700">Управление расписанием, публикация статей, просмотр статистики посещений.</p>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-3xl font-bold mb-6">Технические особенности</h2>

							<div className="space-y-6">
								<div className="border-l-4 border-emerald-500 pl-6 py-4">
									<h3 className="font-bold text-lg mb-2">JWT-аутентификация</h3>
									<p className="text-gray-700">Безопасный доступ к админ-панели, автоматический logout при неактивности.</p>
								</div>

								<div className="border-l-4 border-emerald-500 pl-6 py-4">
									<h3 className="font-bold text-lg mb-2">REST API на Express.js</h3>
									<p className="text-gray-700">CRUD операции для статей, управление расписанием, обработка форм.</p>
								</div>

								<div className="border-l-4 border-emerald-500 pl-6 py-4">
									<h3 className="font-bold text-lg mb-2">MongoDB с шифрованием</h3>
									<p className="text-gray-700">База данных с encryption at rest, регулярные бэкапы, индексация для быстрого поиска.</p>
								</div>

								<div className="border-l-4 border-emerald-500 pl-6 py-4">
									<h3 className="font-bold text-lg mb-2">SSR для SEO</h3>
									<p className="text-gray-700">Серверный рендеринг для статей, мета-теги, sitemap.xml, robots.txt.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Design Philosophy */}
			<section className="py-20 px-4 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">Дизайн-концепция</h2>

					<div className="grid md:grid-cols-2 gap-8">
						<div className="p-8 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl">
							<h3 className="font-bold text-2xl mb-4">Цветовая палитра</h3>
							<div className="flex space-x-4 mb-6">
								<div className="w-12 h-12 bg-emerald-100 rounded-lg"></div>
								<div className="w-12 h-12 bg-emerald-200 rounded-lg"></div>
								<div className="w-12 h-12 bg-emerald-300 rounded-lg"></div>
								<div className="w-12 h-12 bg-cyan-100 rounded-lg"></div>
								<div className="w-12 h-12 bg-cyan-200 rounded-lg"></div>
							</div>
							<p className="text-gray-700">Спокойные оттенки зелёного и бирюзового, ассоциирующиеся с гармонией, ростом и доверием.</p>
						</div>

						<div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl">
							<h3 className="font-bold text-2xl mb-4">Типографика</h3>
							<div className="space-y-4 mb-6">
								<div>
									<p className="text-2xl font-serif text-gray-800">Заголовки: Playfair Display</p>
									<p className="text-sm text-gray-600">Элегантный шрифт с засечками</p>
								</div>
								<div>
									<p className="text-lg font-sans text-gray-800">Основной текст: Inter</p>
									<p className="text-sm text-gray-600">Читабельный sans-serif шрифт</p>
								</div>
							</div>
							<p className="text-gray-700">Оптимальный line-height (1.6), достаточный контраст, размер шрифта от 16px для комфортного чтения.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Results */}
			<section className="py-20 px-4 bg-emerald-50">
				<div className="max-w-4xl mx-auto text-center">
					<Link
						to="/"
						className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition"
					>
						На главную страницу
						<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
					</Link>
				</div>
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
			</section>
		</div>
	);
};

export default Psychologist;