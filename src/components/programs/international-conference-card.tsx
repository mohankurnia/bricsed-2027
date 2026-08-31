import { Globe2, UserRound } from "lucide-react"

import { internationalConference } from "@/data/programs"

export function InternationalConferenceCard() {
    return (
        <article className="overflow-hidden  border border-white rounded-[20px] bg-white shadow-[0_20px_40px_rgba(0,20,60,0.16)]">
            <div className="flex min-h-[96px] items-center gap-5 bg-blue-dark px-7 text-white">
                <Globe2
                    className="size-12 shrink-0"
                    strokeWidth={1.8}
                />

                <h3 className="font-primary text-[28px] leading-none">
                    {internationalConference.title}
                </h3>
            </div>

            <div className="flex min-h-[410px] flex-col p-7">
                <p className="text-[15px] leading-[1.08] text-[#061630]">
                    {internationalConference.description}
                </p>

                {/* Objectives */}
                <div className="mt-7">
                    <h4 className="flex items-center gap-2 text-[17px] font-bold leading-none text-[#063fe9]">
                        <span className="size-2.5 shrink-0 rounded-full bg-[#0aa31a]" />

                        Objectives
                    </h4>

                    <p className="mt-2 text-[15px] leading-[1.08] text-[#061630]">
                        {internationalConference.objectives}
                    </p>
                </div>

                {/* Bottom information */}
                <div className="mt-7 grid grid-cols-2 gap-8">

                    {/* Conference Format */}
              <div>
                        <h4 className="flex items-center gap-2 text-[17px] font-bold leading-none text-[#063fe9]">
                            <span className="size-2.5 shrink-0 rounded-full bg-[#0aa31a]" />

                            Conference Format
                        </h4>

                        <p className="mt-2 text-[28px] font-medium leading-none text-[#001431]">
                            {internationalConference.conferenceFormat}
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <a
                    href="#registration"
                    className="mt-auto flex min-h-[58px] items-center justify-center rounded-full bg-gradient-to-r from-[#0645ff] to-[#001431] px-6 text-xl font-bold text-white transition-transform hover:scale-[1.01]"
                >
                    Register Now
                </a>
            </div>
        </article>
    )
}