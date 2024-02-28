import ContactsSection from "@/components/sections/contacts-section/contacts-section";
import CTASection from "@/components/sections/cta-section/cta-section";
import HeroSection from "@/components/sections/hero-section/hero-section";
import OverviewSection from "@/components/sections/overview-section/overview-section";
import StepsSection from "@/components/sections/steps-section/steps-section";

export default function Home() {
  return (
    <main className='pt-9'>
      <HeroSection />
      <CTASection className='py-8' />
      <OverviewSection className='py-8' />
      <StepsSection className='py-8' />
      <ContactsSection className='pt-8' />
    </main>
  );
}
