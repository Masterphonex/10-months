import Preloader from "@/components/layout/Preloader";
import Hero from "@/components/sections/Hero";
import OurStory from "@/components/sections/OurStory";
import TenReasons from "@/components/sections/TenReasons";
import Memories from "@/components/sections/Memories";
import LoveLetter from "@/components/sections/LoveLetter";
import OurFuture from "@/components/sections/OurFuture";
import WishAndMessage from "@/components/sections/WishAndMessage";
import FinalSurprise from "@/components/sections/FinalSurprise";

export default function Home() {
  return (
    <main>
      <Preloader />
      <Hero />
      <OurStory />
      <TenReasons />
      <Memories />
      <LoveLetter />
      <OurFuture />
      <WishAndMessage />
      <FinalSurprise />
    </main>
  );
}
