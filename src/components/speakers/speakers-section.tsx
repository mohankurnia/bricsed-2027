import { speakers } from "@/data/speakers"
import { SpeakerCard } from "./speaker-card"

export function SpeakersSection() {
    return (
        <section
            id="speakers"
            className="mx- py-10 text-white scroll-mt-10"
        >
            <div className="container mx-auto">
                <h2 className="font-primary text-center font-normal text-8xl italic text-gradient-blue leading-normal">
                    Speakers
                </h2>

                <div className="mt-10 px-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
                    {speakers.map((speaker, index) => (
                        <SpeakerCard
                            key={speaker.id}
                            {...speaker}
                            variant={index % 2 === 0 ? "blue" : "green"}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}