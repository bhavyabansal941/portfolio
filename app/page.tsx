import { IdentitySection } from '@/components/identity/identity-section';
import { SystemMapSection } from '@/components/system-map/system-map-section';
import { ProjectsSection } from '@/components/projects/projects-section';
import { ProjectCaseStudyModal } from '@/components/projects/project-case-study-modal';
import { SkillsConstellationSection } from '@/components/skills/skills-constellation-section';
import { JourneySection } from '@/components/journey/journey-section';
import { RecognitionSection } from '@/components/recognition/recognition-section';
import { ExperienceSection } from '@/components/experience/experience-section';
import { BuildLogSection } from '@/components/log/build-log-section';
import { AssistantSection } from '@/components/assistant/assistant-section';
import { ProfileSection } from '@/components/profile/profile-section';
import { RecruiterModeModal } from '@/components/recruiter/recruiter-mode-modal';

export default function Page() {
  return (
    <>
      <IdentitySection />
      <SystemMapSection />
      <ProjectsSection />
      <SkillsConstellationSection />
      <JourneySection />
      <RecognitionSection />
      <ExperienceSection />
      <BuildLogSection />
      <AssistantSection />
      <ProfileSection />

      {/* Interactive Overlays & Modals */}
      <RecruiterModeModal />
      <ProjectCaseStudyModal />
    </>
  );
}
