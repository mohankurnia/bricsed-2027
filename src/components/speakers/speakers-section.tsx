import { speakers } from "@/data/speakers"
import { SpeakerCard } from "./speaker-card"

export function SpeakersSection() {
    return (
        <section
            id="speakers"
            className="bg-gradient-to-b from-[#0645ff] to-[#001431] py-20 text-white"
        >
            <div className="container mx-auto px-5">
                <h2 className="font-primary text-center text-5xl italic md:text-6xl">
                    Speakers
                </h2>

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {speakers.map((speaker) => (
                        <SpeakerCard
                            key={speaker.id}
                            {...speaker}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}