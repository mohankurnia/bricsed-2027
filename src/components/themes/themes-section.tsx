import { SubThemeCard } from "@/components/themes/sub-theme-card"
import { ThemeCard } from "@/components/themes/theme-card"

import {
    mainThemes,
    paperThemes,
    subThemes,
} from "@/data/themes"

export function ThemesSection() {
    return (
        <section
            id="themes"
            className="bg-[#f6f6f6] py-20"
        >
            <div className="mx-auto container px-3">
                <h2 className="font-primary text-center font-normal text-8xl italic text-gradient-blue leading-normal">
                    Themes
                </h2>

                <div className="mt-16">
                    <h3 className="text-3xl font-bold tracking-[0.04em] md:text-4xl">
            <span className="text-[#0aa31a]">
                Conference
            </span>{" "}
                        <span className="text-[#073fc9]">
              Main Themes
            </span>
                    </h3>

                    <div className="mt-6 grid gap-5 md:grid-cols-3">
                        {mainThemes.map((theme) => (
                            <ThemeCard
                                key={theme.id}
                                title={theme.title}
                                image={theme.image}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-bold tracking-[0.04em]">
            <span className="text-[#0aa31a]">
              Conference
            </span>{" "}
                        <span className="text-[#073fc9]">
              Sub Themes
            </span>
                    </h3>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {subThemes.map((theme) => (
                            <SubThemeCard
                                key={theme}
                                title={theme}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-bold tracking-[0.04em]">
            <span className="text-[#0aa31a]">
             International Student Paper Competition
            </span>{" "}
                        <span className="text-[#073fc9]">
              Themes
            </span>
                    </h3>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {paperThemes.map((theme) => (
                            <ThemeCard
                                key={theme.id}
                                title={theme.title}
                                image={theme.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}