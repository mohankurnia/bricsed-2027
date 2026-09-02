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
                className="bg-[#f6f6f6] py-20"
            >
                <div className="container mx-auto">
                    <h2 className="font-primary text-gradient-blue text-center text-5xl italic md:text-6xl">
                        Themes
                    </h2>

                    {/* MAIN THEMES */}
                    <div className="mt-16">
                        <h3 className="font-primary text-3xl md:text-4xl">
                            <span className="text-[#11990A]">
                                 Conference
                            </span>{" "}
                            <span className="text-[#0239E0]">
                                Main Themes
                            </span>
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
                    <div className="mt-20">
                        <h3 className="font-primary text-3xl md:text-4xl">
                            <span className="text-[#11990A]">
                                 Conference
                            </span>{" "}
                            <span className="text-[#0239E0]">
                                Sub Themes
                            </span>
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
                    <div className="mt-20">
                        <h3 className="font-primary text-3xl md:text-4xl">
                            <span className="text-[#11990A]">
                                 Paper
                            </span>{" "}
                            <span className="text-[#0239E0]">
                                Themes
                            </span>
                        </h3>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                            {paperThemes.map((theme) => (
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