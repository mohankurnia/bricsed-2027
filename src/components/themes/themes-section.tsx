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
    image?: string
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
                className="bg-[#f6f6f6] py-10 scroll-mt-10"
            >
                <div className="mx-auto container px-20">
                    <h2 className="font-primary text-center font-normal text-8xl italic text-gradient-blue">
                        Themes
                    </h2>

                    <div className="mt-10">
                        <h3 className="text-3xl font-bold text-center md:text-5xl">
                            <span className="text-[#0aa31a]">International Conference</span>
                            {" "}
                            <span className="text-gradient-blue">Main Themes</span>
                        </h3>

                        <div className="mt-6 grid gap-5 md:grid-cols-3">
                            {mainThemes.map((theme) => (
                                <ThemeCard
                                    key={theme.id}
                                    title={theme.title}
                                    image={theme.image}
                                    label={theme.label}
                                    onViewMore={() => setSelectedTheme(theme)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* SUB THEMES */}
                    <div className="mt-10">
                        <h3 className="font-primary text-3xl text-center md:text-4xl">
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
                                    onViewMore={() => setSelectedTheme(theme)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* PAPER THEMES */}
                    <div className="mt-10">
                        <h3 className="font-primary text-3xl text-center md:text-5xl">
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