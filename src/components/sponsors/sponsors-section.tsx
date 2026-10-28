import Image from "next/image"

import { organizers, coOrganizers, supports, journals, medias, strategicPartners } from "@/data/sponsors"

export function SponsorsSection() {
    return (
        <section className="bg-[#f6f6f6] pt-10 pb-20">
            <div className="mx-auto container px-3">
                <h2 data-aos="fade-up" className="font-primary text-center font-normal text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic text-gradient-blue leading-none">
                    Sponsors & Partners
                </h2>

                {/* Organized by */}
                <p data-aos="fade-up" data-aos-delay="100" className="mt-10 text-center font-bold text-2xl md:text-4xl text-gradient-blue leading-normal">
                    Organized by
                </p>

                <div className="mx-auto mt-2 grid max-w-5xl grid-cols-4 gap-2 sm:gap-6"> {/* change grid here */}
                    {organizers.map((organizer) => (
                        <div
                            key={organizer.id}
                            className="flex items-center justify-center px-1 md:px-4 py-1 md:py-4 h-26 sm:h-36"
                            data-aos="zoom-in"
                        >
                            <Image
                                src={organizer.logo}
                                alt={organizer.label}
                                width={240}
                                height={120}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Co-Organized by */}
                <p data-aos="fade-up" data-aos-delay="100" className="mt-10 text-center font-bold text-2xl md:text-4xl text-gradient-blue leading-normal">
                    Co-Organized by
                </p>

                <div className="mx-auto mt-2 grid max-w-5xl grid-cols-4 gap-2 sm:gap-6"> {/* change grid here */}
                    {coOrganizers.map((coOrganizer) => (
                        <div
                            key={coOrganizer.id}
                            className="flex items-center justify-center px-1 md:px-4 py-1 md:py-4 h-26 sm:h-36"
                            data-aos="zoom-in"
                        >
                            <Image
                                src={coOrganizer.logo}
                                alt={coOrganizer.label}
                                width={240}
                                height={120}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Support by */}
                <p data-aos="fade-up" data-aos-delay="100" className="mt-10 text-center font-bold text-2xl md:text-4xl text-gradient-blue leading-normal">
                    Supported by
                </p>

                <div className="mx-auto mt-2 grid justify-center max-w-5xl grid-cols-1 gap-2 sm:gap-6">
                    {supports.map((support) => (
                        <div
                            key={support.id}
                            className="flex items-center justify-center px-1 md:px-4 py-1 md:py-4 sm:h-36"
                            data-aos="zoom-in"
                        >
                            <Image
                                src={support.logo}
                                alt={support.label}
                                width={240}
                                height={120}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Journal Partners */}
                <p data-aos="fade-up" data-aos-delay="100" className="mt-10 text-center font-bold text-2xl md:text-4xl text-gradient-blue leading-normal">
                    Journal Partners
                </p>

                <div className="mx-auto mt-2 grid justify-center max-w-5xl grid-cols-3 gap-2 sm:gap-6">
                    {journals.map((journal) => (
                        <div
                            key={journal.id}
                            className="flex items-center justify-center px-1 md:px-4 py-1 md:py-4 sm:h-36"
                            data-aos="zoom-in"
                        >
                            <Image
                                src={journal.logo}
                                alt={journal.label}
                                width={240}
                                height={120}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Strategic Partners */}
                <p data-aos="fade-up" data-aos-delay="100" className="mt-10 text-center font-bold text-2xl md:text-4xl text-gradient-blue leading-normal">
                    Strategic Partners
                </p>

                <div className="mx-auto mt-2 grid justify-center max-w-5xl grid-cols-4 gap-2 sm:gap-6">
                    {strategicPartners.map((strategicPartner) => (
                        <div
                            key={strategicPartner.id}
                            className="flex items-center justify-center px-1 md:px-4 py-1 md:py-4 sm:h-36"
                            data-aos="zoom-in"
                        >
                            <Image
                                src={strategicPartner.logo}
                                alt={strategicPartner.label}
                                width={240}
                                height={120}
                                className="h-full w-full scale-120 object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Media Partners */}
                <p data-aos="fade-up" data-aos-delay="100" className="mt-10 text-center font-bold text-2xl md:text-4xl text-gradient-blue leading-normal">
                    Media Partners
                </p>

                <div className="mx-auto mt-2 grid justify-center max-w-5xl grid-cols-3 gap-2 sm:gap-6">
                    {medias.map((media) => (
                        <div
                            key={media.id}
                            className="flex items-center justify-center px-1 md:px-4 py-1 md:py-4 sm:h-36"
                            data-aos="zoom-in"
                        >
                            <Image
                                src={media.logo}
                                alt={media.label}
                                width={240}
                                height={120}
                                className="h-full w-full scale-75 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}