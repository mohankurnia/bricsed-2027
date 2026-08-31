import Image from "next/image"
import {
    FileText,
    MessageCircle,
    Phone,
} from "lucide-react"

const contacts = [
    {
        label: "Main Contact",
        icon: Phone,
    },
    {
        label: "Contact Paper",
        icon: FileText,
    },
    {
        label: "Contact Conference",
        icon: MessageCircle,
    },
]

export function SiteFooter() {
    return (
        <footer
            id="contact"
            className="bg-gradient-to-b from-[#0645ff] to-[#001431] text-white"
        >
            <div className="mx-auto container px-3 grid gap-12 py-16 md:grid-cols-2 md:items-center">
                <div>
                    <h2 className="text-2xl font-black italic">
                        Contact Us
                    </h2>

                    <div className="mt-6 space-y-4">
                        {contacts.map(({ label, icon: Icon }) => (
                            <div
                                key={label}
                                className="grid max-w-sm grid-cols-[1fr_auto] items-center gap-5"
                            >
                                <div className="flex items-center gap-3 text-sm">
                                    <Icon className="size-5" />
                                    {label}
                                </div>

                                <a
                                    href="#"
                                    className="rounded-full border border-white/10 bg-[#00236c] px-4 py-2 text-xs shadow-lg transition hover:bg-[#063fe9]"
                                >
                                    Chat with John
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex md:justify-end">
                    <Image
                        src="/logos/bricsed-white-full.png"
                        alt="BRICSED 2027"
                        width={300}
                        height={120}
                        className="h-auto w-[250px]"
                    />
                </div>
            </div>
        </footer>
    )
}