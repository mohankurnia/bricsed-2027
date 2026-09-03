import { CallForPapersCard } from "@/components/programs/call-for-papers-card"
import { InternationalConferenceCard } from "@/components/programs/international-conference-card"

export function ProgramsSection() {
    return (
        <section
            id="programs"
            className="bg-[linear-gradient(180deg,rgba(246,246,246,1)_0%,rgba(2,63,252,.8)_50%,rgba(1,17,43,8)_100%)] py-20 md:py-24"
        >
            <div className="container px-5 flex flex-col gap-20 mx-auto">
                <h2 className="font-primary text-center font-normal text-8xl italic text-gradient-blue leading-normal">
                    Programs
                </h2>

                <div className="mx-auto flex gap-10 items-center">
                    <InternationalConferenceCard />

                    <CallForPapersCard />
                </div>
            </div>
        </section>
    )
}