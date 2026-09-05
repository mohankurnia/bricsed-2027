"use client"

import { useState } from "react"

import {
    mainThemes,
    paperThemes,
    subThemes,
} from "@/data/themes"

import { SubThemeCard } from "./sub-theme-card"
import { ThemeCard } from "./theme-card"
import { ThemeModal } from "./theme-modal"

type SelectedTheme = {
    id: string
    title: string
    label: string
    description: string
    thumbImage?: string
    sdgs: {
        id: number
        label: string
        image: string
    }[]
}

export function ThemesSection() {
    const [selectedTheme, setSelectedTheme] =
        useState<SelectedTheme | null>(null)

    return (
        <>
            <section
                id="themes"
                className="mx-4 md:mx-5 relative overflow-hidden bg-[#f6f6f6] py-10 text-white scroll-mt-10"
            >
                <div className="mx-auto container px-0 sm:px-10 md:px-20">
                    <h2 className="font-primary text-center font-normal text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic text-gradient-blue">
                        Themes
                    </h2>

                    <div className="mt-5 lg:mt-10">
                        <h3 className="text-xl sm:text-3xl lg:text-5xl font-bold text-center">
                            <span className="text-[#0aa31a]">International Conference</span>
                            {" "}
                            <span className="text-gradient-blue">Main Themes</span>
                        </h3>

                        <div className="mt-6 grid gap-5 lg:grid-cols-3">
                            {mainThemes.map((theme) => (
                                <ThemeCard
                                    key={theme.id}
                                    title={theme.title}
                                    thumbImage={theme.thumbImage}
                                    label={theme.label}
                                    onViewMore={() => setSelectedTheme(theme)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* SUB THEMES */}
                    <div className="mt-10">
                        <h3 className="font-primary text-xl sm:text-2xl lg:text-4xl text-center">
                            <span className="text-[#11990A]">International Conference</span>
                            {" "}
                            <span className="text-gradient-blue">Sub Themes</span>
                        </h3>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                            {subThemes.map((theme) => (
                                <SubThemeCard
                                    key={theme.id}
                                    title={theme.title}
                                    label={theme.label}
                                    image={theme.thumbImage}
                                    onViewMore={() => setSelectedTheme(theme)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* PAPER THEMES */}
                    <div className="mt-10">
                        <h3 className="font-primary text-xl sm:text-3xl lg:text-5xl text-center">
                            <span className="text-[#11990A]">International Paper</span>
                            {" "}
                            <span className="text-gradient-blue">Student Competition Themes</span>
                        </h3>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                            {paperThemes.map((theme) => (
                                <SubThemeCard
                                    key={theme.id}
                                    title={theme.title}
                                    label={theme.label}
                                    image={theme.thumbImage}
                                    onViewMore={() => setSelectedTheme(theme)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ThemeModal
                isOpen={selectedTheme !== null}
                title={selectedTheme?.title ?? ""}
                description={selectedTheme?.description ?? ""}
                sdgs={selectedTheme?.sdgs ?? []}
                onClose={() => setSelectedTheme(null)}
            />
        </>
    )
}