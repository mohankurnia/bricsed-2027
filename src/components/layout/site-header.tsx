"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { navigation } from "@/data/navigation"

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40)
        }

        handleScroll()

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header
            className={[
                "fixed inset-x-0 top-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-[#001431]/50 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl"
                    : "bg-transparent",
            ].join(" ")}
        >
            <div
                className={[
                    "container mx-auto p-5 flex w-[min(1240px,calc(100%-48px))] items-center justify-between transition-all duration-300",
                    isScrolled ? "h-[72px]" : "h-35",
                ].join(" ")}
            >
                {/* Logo */}
                <Link href="#home" aria-label="BRICSED 2027 Home">
                    <Image
                        src="/logos/bricsed-white-full.png"
                        alt="BRICSED 2027"
                        width={190}
                        height={70}
                        priority
                        className={[
                            "h-auto object-contain transition-all duration-300",
                            isScrolled
                                ? "w-[145px]"
                                : "w-[175px] md:w-[190px]",
                        ].join(" ")}
                    />
                </Link>

                {/* Desktop navigation */}
                <nav className="hidden items-center gap-10 lg:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className=" text-[15px] font-medium text-white/70 transition-all duration-300 hover:text-white hover:[text-shadow:0_0_40px_#F6F6F6,0_0_30px_#F6F6F6]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile */}
                <details className="relative lg:hidden">
                    <summary className="cursor-pointer list-none rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white">
                        Menu
                    </summary>

                    <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-white/10 bg-[#001431]/95 p-3 shadow-2xl backdrop-blur-xl">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </details>
            </div>
        </header>
    )
}