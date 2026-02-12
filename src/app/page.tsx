import Navbar from "@/components/LiquidNavbar";
import Hero from "@/components/LiquidHero";
import Stats from "@/components/StatsTicker";
import Marquee from "@/components/Marquee";
import Features from "@/components/FeatureHighlight";
import HowItWorks from "@/components/StickySteps";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main style={{ background: "#000", minHeight: "100vh" }}>
            <Navbar />
            <Hero />
            <Stats />
            <Marquee />
            <Features />
            <HowItWorks />
            <Testimonials />
            <FAQ />
            <CTA />
            <Footer />
        </main>
    );
}
