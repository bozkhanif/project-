import MainLayout from "../Component/MainLayout";
import SectionDummy from "../Component/sections/SectionDummy";
import SectionHero from "../Component/sections/SectionHero";
import SectionKegiatan from "../Component/sections/SectionKegiatan";
import SectionQuestion from "../Component/sections/SectionQuestion";
import SectionSupport from "../Component/sections/SectionSupport";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <SectionHero />
        <SectionSupport />
        <SectionDummy />
        <SectionQuestion />
        <SectionKegiatan />
      </MainLayout>
    </div>
  );
}
