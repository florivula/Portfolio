import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WebCapabilitiesSection } from './components/WebCapabilitiesSection';
import { ContactSection } from './components/ContactSection';

export default function WebDeveloperPortfolio() {
	return (
		<main className="min-h-screen bg-white text-gray-900">
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<WebCapabilitiesSection />
			<ContactSection />
		</main>
	);
}
