import Hero from '@/components/sections/Hero';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';
import Competencies from '@/components/sections/Competencies';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ExperienceTimeline />
      <Competencies />
      <Education />
      <Contact />
    </main>
  );
}
