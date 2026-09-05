import Image from "next/image"

type SpeakerCardProps = {
    name: string
    image: string
    title: string
    variant?: "blue" | "green"
    status: string
}

const speakerVariantClasses = {
    blue: "bg-[linear-gradient(180deg,#f6f6f6_10%,#023FFC_110%)]",
    green: "bg-[linear-gradient(180deg,#f6f6f6_10%,#11990A_110%)]",
}

export function SpeakerCard({
                                name,
                                image,
                                title,
                                variant = "blue",
                                status
                            }: SpeakerCardProps) {
    return (
        <div className={`relative flex w-max-[300px] w-full h-100 overflow-hidden rounded-[20px] border-4 border-white transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,0,0,.10)] cursor-pointer ${speakerVariantClasses[variant]}`}>
            {/* Image area */}
            <div>
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-top drop-shadow-2xl"
                />
            </div>

            {/* Content */}
            <div className={`relative w-full h-[28%] bg-[#F6F6F6] border border-[#969696] mx-1.5 ${ status === `confirmed` ? `mb-1.5` : `mb-auto`} mt-auto py-2 px-4 rounded-2xl flex flex-col gap-2 justify-center items-center shadow-2xl`}>
                <h3 className="font-primary text-xl sm:text-2xl font-bold leading-none tracking-wide text-[#021431] text-center">
                    {name}
                </h3>

                <p className="text-[12px] lg:text-[14px] font-semibold leading-none text-[#969696] text-center">
                    {title}
                </p>
            </div>
        </div>
    )
}