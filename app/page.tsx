import BackgroundMusic from "@/components/BackgroundMusic";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import Entry from "@/components/sections/Entry";
import NotObvious from "@/components/sections/NotObvious";
import MemoryWalk from "@/components/sections/MemoryWalk";
import AttackMode from "@/components/sections/AttackMode";
import LookAround from "@/components/sections/LookAround";
import PhotoMoment from "@/components/sections/PhotoMoment";
import FavoritePhoto from "@/components/sections/FavoritePhoto";
import Together from "@/components/sections/Together";
import VoiceNoteSection from "@/components/sections/VoiceNoteSection";
import QuietTransition from "@/components/sections/QuietTransition";
import ImportantMessage from "@/components/sections/ImportantMessage";
import DrinkWater from "@/components/sections/DrinkWater";
import BirthdayMoment from "@/components/sections/BirthdayMoment";
import FutureSurprise from "@/components/sections/FutureSurprise";
import PhotoApology from "@/components/sections/PhotoApology";
import FinalScreen from "@/components/sections/FinalScreen";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen bg-espresso text-cream">
      <BackgroundAtmosphere />
      <BackgroundMusic />
      <Entry />
      <NotObvious />
      <MemoryWalk />
      <AttackMode />
      <LookAround />
      <PhotoMoment />
      <FavoritePhoto />
      <Together />
      <VoiceNoteSection />
      <QuietTransition />
      <ImportantMessage />
      <DrinkWater />
      <BirthdayMoment />
      <FutureSurprise />
      <PhotoApology />
      <FinalScreen />
    </main>
  );
}
