import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://florivula.github.io/Portfolio'),
	title: 'Flori Vula – Full-Stack Developer | IoT & Cloud Systems',
	description:
		'Portfolio of Flori Vula, a full-stack developer focused on real-time platforms, IoT systems, and cloud-native applications. Explore smart lighting, water monitoring, and full-stack projects built with React, Node.js, and Docker.',
	keywords: [
		'Full-Stack Developer',
		'IoT Developer',
		'React Developer',
		'Node.js',
		'PostgreSQL',
		'TypeScript',
		'ChirpStack',
		'Docker',
		'Google Cloud',
		'JWT Authentication',
		'gRPC APIs',
		'Smart Lighting',
		'Smart Water Monitoring',
		'Prisma ORM',
		'Flori Vula',
	],
	authors: [{ name: 'Flori Vula' }],
	creator: 'Flori Vula',
	openGraph: {
		title: 'Flori Vula – Full-Stack Developer | IoT & Cloud Systems',
		description:
			'Real-time IoT platforms and full-stack applications by Flori Vula. Featuring smart city solutions using modern technologies like React, Node.js, Docker, and ChirpStack.',
		url: 'https://florivula.github.io',
		siteName: 'Flori Vula – Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Flori Vula Portfolio – Full-Stack Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Flori Vula – Full-Stack Developer',
		description:
			'Explore real-time IoT dashboards and full-stack platforms built by Flori Vula using React, Node.js, Prisma, and Docker.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
