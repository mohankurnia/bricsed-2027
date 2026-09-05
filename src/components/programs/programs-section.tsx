import { CallForPapersCard } from "@/components/programs/call-for-papers-card"
import { InternationalConferenceCard } from "@/components/programs/international-conference-card"

export function ProgramsSection() {
    return (
        <section
            id="programs"
            className="bg-[linear-gradient(180deg,rgba(246,246,246,1)_0%,rgba(2,63,252,.8)_50%,rgba(1,17,43,8)_100%)] py-10 md:py-24"
        >
            <div className="container px-4 md:px-5 flex flex-col gap-4 md:gap-20 mx-auto">
                <h2 data-aos="fade-up" className="font-primary text-center font-normal text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic text-gradient-blue leading-normal">
                    Programs
                </h2>

                <div className="mx-auto flex flex-col items-stretch md:flex-row gap-5 md:gap-7 lg:gap-10 items-center">
                    <InternationalConferenceCard />

                    <CallForPapersCard />
                </div>
            </div>
        </section>
    )
}