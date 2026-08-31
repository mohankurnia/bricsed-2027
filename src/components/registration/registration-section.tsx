import { PricingCard } from "@/components/registration/pricing-card"

import {
    conferenceRegistration,
    paperSubmission,
    participantRegistration,
} from "@/data/registration"

function PricingGroup({
                          title,
                          items,
                      }: {
    title: string
    items: {
        title: string
        prices: string[][]
    }[]
}) {
    return (
        <div className="rounded-[14px] bg-gradient-to-b from-[#001431] via-[#05287e] to-[#0645ff] p-5">
            <h3 className="mb-5 text-center text-3xl font-bold text-white">
                {title}
            </h3>

            <div
                className={
                    items.length > 1
                        ? "grid gap-3 md:grid-cols-2"
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
        </div>
    )
}

export function RegistrationSection() {
    return (
        <section
            id="registration"
            className="bg-[#f6f6f6] py-20"
        >
            <div className=" mx-auto container px-3">
                <h2 className="font-primary text-gradient-blue mb-10 text-center text-5xl italic tracking-[0.05em]">
                    Registration
                </h2>
                <div className="space-y-7">
                    <PricingGroup
                        title="Conferences"
                        items={conferenceRegistration}
                    />

                    <PricingGroup
                        title="Participant"
                        items={participantRegistration}
                    />

                    <PricingGroup
                        title="Paper Submission"
                        items={[paperSubmission]}
                    />
                </div>
            </div>
        </section>
    )
}