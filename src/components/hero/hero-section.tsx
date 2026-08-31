import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { conference } from "@/data/conference"

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative px-4 pt-4 sm:px-5 sm:pt-5"
        >
            <div
                className="relative min-h-[620px] overflow-hidden rounded-t-[26px] text-white md:min-h-[650px]"
                style={{
                    clipPath:
                        "polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%)",
                }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/hero/hero-bg.jpg')",
                    }}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient( rgba(1, 17, 43, .99) 20%, rgba(2, 63, 252, .8) 90%)",
                    }}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(91,132,255,.35),transparent_35%)]" />


                <div className="relative z-10 mx-auto flex min-h-[620px] w-[min(1240px,calc(100%-40px))] flex-col items-center justify-center pb-20 pt-28 text-center md:min-h-[650px]">
                    <div className="mb-10 rounded-full border border-white/25 bg-white/[0.03] px-5 py-2.5 text-xs shadow-[0_10px_35px_rgba(0,0,0,.15)] backdrop-blur-sm sm:text-sm md:px-8 md:text-[16px]">
                        {conference.date} · {conference.venue}
                    </div>

                    <h1 className="font-primary text-[clamp(4rem,10vw,8.3rem)] tracking-[0.05em] font-black italic leading-[0.82] ">
                        BRICSED 2027
                    </h1>

                    <p className="mt-8 max-w-5xl text-lg font-bold italic leading-tight sm:text-xl md:text-[22px]">
                        {conference.fullName}
                    </p>

                    <p className="mt-6 text-base italic text-white/90 md:text-lg">
                        Organized by{" "}
                        <span className="font-bold">
              {conference.organizer}
            </span>
                    </p>

                    <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="#registration"
                            className="rounded-full border border-white bg-[#001431] px-8 py-3 text-lg font-bold shadow-lg transition hover:-translate-y-0.5 hover:bg-[#05245b]"
                        >
                            Conference Call for Abstract
                        </Link>

                        <Link
                            href="#programs"
                            className="rounded-full border border-white/20 bg-white/[0.04] px-8 py-3 text-lg font-bold shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/10"
                        >
                            International Student Paper Competition
                        </Link>
                    </div>

                    <Link
                        href="#about"
                        aria-label="Scroll to about section"
                        className="absolute bottom-12 transition hover:translate-y-1"
                    >
                        <div className="flex flex-col items-center">
                            <ChevronDown
                                size={46}
                                strokeWidth={4}
                            />
                            <ChevronDown
                                size={46}
                                strokeWidth={4}
                                className="-mt-8"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}