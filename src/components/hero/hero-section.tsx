import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { conference } from "@/data/conference"
import { Countdown } from "./countdown"

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative px-4 pt-4 sm:px-5 sm:pt-5"
        >
            <div
                className="relative min-h-[810px] overflow-hidden rounded-t-[26px] text-white"
                style={{
                    clipPath:
                        "polygon(0 0, 100% 0, 100% 84%, 50% 100%, 0 84%)",
                }}
            >
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/images/hero/hero-bg.jpg')",
                    }}
                />

                {/* Background overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(0,20,49,.97) 0%, rgba(0,31,105,.85) 42%, rgba(5,63,238,.92) 100%)",
                    }}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(70,110,255,.32),transparent_35%)]" />

                <div className="relative z-10 mx-auto flex min-h-[810px] w-[min(1240px,calc(100%-40px))] flex-col items-center pb-[110px] pt-[110px] text-center">

                    <div className="rounded-full border border-white/25 bg-white/[0.03] px-7 py-2.5 text-[15px] backdrop-blur-sm">
                        {conference.date} · {conference.venue}
                    </div>


                    <h1 className="font-primary mt-8 text-[clamp(5rem,10vw,8.2rem)] italic leading-[0.78]">
                        BRICSED 2027
                    </h1>


                    <p className="font-primary mt-5 max-w-[1000px] text-[24px] italic leading-none">
                        {conference.fullName}
                    </p>


                    <Countdown />


                    <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="#registration"
                            className="flex min-w-[245px] items-center justify-center rounded-full border border-white bg-[#001431] px-8 py-3.5 text-[20px] font-bold shadow-lg transition hover:-translate-y-0.5"
                        >
                            Register Now
                        </Link>

                        <Link
                            href="#programs"
                            className="flex min-w-[245px] items-center justify-center rounded-full border border-white/20 bg-[#0645ff]/70 px-8 py-3.5 text-[20px] font-bold shadow-lg backdrop-blur-sm transition hover:-translate-y-0.5"
                        >
                            Call for Paper
                        </Link>
                    </div>


                    <Link
                        href="#about"
                        aria-label="Scroll to about section"
                        className="absolute bottom-[35px] transition hover:translate-y-1"
                    >
                        <div className="flex flex-col items-center">
                            <ChevronDown
                                size={42}
                                strokeWidth={4}
                            />

                            <ChevronDown
                                size={42}
                                strokeWidth={4}
                                className="-mt-7"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}