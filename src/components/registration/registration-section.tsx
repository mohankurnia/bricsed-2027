"use client"

import Link from "next/link"
import { useState } from "react"

import { PricingCard } from "@/components/registration/pricing-card"

import { internationalConference } from "@/data/programs"
import { callForPapers } from "@/data/programs"
import {
    conferenceRegistrationEarlyBird,
    conferenceRegistrationRegularWave,
    paperSubmission,
} from "@/data/registration"

function PricingGroup({
                        title,
                        date,
                        items,
                        program
                    }: {
    title: string
    date: string
    items: {
        title: string
        prices: string[][]
    }[]
    program: string
}) {
    return (
        <div className="rounded-[14px] bg-linear-to-b from-[#001431] via-[#05287e] to-[#0645ff] p-4 lg:p-10">
            <p className="text-center text-md font-semibold bg-[#11990A] mx-auto w-fit px-5 py-2 rounded-full text-white">
                {program}
            </p>

            <h2 className="text-center text-3xl md:text-5xl font-bold text-white mt-5 mb-0 md:mb-2">
                {title}
            </h2>

            <p className="text-center text-md md:text-xl text-white mb-5">
                {date}
            </p>

            <div
                className={
                    items.length > 1
                        ? "grid gap-4 lg:gap-8 xl:gap-10 md:grid-cols-2"
                        : "grid"
                }
            >
                {items.map((item) => (
                    <PricingCard
                        key={item.title}
                        {...item}
                    />
                ))}
            </div>

            <div className="mt-5 md:mt-10 mx-auto flex justify-center">
                <Link
                    href={
                        program === "International Conference"
                            ? internationalConference.registration_link
                            : callForPapers.registration_link
                    }
                    target="_blank"
                    className="rounded-full border text-white border-white bg-[#001431] px-8 py-3 text-lg font-bold shadow-[0_4px_20px_rgba(0,0,0,.35)] transition hover:-translate-y-0.5 hover:bg-[#05245b]"
                >
                    Register Now
                </Link>
            </div>
        </div>
    )
}

const pricingTabs = [
    {
        label: "Early Bird Conference",
        title: "Early Bird Conference",
        date: "5 - 26 November 2026",
        program: "International Conference",
        items: conferenceRegistrationEarlyBird,
    },
    {
        label: "Regular Wave Conference",
        title: "Regular Wave Conference",
        date: "27 November - 26 December 2026",
        program: "International Conference",
        items: conferenceRegistrationRegularWave,
    },
    {
        label: "International Paper Student Competition Payment",
        title: "International Paper Student Competition Payment",
        date: "27 November 2026",
        program: "International Paper Student Competition",
        items: [paperSubmission],
    },
]

export function RegistrationSection() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section
            id="registration"
            className="bg-[#f6f6f6] py-10"
        >
            <div className="mx-auto container px-3 md:px-10 lg:px-20">
                <h2 data-aos="fade-up" className="font-primary text-center font-normal text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic text-gradient-blue leading-normal">
                    Registration
                </h2>
                <div className="mt-5 md:mt-10">
                    <div
                        className="grid gap-2 rounded-xl bg-[#001431] p-2 sm:grid-cols-3" // change to 3 for active tabs
                        role="tablist"
                        aria-label="Registration pricing"
                        data-aos="zoom-in" 
                    >
                        {pricingTabs.map((tab, index) => (
                            <button
                                key={tab.label}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === index}
                                aria-controls={`pricing-panel-${index}`}
                                id={`pricing-tab-${index}`}
                                onClick={() => setActiveTab(index)}
                                className={`rounded-lg px-4 py-3 text-base font-bold transition-colors duration-300 cursor-pointer sm:text-lg ${
                                    activeTab === index
                                        ? "bg-[#11990A] text-white"
                                        : "text-white hover:bg-white/10"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div
                        className="mt-5 md:mt-7"
                        role="tabpanel"
                        id={`pricing-panel-${activeTab}`}
                        aria-labelledby={`pricing-tab-${activeTab}`}
                        data-aos="fade-up"
                    >
                        <PricingGroup {...pricingTabs[activeTab]} />
                    </div>
                </div>
            </div>
        </section>
    )
}