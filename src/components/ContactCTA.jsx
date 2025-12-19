import { motion } from 'framer-motion';
import { Mail, MessageSquare, Calendar, ArrowRight, Check, AlertCircle, RefreshCw, Send, Info, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';


const ContactCTA = () => {
	// Конфигурация
	const CONFIG = {
		TELEGRAM_BOT_TOKEN: import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '',
		TELEGRAM_CHAT_ID: import.meta.env.VITE_TELEGRAM_CHAT_ID || '',
		DEMO_MODE: import.meta.env.VITE_DEMO_MODE === 'true' || !import.meta.env.VITE_TELEGRAM_BOT_TOKEN,
		CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || 'vorobjeva.natalia76@gmail.com',
		CONTACT_PHONE: import.meta.env.VITE_CONTACT_PHONE || '+7 (911) 208-04-79',
	};

	// Состояния формы
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [captcha, setCaptcha] = useState({ question: '', answer: 0, userAnswer: '' });
	const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false, message: '' });
	const [errors, setErrors] = useState({});
	const honeypotRef = useRef(null);
	const [formStartTime] = useState(Date.now());

	const isFormValid = formData.name && formData.email && formData.message;

	 const contactRef = useRef(null);
  const location = useLocation();

	// Обработчики изменения полей с очисткой ошибок
	const handleChange = (field, value) => {
		setFormData(prev => ({ ...prev, [field]: value }));

		// Очищаем ошибку для конкретного поля
		if (errors[field]) {
			setErrors(prev => {
				const newErrors = { ...prev };
				delete newErrors[field];
				return newErrors;
			});
		}
	};

	// Генерация капчи
	const generateCaptcha = () => {
		const operators = ['+', '-', '×'];
		const operator = operators[Math.floor(Math.random() * operators.length)];
		let num1, num2, answer;

		switch (operator) {
			case '+':
				num1 = Math.floor(Math.random() * 10) + 1;
				num2 = Math.floor(Math.random() * 10) + 1;
				answer = num1 + num2;
				break;
			case '-':
				num1 = Math.floor(Math.random() * 10) + 5;
				num2 = Math.floor(Math.random() * 5) + 1;
				answer = num1 - num2;
				break;
			case '×':
				num1 = Math.floor(Math.random() * 5) + 1;
				num2 = Math.floor(Math.random() * 5) + 1;
				answer = num1 * num2;
				break;
			default:
				num1 = 2;
				num2 = 3;
				answer = 5;
		}

		setCaptcha({
			question: `Сколько будет ${num1} ${operator} ${num2}?`,
			answer: answer,
			userAnswer: ''
		});
	};

	 useEffect(() => {
    // Если пришли с /contact, скроллим к форме
    if (location.pathname === '/' && document.referrer.includes('/contact')) {
      contactRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [location]);

	// Валидация email
	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};

	// Валидация формы
	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Имя обязательно';
		} else if (formData.name.trim().length < 2) {
			newErrors.name = 'Имя слишком короткое';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email обязателен';
		} else if (!validateEmail(formData.email)) {
			newErrors.email = 'Введите корректный email';
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Сообщение обязательно';
		} else if (formData.message.trim().length < 10) {
			newErrors.message = 'Сообщение слишком короткое (минимум 10 символов)';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	// Обработчик отправки формы
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setFormStatus({ loading: false, success: false, error: false, message: '' });

		// Проверка honeypot поля
		if (honeypotRef.current && honeypotRef.current.value) {
			setFormStatus({
				loading: false,
				success: false,
				error: true,
				message: 'Обнаружена подозрительная активность'
			});
			generateCaptcha();
			return;
		}

		// Проверка капчи
		const userAnswer = parseInt(captcha.userAnswer.trim());
		if (isNaN(userAnswer) || userAnswer !== captcha.answer) {
			setFormStatus({
				loading: false,
				success: false,
				error: true,
				message: '❌ Неверный ответ на капчу. Попробуйте еще раз.'
			});
			generateCaptcha();
			return;
		}

		// Проверка времени заполнения
		const formFillTime = Date.now() - formStartTime;
		if (formFillTime < 2000) {
			setFormStatus({
				loading: false,
				success: false,
				error: true,
				message: '⚠️ Форма заполнена слишком быстро'
			});
			generateCaptcha();
			return;
		}

		// Демо-режим
		if (CONFIG.DEMO_MODE) {
			setFormStatus({
				loading: true,
				success: false,
				error: false,
				message: '⏳ Демо-режим: имитация отправки...'
			});

			setTimeout(() => {
				setFormStatus({
					loading: false,
					success: true,
					error: false,
					message: `✅ Демо: Форма работает! Настройте Telegram бота в .env.local файле.\n\nТокен бота: ${CONFIG.TELEGRAM_BOT_TOKEN ? '✓ Установлен' : '✗ Отсутствует'}\nChat ID: ${CONFIG.TELEGRAM_CHAT_ID ? '✓ Установлен' : '✗ Отсутствует'}`
				});

				setFormData({ name: '', email: '', message: '' });
				generateCaptcha();

				setTimeout(() => {
					setFormStatus({ loading: false, success: false, error: false, message: '' });
				}, 8000);
			}, 1500);
			return;
		}

		// Реальная отправка в Telegram
		setFormStatus({
			loading: true,
			success: false,
			error: false,
			message: '⏳ Отправка в Telegram...'
		});

		try {
			const messageText = `
🎯 *НОВАЯ ЗАЯВКА С САЙТА-ВИЗИТКИ*

👤 *Имя:* ${formData.name}
📧 *Email:* \`${formData.email}\`
📝 *Сообщение:*
${formData.message}

📊 *Детали:*
🕐 ${new Date().toLocaleString('ru-RU')}
🌐 ${window.location.hostname}
✅ Капча пройдена
      `;

			const response = await fetch(`https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT_TOKEN}/sendMessage`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: CONFIG.TELEGRAM_CHAT_ID,
					text: messageText,
					parse_mode: 'Markdown',
				})
			});

			const result = await response.json();

			if (result.ok) {
				setFormStatus({
					loading: false,
					success: true,
					error: false,
					message: '✅ Заявка отправлена в Telegram! Я свяжусь с вами в ближайшее время.'
				});

				setFormData({ name: '', email: '', message: '' });
				generateCaptcha();

				setTimeout(() => {
					setFormStatus({ loading: false, success: false, error: false, message: '' });
				}, 5000);
			} else {
				throw new Error(result.description || 'Ошибка Telegram API');
			}
		} catch (error) {
			console.error('Ошибка отправки в Telegram:', error);
			let errorMessage = '❌ Ошибка отправки. ';

			if (error.message.includes('chat not found')) {
				errorMessage += 'Chat ID неверный. Проверьте .env.local файл.';
			} else if (error.message.includes('Not Found')) {
				errorMessage += 'Токен бота неверный. Проверьте .env.local файл.';
			} else if (error.message.includes('Network Error')) {
				errorMessage += 'Проблемы с сетью. Попробуйте использовать VPN.';
			} else {
				errorMessage += 'Попробуйте еще раз или свяжитесь другим способом.';
			}

			setFormStatus({
				loading: false,
				success: false,
				error: true,
				message: errorMessage
			});

			generateCaptcha();
		}
	};

	// Инициализация капчи
	useEffect(() => {
		generateCaptcha();
	}, []);

	const contactMethods = [
		{
			icon: Mail,
			title: "Email",
			details: "vorobjeva.natalia76@gmail.com",
			color: "from-blue-500 to-cyan-500",
			link: `mailto:${CONFIG.CONTACT_EMAIL}`
		},
		{
			icon: MessageSquare,
			title: "Telegram",
			details: "@vorobjevaa",
			color: "from-purple-500 to-pink-500",
			link: "https://t.me/vorobjevaa"
		},
		{
			icon: Calendar,
			title: "Консультация",
			details: "30 минут бесплатно",
			color: "from-emerald-500 to-teal-500",
			link: "https://t.me/vorobjevaa"
		}
	];

	return (
		<section ref={contactRef} className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold mb-4">Готовы обсудить ваш проект?</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Оставьте заявку, и я свяжусь с вами для обсуждения деталей
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Контактная информация */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div>
							<h3 className="text-2xl font-bold mb-6">Свяжитесь со мной</h3>
							<p className="text-gray-600 mb-8">
								Обсудим вашу задачу, подберём подходящее решение и составим план работы
							</p>
						</div>

						<div className="space-y-6">
							{contactMethods.map((method, index) => (
								<motion.a
									key={method.title}
									href={method.link}
									target="_blank"
									rel="noopener noreferrer"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ x: 5 }}
									className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
								>
									<div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0`}>
										<method.icon className="w-6 h-6 text-white" />
									</div>
									<div className="flex-grow">
										<h4 className="font-semibold">{method.title}</h4>
										<p className="text-gray-600 text-sm">{method.details}</p>
									</div>

								</motion.a>
							))}
						</div>

						{/* Дополнительная информация */}
						<div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
							<h4 className="font-bold text-lg mb-3">Что вы получите:</h4>
							<ul className="space-y-2">
								{[
									"Бесплатная консультация 30 минут",
									"Анализ вашей задачи и конкурентов",
									"Предложение по срокам и бюджету",
									"Примеры аналогичных проектов"
								].map((item, idx) => (
									<li key={idx} className="flex items-center text-sm text-gray-700">
										<div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
										{item}
									</li>
								))}
							</ul>
						</div>
					</motion.div>

					{/* Защищенная форма */}
					<motion.div
						initial={{ opacity: 0, x: 50, scale: 0.95 }}
						whileInView={{ opacity: 1, x: 0, scale: 1 }}
						viewport={{ once: true }}
						className="bg-white rounded-2xl shadow-2xl p-8 relative"
					>
						{/* Эффект свечения вокруг формы */}
						<div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl opacity-30 -z-10"></div>

						{/* Внутренняя подсветка сверху */}
						<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl"></div>

						<h3 className="text-2xl font-bold mb-2">Отправить сообщение</h3>
						<p className="text-gray-600 mb-6">Получите консультацию по вашему проекту в течение 24 часов</p>

						<form onSubmit={handleSubmit} className="space-y-6" noValidate>
							{/* Honeypot поле */}
							<div className="hidden">
								<input
									type="text"
									id="url"
									name="url"
									tabIndex="-1"
									autoComplete="off"
									ref={honeypotRef}
								/>
							</div>

							{/* Имя */}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Ваше имя *
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={(e) => handleChange('name', e.target.value)} // ← Изменено
									required
									className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.name ? 'border-red-500' :
										formData.name.length >= 2 ? 'border-green-500' : 'border-gray-300'
										}`}
									placeholder="Как к вам обращаться?"
								/>
								{errors.name && <span className="text-red-500 text-sm mt-1 block">{errors.name}</span>}
							</div>

							{/* Email */}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Email *
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={(e) => handleChange('email', e.target.value)} // ← Изменено
									required
									className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.email ? 'border-red-500' :
										validateEmail(formData.email) ? 'border-green-500' : 'border-gray-300'
										}`}
									placeholder="Для ответа на ваше сообщение"
								/>
								{errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
							</div>

							{/* Сообщение */}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Опишите ваш проект *
								</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={(e) => handleChange('message', e.target.value)} // ← Изменено
									required
									rows="5"
									className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.message ? 'border-red-500' :
										formData.message.length >= 10 ? 'border-green-500' : 'border-gray-300'
										}`}
									placeholder="Какие задачи должен решать сайт? Есть ли примеры, которые вам нравятся?"
								/>
								<div className="mt-2">
									{formData.message.length < 10 ? (
										<div className="text-sm text-gray-500">
											Минимум символов: <span className="font-semibold">{formData.message.length}/10</span>
										</div>
									) : (
										<div className="text-green-500 text-sm">✓ Сообщение достаточно длинное</div>
									)}
								</div>
								{errors.message && <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>}
							</div>

							{/* Капча */}
							<div className="captcha-section">
								<div className="flex justify-between items-center mb-4">
									<label className="text-lg font-bold text-gray-700">
										Подтвердите, что вы не робот *
									</label>
									<button
										type="button"
										onClick={generateCaptcha}
										disabled={formStatus.loading}
										className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-colors"
									>
										<RefreshCw className="w-4 h-4" /> Новая задача
									</button>
								</div>
								<div className="bg-gray-50 p-4 rounded-lg">
									<div className="flex items-center gap-4 mb-4">
										<span className="text-2xl">🧮</span>
										<span className="text-xl font-bold text-gray-800 font-mono">{captcha.question}</span>
									</div>
									<input
										type="text"
										placeholder="Введите ответ цифрами"
										value={captcha.userAnswer}
										onChange={(e) => setCaptcha({ ...captcha, userAnswer: e.target.value.replace(/[^0-9]/g, '') })}
										required
										disabled={formStatus.loading}
										pattern="[0-9]*"
										inputMode="numeric"
										maxLength="3"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
								</div>
							</div>

							{/* Согласие */}
							<div className="flex items-center text-sm text-gray-500">
								<input
									type="checkbox"
									required
									className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
								/>
								<span>Я согласен с обработкой персональных данных</span>
							</div>

							{/* Срочность/выгода */}
							<div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 mb-4">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
										<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
									<div>
										<h4 className="font-bold text-gray-800">Быстрый ответ</h4>
										<p className="text-sm text-gray-600">Первые 3 заявки до Нового года получат скидку 10%</p>
									</div>
								</div>
							</div>

							{/* Кнопка отправки */}
							<motion.button
								type="submit"
								whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
								whileTap={{ scale: 0.97 }}
								disabled={formStatus.loading || !isFormValid}
								className={`w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 relative overflow-hidden ${formStatus.loading ? 'opacity-50 cursor-not-allowed' : ''
									}`}
							>
								{/* Эффект свечения на кнопке */}
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>

								{formStatus.loading ? (
									<>
										<span className="spinner border-2 border-white/30 rounded-full border-t-white w-5 h-5 animate-spin"></span>
										Отправка...
									</>
								) : (
									<>
										<span>Отправить заявку сейчас</span>
										<ArrowRight className="w-5 h-5" />
									</>
								)}
							</motion.button>

							{/* Статус формы */}
							{formStatus.message && (
								<div className={`p-4 rounded-lg ${formStatus.success ? 'bg-green-50 text-green-800' :
									formStatus.error ? 'bg-red-50 text-red-800' : 'bg-blue-50 text-blue-800'
									}`}>
									<div className="flex items-center gap-3">
										{formStatus.success ? <Check className="w-5 h-5" /> :
											formStatus.error ? <AlertCircle className="w-5 h-5" /> : <Send className="w-5 h-5" />}
										<span className="whitespace-pre-line">{formStatus.message}</span>
									</div>
									{formStatus.error && (
										<div className="mt-4">
											<p className="text-sm text-gray-700 flex items-center gap-2">
												<Info className="w-4 h-4" />
												Проверьте подключение и настройки Telegram бота
											</p>
											<button
												className="mt-3 px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 flex items-center gap-2 transition-colors"
												onClick={() => window.location.reload()}
												type="button"
											>
												<RefreshCw className="w-4 h-4" />
												Попробовать снова
											</button>
										</div>
									)}
								</div>
							)}

							<p className="text-sm text-gray-500 text-center">
								Отвечаю в течение 24 часов. Укажите Ваш часовой пояс (если нужно)
							</p>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactCTA;