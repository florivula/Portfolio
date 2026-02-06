import React from 'react';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-white dark:bg-gray-900 scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-gray-100">Industry Experience</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Enterprise IoT Platform',
							description:
								'Currently working on a commercial-grade IoT system for large-scale sensor monitoring, featuring real-time dashboards, automated scheduling, and remote device control.',
							note: 'Due to confidentiality, details are omitted.',
						},
						{
							title: 'Cloud-Native Control System',
							description:
								'Participated in the development of a secure, scalable system for managing distributed infrastructure across multiple zones with dynamic control interfaces and scheduling features.',
							note: 'Due to confidentiality, details are omitted.',
						},
					].map((project) => (
						<div
							key={project.title}
							className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
						>
							<div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
								<h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
								<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{project.description}</p>
								<p className="text-xs text-gray-500 dark:text-gray-400 italic">{project.note}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};