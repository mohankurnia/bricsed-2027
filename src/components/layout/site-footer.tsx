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
        contactPerson: "John",
        contactLink: "#",
    },
    {
        label: "International Conference",
        icon: MessageCircle,
        contactPerson: "John",
        contactLink: "#",
    },
    {
        label: "International Student Paper Competition",
        icon: FileText,
        contactPerson: "John",
        contactLink: "#",
    },
]

const socials = [
    {
        media: "Email",
        icon: "/mail.png",
        mediaLink: "#",
    },
    {
        media: "Instagram",
        icon: "/instagram.png",
        mediaLink: "#",
    },
    {
        media: "Tiktok",
        icon: "/tiktok.png",
        mediaLink: "#",
    },
]

export function SiteFooter() {
    return (
        <footer
            id="contact"
            className="bg-[linear-gradient(180deg,rgba(246,246,246,1)_0%,rgba(2,63,252,.8)_30%,rgba(1,17,43,8)_100%)] text-white"
        >
            <div className="mx-auto container px-20 grid gap-12 py-16 md:grid-cols-2 md:items-center">
                <div>
                    <h2 className="text-6xl font-black text-shadow-lg">
                        Contact Us
                    </h2>

                    <div className="mt-8 space-y-2 flex">
                        {contacts.map(({ label, icon: Icon, contactPerson, contactLink }) => (
                            <div
                                key={label} 
                                className="
                                    flex flex-col gap-3
                                    
                                    max-w-60 h-55 w-full p-4
                                    rounded-md"
                            >
                                <div className="bg-[#01112B] w-fit p-3 rounded-full">    
                                    <Icon className="
                                        size-7"
                                    />
                                </div>
                                
                                <p className="text-[#F6F6F6] leading-none text-lg font-semibold">
                                    {label}
                                </p>

                                <a 
                                    href={`${contactLink}`}
                                    className="
                                        mt-auto text-md font-semibold text-center
                                        rounded-md px-4 py-2
                                        border border-white/10 
                                        bg-[#11990A] shadow-md
                                        transition hover:bg-[#1a8f14] hover:scale-105"
                                >
                                    Contact {contactPerson}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 h-full md:items-end">
                    <div className="w-64 shrink-0 sm:w-100">
                        <Image
                            src="/logos/bricsed-white-full-footer.png"
                            alt="BRICSED 2027"
                            width={340}
                            height={220}
                            className="h-auto w-full object-contain"
                        />
                    </div>

                    {/* Media Social */}
                    <div className="flex shrink-0 items-center justify-center gap-5">
                        {socials.map(({ media, icon, mediaLink }) => (
                            <a
                                key={media}
                                href={mediaLink}
                                aria-label={`Visit our ${media} page`}
                                title={media}
                                className="flex size-11 items-center justify-center rounded-full bg-[#f6f6f6] p-2.5 transition duration-300 hover:-translate-y-1 hover:bg-[#11990A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <Image
                                    src={icon}
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="size-6 object-contain"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}