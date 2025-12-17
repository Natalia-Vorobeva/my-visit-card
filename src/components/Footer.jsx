import { motion } from 'framer-motion';
import { Mail, MessageSquare, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
	const socialLinks = [
		{ icon: MessageSquare, href: "https://t.me/vorobjevaa", label: "Telegram" },
		{ icon: Mail, href: "mailto:vorobjeva.natalia76@gmail.com", label: "Email" }
	];

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className="py-12 px-4 bg-gray-900 text-white">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center md:text-left"
					>
						{/* Логотип в футере - кнопка для скролла наверх */}
						<motion.button
							onClick={scrollToTop}
							whileHover={{ y: -5 }}
							className="flex items-center gap-3 mb-4 group"
						>
							<motion.div
								whileHover={{ rotate: 15 }}
								className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
							>
								<ArrowUp className="w-6 h-6 text-white" />
							</motion.div>
							<div className="text-2xl font-bold">
								<span className="text-blue-400">Frontend</span>
								<span>Craft</span>
							</div>
						</motion.button>
						<p className="text-gray-400 max-w-md">
							Исследование бизнес-кейсов: как сайты решают конкретные задачи и приносят прибыль
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="flex gap-6"
					>
						{socialLinks.map((link, index) => (
							<motion.a
								key={link.label}
								href={link.href}
								whileHover={{ y: -5 }}
								whileTap={{ scale: 0.95 }}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 + index * 0.1 }}
								className="relative group"
							>
								<div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors">
									<link.icon className="w-5 h-5" />
								</div>
								<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
									{link.label}
								</div>
							</motion.a>
						))}
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
				>
					<div className="flex flex-col items-center justify-center gap-4">
						<div className="flex items-center gap-2">
							<span>Создано с</span>
							<Heart className="w-4 h-4 text-red-400 fill-red-400" />
							<span>на React + Vite + Tailwind + Framer Motion</span>
						</div>
						<div>
							<span>© {new Date().getFullYear()} FrontendCraft. Бизнес-кейсы digital-инструментов</span>
						</div>
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;