import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-white scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Smart Water Monitoring Platform',
							description:
								'A full-stack IoT solution that collects and displays real-time water usage data from LoRaWAN sensors. Features secure device integration, interactive dashboards, and downlink control capabilities.',
							metrics: {
								responseTime: 110,
								uptime: 99.98,
								deviceLatency: 250,
							},
							techDetails: [
								'LoRaWAN integration via ChirpStack',
								'React dashboard with real-time sensor updates',
								'JWT-based multi-tenant auth system',
								'PostgreSQL schema with Prisma ORM',
							],
							image: '/smart-water.jpg',
						},
						{
							title: 'Smart Lighting Control Platform',
							description:
								'A scalable lighting management system with schedule automation, real-time zone control, and energy reporting. Supports secure uplink/downlink messaging and dynamic lighting profiles.',
							metrics: {
								responseTime: 95,
								uptime: 99.95,
								deviceLatency: 180,
							},
							techDetails: [
								'Encoded downlinks using vendor-supplied payload encoder',
								'Leaflet-based zone mapping and device control',
								'Schedule builder with gRPC backend support',
								'Energy savings analytics and usage reports',
							],
							image: '/smart-lighting.jpg',
						},
					].map((project) => (
						<div
							key={project.title}
							className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
						>
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold text-gray-900">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-600">{project.description}</p>

									{/* Platform Metrics */}
									<div className="space-y-3">
										<h4 className="text-base sm:text-lg font-semibold text-gray-900">Platform Metrics</h4>
										<div className="grid grid-cols-3 gap-2 sm:gap-4">
											<div className="text-center">
												<div className="text-2xl font-bold text-blue-600">{project.metrics.responseTime}ms</div>
												<div className="text-sm text-gray-600">API Response</div>
											</div>
											<div className="text-center">
												<div className="text-2xl font-bold text-blue-600">{project.metrics.uptime}%</div>
												<div className="text-sm text-gray-600">System Uptime</div>
											</div>
											<div className="text-center">
												<div className="text-2xl font-bold text-blue-600">{project.metrics.deviceLatency}ms</div>
												<div className="text-sm text-gray-600">Device Latency</div>
											</div>
										</div>
									</div>

									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-600">▹</span>
													<span className="text-gray-700">{detail}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 50vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-gray-100 via-transparent to-transparent lg:to-gray"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};