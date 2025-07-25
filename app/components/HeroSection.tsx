import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socialLinks = [
	{ name: 'GitHub', icon: <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />, href: 'https://github.com/florivula' },
	{ name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />, href: 'https://linkedin.com/in/florivula' },
]

export const HeroSection = () => {
	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Animated Background Grid */}
			<div className="absolute inset-0 grid-background-dark opacity-10">
				<div className="grid-overlay animate-pulse-slow"></div>
			</div>

			{/* Floating Tech Icons */}
			<div className="absolute inset-0 overflow-hidden">
				{[
					{ icon: '⚛️', delay: '0s', position: 'top-20 left-1/4' },
					{ icon: '🚀', delay: '2s', position: 'top-40 right-1/3' },
					{ icon: '💻', delay: '1s', position: 'bottom-32 left-1/3' },
					{ icon: '🔥', delay: '3s', position: 'bottom-20 right-1/4' },
				].map((item, index) => (
					<div key={index} className={`absolute ${item.position} animate-float opacity-50`} style={{ animationDelay: item.delay }}>
						<span className="text-4xl">{item.icon}</span>
					</div>
				))}
			</div>

			{/* Hero Content */}
			<div className="relative z-10 max-w-5xl mx-auto px-4">
				<div className="text-center space-y-6">
					{/* Name Section */}
					<div className="relative inline-block px-4 sm:px-0">
						<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
						<h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 pb-2">
							Flori Vula
						</h1>
					</div>

					{/* Role & Description */}
					<div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-3">
								<span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
								<h2 className="text-xl sm:text-2xl font-light tracking-wide text-blue-600">Full-Stack Developer, IoT & Cloud Systems</h2>
								<span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
							</div>
							<p className="text-base sm:text-lg text-gray-600 max-w-2xl px-4 sm:px-0">
								Building scalable web platforms and IoT solutions with full-stack precision
							</p>
						</div>

						{/* Tech Stack Pills */}
						<div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0">
							{['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker',
								'Prisma', 'gRPC'
							].map((tech) => (
								<span
									key={tech}
									title={tech}
									className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-500/50 transition-colors"
								>
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
						<a href="/Flori_Vula_Resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center">
							<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
							<span className="relative px-6 sm:px-8 py-3 bg-white rounded-full inline-flex items-center justify-center w-full sm:w-auto">
								View My Resume
								<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</span>
						</a>
						<a
							href="#contact"
							className="px-6 sm:px-8 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors border border-gray-200 hover:border-gray-300 text-center"
						>
							Get in Touch
						</a>
					</div>

					{/* Social Links */}
					<div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
						{socialLinks.map((social) => (
							<a
								key={social.name}
								href={social.href}
								className="group relative p-2 sm:p-3 hover:text-blue-600 transition-colors"
								aria-label={social.name}
								target="_blank" rel="noopener noreferrer"
							>
								<span className="group-hover:scale-110 transition-transform inline-block">
									{social.icon}
								</span>
							</a>
						))}
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
				<span className="text-gray-600 text-sm mb-2 text-center">Scroll to explore</span>
				<svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
		</div>
	);
};
