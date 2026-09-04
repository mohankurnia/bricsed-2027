import { DateList } from "@/components/important-dates/date-list"

import {
    competitionDates,
    conferenceDates,
} from "@/data/important-dates"

export function ImportantDatesSection() {
    return (
        <section className="bg-[#f6f6f6] py-10 mx-auto container px-3">
            <div className="mx-auto">
                <h2 className="font-primary text-center font-normal text-8xl italic text-gradient-blue">
                    Important Dates
                </h2>
                
                <div className="flex flex-col gap-4 mt-10 px-20">
                    <h3 className="text-3xl font-bold md:text-5xl">
                        <span className="text-gradient-blue">
                            International
                        </span>{" "}
                                    <span className="text-[#11990A]">
                            Conference
                        </span>
                    </h3>

                    <DateList
                        items={conferenceDates.map((item) => ({
                            ...item,
                            status: item.status as "now" | "not yet",
                        }))}
                    />
                </div>

                <div className="flex flex-col gap-4 mt-10 px-20">
                    <h3 className="text-3xl font-bold md:text-5xl">
                        <span className="text-gradient-blue">
                            International Paper
                        </span>{" "}
                                    <span className="text-[#0aa31a]">
                            Student Competition
                        </span>
                    </h3>

                    <DateList
                        items={competitionDates.map((item) => ({
                            ...item,
                            status: item.status as "now" | "not yet",
                        }))}
                    />
                </div>
            </div>
        </section>
    )
}