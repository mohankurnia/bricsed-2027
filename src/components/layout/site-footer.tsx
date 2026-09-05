import Image from "next/image"
import {
    FileText,
    MessageCircle,
} from "lucide-react"

const contacts = [
    // {
    //     label: "Main Contact",
    //     icon: Phone,
    //     contactPerson: "John",
    //     contactLink: "#",
    // },
    {
        label: "International Conference",
        icon: MessageCircle,
        contactPerson: "Kia",
        contactLink: "https://wa.me/+6282143126373",
    },
    {
        label: "International Student Paper Competition",
        icon: FileText,
        contactPerson: "Clara",
        contactLink: "https://wa.me/+6282112574665",
    },
]

const socials = [
    {
        media: "Email",
        name: "bricsed@ub.ac.id",
        icon: "/mail.png",
        mediaLink: "https://mail.google.com/mail/?view=cm&fs=1&to=bricsed%40ub.ac.id",
    },
    {
        media: "Instagram",
        name: "bricsed_official",
        icon: "/instagram.png",
        mediaLink: "https://www.instagram.com/bricsed_official/",
    },
    {
        media: "Tiktok",
        name: "@bricsed_official",
        icon: "/tiktok.png",
        mediaLink: "https://www.tiktok.com/@bricsed_official",
    },
]

export function SiteFooter() {
    return (
        <footer
            id="contact"
            className="bg-[linear-gradient(180deg,rgba(246,246,246,1)_0%,rgba(2,63,252,.8)_30%,rgba(1,17,43,8)_100%)] text-white"
        >
            <div className="mx-auto container px-3 md:px-10 lg:px-20 grid gap-6 md:gap-12 py-16 lg:grid-cols-2 lg:items-center">
                <div>
                    <h2 data-aos="fade-up" className="text-center lg:text-left text-5xl lg:text-6xl font-black text-shadow-lg">
                        Contact Us
                    </h2>

                    <div className="mt-4 md:mt-8 space-y-2 flex items-stretch justify-center lg:justify-start">
                        {contacts.map(({ label, icon: Icon, contactPerson, contactLink }) => (
                            <div
                                key={label} 
                                className="
                                    flex flex-col gap-3
                                    max-w-60 w-full h-55 p-4
                                    rounded-md"
                                    data-aos="fade-right"
                            >
                                <div className="bg-[#01112B] w-fit p-3 rounded-full">    
                                    <Icon className="
                                        size-5 md:size-7"
                                    />
                                </div>
                                
                                <p className="text-[#F6F6F6] leading-none text-[16px] md:text-lg font-semibold">
                                    {label}
                                </p>

                                <a 
                                    href={`${contactLink}`}
                                    target="_blank"
                                    className="
                                        mt-auto text-xs md:text-lg font-semibold text-center
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

                <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-6 h-full md:items-end">
                    <div data-aos="fade-up" className="w-64 shrink-0 sm:w-100">
                        <Image
                            src="/logos/bricsed-white-full-footer.png"
                            alt="BRICSED 2027"
                            width={340}
                            height={220}
                            className="h-auto w-full object-contain"
                        />
                    </div>

                    {/* Media Social */}
                    <div data-aos="zoom-in" className="flex flex-col shrink-0 items-center justify-end gap-4 md:gap-3">
                        {socials.map(({ media, name, icon, mediaLink }) => (
                            <div key={media} className="flex flex-row-reverse md:flex-row gap-4 items-center justify-end w-full">
                                <p>{name}</p>
                                <a
                                    href={mediaLink}
                                    target="_blank"
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}