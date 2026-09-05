import Image from "next/image"

import { sponsors } from "@/data/sponsors"

export function SponsorsSection() {
    return (
        <section className="bg-[#f6f6f6] pt-10 pb-20">
            <div className="mx-auto container px-3">
                <h2 className="font-primary text-center font-normal text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic text-gradient-blue leading-none">
                    Sponsors & Partners
                </h2>
                <div className="mx-auto mt-6 lg:mt-12 grid max-w-3xl grid-cols-4 gap-2 sm:gap-6">
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.id}
                            className="flex items-center justify-center px-2 md:px-6 py-2 md:py-5 sm:h-36"
                        >
                            <Image
                                src={sponsor.logo}
                                alt={sponsor.label}
                                width={240}
                                height={120}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}