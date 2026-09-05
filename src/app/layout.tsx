import type { Metadata } from "next"
import localFont from "next/font/local"
import { Instrument_Sans } from "next/font/google"

import { AosProvider } from "@/components/providers/aos-provider"
import "./globals.css"


const coolvetica = localFont({
    src: "./fonts/coolvetica.ttf",
    variable: "--font-coolvetica",
    display: "swap",
})

const instrumentSans = Instrument_Sans({
    subsets: ["latin"],
    variable: "--font-instrument-sans",
    display: "swap",
})

export const metadata: Metadata = {
    title: "BRICSED 2027",
    description:
        "1st Brawijaya International Conference on Sustainability, Energy, and Development",
}

export default function RootLayout({
                                    children,
                                }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <body
            className={`${coolvetica.variable} ${instrumentSans.variable}`}
        >
        <AosProvider />
        {children}
        </body>
        </html>
    )
}