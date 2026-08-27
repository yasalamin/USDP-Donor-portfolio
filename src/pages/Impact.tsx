import { GlobalReach } from '../components/GlobalReach';
import { TopFreelancers } from '../components/TopFreelancers';
import { InHouseTalent } from '../components/InHouseTalent';
import { Ventures } from '../components/Ventures';

export function Impact() {
  return (
    <main>
      <Ventures />
      <GlobalReach />
      <TopFreelancers />
      <InHouseTalent />
    </main>
  );
}
