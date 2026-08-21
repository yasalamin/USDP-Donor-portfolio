import { Hero } from '../components/Hero';
import { CloudComputingSection } from '../components/CloudComputingSection';
import { PartnersMarquee } from '../components/PartnersMarquee';
import { ProcessJourney } from '../components/ProcessJourney';
import { PractitionerMentors } from '../components/PractitionerMentors';
import { SDGs } from '../components/SDGs';
import { RegisteredSection } from '../components/RegisteredSection';

export function Home() {
  return (
    <main>
      <Hero />
      <PartnersMarquee />
      <CloudComputingSection />
      <ProcessJourney />
      <PractitionerMentors />
      <SDGs />
      <RegisteredSection />
    </main>
  );
}
