/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

import { conference } from "@/data/conference"
import { internationalConference } from "@/data/programs"
import { Countdown } from "./countdown"

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative 
                mx-0 mt-0 md:mt-5 md:mx-5 
                scroll-mt-20"
        > 
            <div
                className="relative flex min-h-[750px] overflow-visible md:overflow-hidden rounded-t-[26px] text-white"
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
                            "linear-gradient(180deg, rgba(1, 17, 43, .9) 20%, rgba(2, 63, 252, .8) 50%, rgba(17, 153, 10, 0.4) 90%)",
                    }}
                />

                <div className="relative mx-auto flex flex-col px-4 lg:px-0 items-center mt-25 md:mt-35 mb-10 gap-5 md:gap-7 text-center">
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center rounded-full border px-5 py-2.5 text-xs shadow-[0_4px_20px_rgba(0,0,0,.35)] backdrop-blur-xs sm:text-sm md:px-8 md:text-[16px]">
                        <p>{conference.date}</p>
                        <div className="size-1.5 shrink-0 rounded-full bg-[#F6F6F6] hidden sm:block"></div>
                        <p>{conference.venue}</p>
                    </div>

                    <p className="text-center text-[12px] md:text-[16px] text-white">
                        Organized by International Relations Department, Faculty of Social and Political Sciences, Universitas Brawijaya
                    </p>

                    <div className="flex flex-col gap-4 items-center">    
                        <h1 className="font-primary text-[clamp(4rem,10vw,8.3rem)] tracking-[0.05em] font-black italic leading-[0.82] ">
                            BRICSED 2027
                        </h1>

                        <p className="max-w-5xl text-md font-semibold italic sm:text-xl md:text-[22px]">
                            {conference.fullName}
                        </p>
                    </div>

                    <Countdown />


                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                            href={internationalConference.registration_link}
                            target="_blank"
                            className="rounded-full border border-white bg-[#001431] px-4 sm:px-8 py-3 text-[12px] sm:text-[14px] md:text-lg font-bold shadow-[0_4px_20px_rgba(0,0,0,.35)] transition hover:-translate-y-0.5 hover:bg-[#05245b]"
                        >
                            International Conference
                        </Link>

                        <Link
                            href="#programs"
                            className="rounded-full border bg-[rgba(0,0,0,0.1)] px-4 sm:px-8 py-3 text-[12px] sm:text-[14px] md:text-lg font-bold shadow-[0_4px_20px_rgba(0,0,0,.35)] backdrop-blur-xs transition hover:-translate-y-0.5 hover:bg-white/10"
                        >
                            International Student Paper Competition
                        </Link>
                    </div>


                    <Link
                        href="#about"
                        aria-label="Scroll to about section"
                        className="transition hover:translate-y-1"
                    >
                        <div className="flex flex-col items-center">
                            <img src="/logos/hero_scroll.svg" alt="Scroll down" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}