'use client';

import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		// Check localStorage and system preference on mount
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		
		if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
			setIsDark(true);
			document.documentElement.classList.add('dark');
		}
	}, []);

	const toggleTheme = () => {
		if (isDark) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			setIsDark(false);
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			setIsDark(true);
		}
	};

	return (
		<button
			onClick={toggleTheme}
			className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors shadow-lg"
			aria-label="Toggle theme"
		>
			{isDark ? (
				<FaSun className="w-5 h-5 text-yellow-500" />
			) : (
				<FaMoon className="w-5 h-5 text-gray-700" />
			)}
		</button>
	);
};
