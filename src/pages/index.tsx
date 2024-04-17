import { FAQ } from '~/components/FAQ';
import { Intro } from '~/components/Intro';
import { RecruitTextSection, SignImageSection } from '~/components/Main';
import { Journey } from '~/components/Main/Journey';
import { RecruitEntrance } from '~/components/Main/RecruitEntrance';
import { ProjectCarousel } from '~/components/ProjectCarousel';
import { ScheduleSection } from '~/components/ScheduleSection';
import { SectionTitle } from '~/components/SectionTitle';
import { SEO } from '~/components/SEO';
import { MEMBER_SCHEDULE, SESSION_SCHEDULES } from '~/constant/schedule';

export default function Root() {
  return (
    <>
      <SEO />
      <main>
        <div>
          <Intro />
          <Journey />
          <RecruitEntrance />
          <ProjectCarousel />
          <section>
            <SectionTitle label="14th Schedule" title={'14기 일정'} />
            <ScheduleSection {...MEMBER_SCHEDULE} />
            <ScheduleSection {...SESSION_SCHEDULES} />
          </section>
          <section>
            <FAQ />
          </section>
          <SignImageSection />
          <RecruitTextSection />
        </div>
      </main>
    </>
  );
}
