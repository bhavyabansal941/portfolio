import { IdentitySection } from '@/components/identity/identity-section';
import { FocusSection } from '@/components/focus/focus-section';
import { ProjectsSection } from '@/components/projects/projects-section';
import { ExperienceSection } from '@/components/experience/experience-section';
import { ToolkitSection } from '@/components/toolkit/toolkit-section';
import { LearningSection } from '@/components/learning/learning-section';
import { RecognitionSection } from '@/components/recognition/recognition-section';
import { ProfileSection } from '@/components/profile/profile-section';

export default function Page() {
  return (
    <>
      <IdentitySection />
      <FocusSection />
      <ProjectsSection />
      <ExperienceSection />
      <ToolkitSection />
      <LearningSection />
      <RecognitionSection />
      <ProfileSection />
    </>
  );
}
