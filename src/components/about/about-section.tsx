import Image from "next/image"

export function AboutSection() {
    return (
        <section
            id="about"
            className="mx-auto container px-3 relative overflow-hidden bg-[#f6f6f6] py-20 md:py-24"
        >
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-[0.07] md:block">
                <Image
                    src="/logos/bricsed-mark.png"
                    alt=""
                    width={1000}
                    height={1000}
                    className="h-auto w-[400px]"
                />
            </div>

            <div className=" relative z-10 grid items-center gap-14 lg:grid-cols-[0.9fr_1.4fr]">
                <div>
                    <h2 className="font-primary text-gradient-blue text-[56px] tracking-[0.05em] font-black italic leading-[0.95]  sm:text-[66px]">
                        About
                    </h2>

                    <p className=" font-primary mt-3 text-[38px] font-black tracking-[0.05em] italic leading-none text-[#11990A] sm:text-[44px]">
                        BRICSED 2027
                    </p>
                </div>

                <div className="max-w-2xl">
                    <div className="max-w-[700px]">
                        <p className="text-[17px] leading-[1.15] tracking-[0.02em] text-[#061630] sm:text-lg md:text-[19px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin id felis risus. Fusce sodales nisi nec sapien interdum
                            semper. Curabitur dapibus, enim at mattis tempor, erat metus
                            tempor neque, eu dictum leo mi nec quam. Nulla tempor accumsan
                            mauris id tincidunt. In commodo, risus ac consectetur pulvinar,
                            sem lectus bibendum enim, sed sodales augue lectus ut sapien.
                            Nullam commodo ipsum id est egestas rhoncus. Nulla venenatis
                            nisi nulla, eget tempor tortor gravida in. Praesent eu tellus
                            sit amet augue dignissim ullamcorper in fermentum urna.
                            Praesent tempus ligula ac ipsum aliquet volutpat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}