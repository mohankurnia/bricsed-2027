import Image from "next/image"

type SpeakerCardProps = {
    name: string
    image: string
    description: string
}

export function SpeakerCard({
                                name,
                                image,
                                description,
                            }: SpeakerCardProps) {
    return (
        <article className="relative overflow-hidden rounded-[18px] bg-[#f5f5f5]">
            {/* Image area */}
            <div className="relative h-[250px]">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-top"
                />

                {/* Fade image ke card */}
                <div className="absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-b from-transparent to-[#f5f5f5]" />
            </div>

            {/* Content */}
            <div className="relative -mt-5 px-4 pb-5">
                <h3 className="font-primary text-[25px] leading-none tracking-[-0.03em] text-[#001431]">
                    {name}
                </h3>

                <p className="mt-2 text-[11px] leading-[1.05] text-[#9b9b9b]">
                    {description}
                </p>
            </div>
        </article>
    )
}