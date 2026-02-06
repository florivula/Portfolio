import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WebCapabilitiesSection } from './components/WebCapabilitiesSection';
import { ContactSection } from './components/ContactSection';
import { ThemeToggle } from './components/ThemeToggle';

export default function WebDeveloperPortfolio() {
	return (
		<main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
			<ThemeToggle />
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<WebCapabilitiesSection />
			<ContactSection />
		</main>
	);
}
