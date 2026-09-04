import { SiteFooter } from "@/components/layout/site-footer"

import { AboutSection } from "@/components/about/about-section"
import { HeroSection } from "@/components/hero/hero-section"
import { ImportantDatesSection } from "@/components/important-dates/important-dates-section"
import { ProgramsSection } from "@/components/programs/programs-section"
import { RegistrationSection } from "@/components/registration/registration-section"
import { SpeakersSection } from "@/components/speakers/speakers-section"
import { SponsorsSection } from "@/components/sponsors/sponsors-section"
import { ThemesSection } from "@/components/themes/themes-section"
import {SiteHeader} from "@/components/layout/site-header";

export default function HomePage() {
    return (
        <>
        <SiteHeader />
        <main>
            <HeroSection />
            <AboutSection />
            <ProgramsSection />
            <SpeakersSection />
            <ThemesSection />
            <ImportantDatesSection />
            <RegistrationSection />
            <SponsorsSection />
        </main>
            <SiteFooter />
        </>
    )
}