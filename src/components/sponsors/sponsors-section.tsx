import { sponsors } from "@/data/sponsors"

export function SponsorsSection() {
    return (
        <section className="bg-[#f6f6f6] pb-20 pt-8">
            <div className="mx-auto container px-3">
                <h2 className="font-primary text-gradient-blue text-center text-4xl italic tracking-[0.05em]">
                    Sponsors & Partners
                </h2>
                <div className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-10 md:grid-cols-4">
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={`${sponsor}-${index}`}
                            className="text-center text-3xl font-black text-black"
                        >
                            {sponsor}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}