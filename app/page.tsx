import { IdentitySection } from '@/components/identity/identity-section';
import { DiscoverySection } from '@/components/discovery/discovery-section';
import { FocusSection } from '@/components/focus/focus-section';
import { ProjectsSection } from '@/components/projects/projects-section';
import { ProjectCaseStudyModal } from '@/components/projects/project-case-study-modal';
import { JourneySection } from '@/components/journey/journey-section';
import { ToolkitSection } from '@/components/toolkit/toolkit-section';
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
      <DiscoverySection />
      <FocusSection />
      <ProjectsSection />
      <JourneySection />
      <ToolkitSection />
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
