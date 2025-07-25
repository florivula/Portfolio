import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-gray-100">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-gray-900">Technical Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
						{
							category: 'Frontend Development',
							skills: [
								{ name: 'React & Shadcn UI', level: 95 },
								{ name: 'TypeScript', level: 92 },
								{ name: 'Tailwind CSS', level: 90 },
								{ name: 'Responsive Design', level: 80 },
							],
							icon: '🎨',
							color: 'from-blue-400 to-blue-600',
						},
						{
							category: 'Backend & APIs',
							skills: [
								{ name: 'Node.js & Express', level: 90 },
								{ name: 'PostgreSQL & Prisma', level: 92 },
								{ name: 'gRPC & REST APIs', level: 90 },
								{ name: 'JWT Auth & RBAC', level: 88 },
							],
							icon: '⚙️',
							color: 'from-green-400 to-green-600',
						},
						{
							category: 'DevOps & Infrastructure',
							skills: [
								{ name: 'Docker & Compose', level: 88 },
								{ name: 'Google Cloud (GCP)', level: 75 },
								{ name: 'CI/CD (basic)', level: 75 },
								{ name: 'ChirpStack Integration', level: 85 },
							],
							icon: '🚀',
							color: 'from-purple-400 to-purple-600',
						},
					].map((category) => (
						<div key={category.category} className="bg-white rounded-lg p-6 transform hover:scale-[1.02] transition-all shadow-sm hover:shadow-md">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">{category.icon}</span>
								<h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
							</div>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between text-sm mb-1">
											<span className="text-gray-700">{skill.name}</span>
											<span className="text-gray-500">{skill.level}%</span>
										</div>
										<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
											<div className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`} style={{ width: `${skill.level}%` }}></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
