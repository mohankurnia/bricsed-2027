"use client"

import { useEffect, useState } from "react"

type CountdownTime = {
    days: number
    hours: number
    minutes: number
    seconds: number
}

const targetDate = new Date("2027-01-30T00:00:00+07:00").getTime()

function getRemainingTime(): CountdownTime {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
            (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
            (difference / 1000) % 60
        ),
    }
}

export function Countdown() {
    const [time, setTime] = useState<CountdownTime>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const updateTime = () => setTime(getRemainingTime())
        const initialUpdate = window.setTimeout(updateTime, 0)

        const interval = setInterval(() => {
            updateTime()
        }, 1000)

        return () => {
            window.clearTimeout(initialUpdate)
            clearInterval(interval)
        }
    }, [])

    const countdownItems = [
        { label: "Days", value: time.days },
        { label: "Hours", value: time.hours },
        { label: "Minutes", value: time.minutes },
        { label: "Seconds", value: time.seconds },
    ]

    return (
        <div data-aos="zoom-in" data-aos-delay="200" className="rounded-2xl bg-linear-to-b from-[#0ab314] to-[#06780d] px-4 md:px-16 py-5 shadow-xl">
            <h3 className="text-center text-[18px] md:text-2xl font-bold leading-none text-white">
                Countdown to Conference
            </h3>

            <div className="mt-5 grid grid-cols-4 gap-3">
                {countdownItems.map((item) => (
                    <div key={item.label} className="text-center">
                        <div className="flex aspect-square items-center justify-center rounded-xl bg-[#f7f7f7] px-2 text-[#001431] shadow-sm">
                            <span className="text-[30px] font-bold leading-none tracking-[-0.04em]">
                                {String(item.value).padStart(2, "0")}
                            </span>
                        </div>

                        <p className="mt-1.5 text-[12px] leading-none text-white">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}