import { DateList } from "@/components/important-dates/date-list"

import {
    competitionDates,
    conferenceDates,
} from "@/data/important-dates"

export function ImportantDatesSection() {
    return (
        <section className="bg-[#f6f6f6] py-20 mx-auto container px-3">
            <div className="mx-auto ">
                <h2 className="font-primary text-gradient-blue text-center text-5xl italic tracking-[0.05em]">
                    Important Dates
                </h2>
                <div className="mt-10">
                    <h3 className="text-3xl font-black italic">
            <span className="text-[#0645ff]">
              International
            </span>{" "}
                        <span className="text-[#0aa31a]">
              Conference
            </span>
                    </h3>

                    <DateList items={conferenceDates} />
                </div>

                <div className="mt-14">
                    <h3 className="text-3xl font-black italic">
            <span className="text-[#0645ff]">
              Paper
            </span>{" "}
                        <span className="text-[#0aa31a]">
              Competition
            </span>
                    </h3>

                    <DateList items={competitionDates} />
                </div>
            </div>
        </section>
    )
}