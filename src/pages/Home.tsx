import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import PitchSection from '@/components/PitchSection'
import SpecSection from '@/components/SpecSection'
import WhySection from '@/components/WhySection'
import HowItWorksSection from '@/components/HowItWorksSection'
import AgentSection from '@/components/AgentSection'
import SchemaSection from '@/components/SchemaSection'
import DirectorySection from '@/components/DirectorySection'
import ToolingSection from '@/components/ToolingSection'
import RoadmapSection from '@/components/RoadmapSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <PitchSection />
      <SpecSection />
      <hr className="divider" />
      <WhySection />
      <hr className="divider" />
      <HowItWorksSection />
      <hr className="divider" />
      <AgentSection />
      <hr className="divider" />
      <SchemaSection />
      <hr className="divider" />
      <DirectorySection />
      <hr className="divider" />
      <ToolingSection />
      <hr className="divider" />
      <RoadmapSection />
      <hr className="divider" />
      <CTASection />
      <Footer />
    </>
  )
}
