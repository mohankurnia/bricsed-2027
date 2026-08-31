import { CallForPapersCard } from "@/components/programs/call-for-papers-card"
import { InternationalConferenceCard } from "@/components/programs/international-conference-card"

export function ProgramsSection() {
    return (
        <section
            id="programs"
            className="bg-gradient-to-b from-[#001431] to-[#0645ff]  py-20 py-20 md:py-24"
        >
            <div className="container px-5 mx-auto">
                <h2 className="font-primary text-center text-5xl italic tracking-[-0.05em] text-white md:text-6xl">
                    Programs
                </h2>

                <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2">
                    <InternationalConferenceCard />

                    <CallForPapersCard />
                </div>
            </div>
        </section>
    )
}