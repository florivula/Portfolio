/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export const ContactSection = () => {
	return (
		<section id="contact" className="py-12 sm:py-20 px-4 scroll-mt-20">
			<div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
				<h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100">Let's Connect</h2>
				<p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
					If you're looking for a full-stack developer who can design, build, and deploy real-time platforms and data-intensive applications — I'd love to talk.
				</p>

				{/* Location */}
				<div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-8">
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<span>Prishtinë, Kosovo</span>
				</div>

				{/* Contact Buttons */}
				<div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
					<a
						href="mailto:vula.flori@gmail.com"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
						Get in Touch
					</a>
					<a
						href="/Flori_Vula_Resume.pdf"
						target="_blank"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
							<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
						</svg>
						View Resume
					</a>
				</div>

				{/* Social Links */}
				<div className="flex justify-center gap-6">
					<a
						href="https://github.com/florivula"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
					>
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.111.793-.26.793-.577v-2.233c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.755-1.333-1.755-1.089-.746.083-.73.083-.73 1.206.085 1.84 1.238 1.84 1.238 1.07 1.833 2.807 1.304 3.492.996.107-.775.418-1.304.762-1.603-2.666-.306-5.467-1.334-5.467-5.93 0-1.311.468-2.382 1.236-3.221-.123-.304-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.02.005 2.047.139 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.768.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.623-5.479 5.92.43.373.823 1.102.823 2.223v3.292c0 .319.192.694.801.576C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
						</svg>
					</a>
					<a
						href="https://linkedin.com/in/florivula"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
					>
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zm-1.5-12.25c-.97 0-1.75-.79-1.75-1.75S5.53 3.25 6.5 3.25 8.25 4.04 8.25 5 7.47 6.75 6.5 6.75zM20 19h-3v-5.5c0-1.32-.47-2.5-2-2.5s-2.2 1.18-2.2 2.5V19h-3V8h3v1.5c.42-.78 1.52-1.5 3-1.5 2.26 0 4 1.5 4 4.5V19z" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
};
