import { keynotes, panelists } from "@/data/speakers"
import { SpeakerCard } from "./speaker-card"

export function SpeakersSection() {
    return (
        <section
            id="speakers"
            className="mx-4 mt-0 md:mt-5 md:mx-5 relative overflow-hidden bg-[#f6f6f6] py-10 text-white scroll-mt-10"
        >
            <div className="container mx-auto">
                <h2 data-aos="fade-up" className="mb-3 md:mb-8 font-primary text-center font-normal text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic text-gradient-blue leading-normal">
                    Speakers
                </h2>

                {/* Keynote Speaker */}
                <p data-aos="fade-up" data-aos-delay="100" className="text-center font-bold text-2xl md:text-4xl text-gradient-blue leading-normal">
                    Keynote Speaker
                </p>
                <div data-aos="zoom-in" data-aos-delay="200" className="my-5 mx-auto max-w-[550px] md:max-w-[350px] w-full grid gap-5 items-center">
                    {keynotes.map((keynote, index) => (
                        <SpeakerCard
                            key={keynote.id}
                            {...keynote}
                            variant={index % 2 === 0 ? "blue" : "green"}
                        />
                    ))}
                </div>

                {/* Panelist */}
                <p data-aos="fade-up" className="text-center font-bold text-2xl md:text-4xl text-gradient-blue leading-normal">
                    Speakers
                </p>
                <div data-aos="zoom-in" className="mt-5 px-0 sm:px-8 md:px-10 lg:px-15 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center">
                    {panelists.map((panelist, index) => (
                        <SpeakerCard
                            key={panelist.id}
                            {...panelist}
                            variant={index % 2 === 0 ? "blue" : "green"}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}