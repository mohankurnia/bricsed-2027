import Image from "next/image"

type ThemeCardProps = {
    title: string
    thumbImage: string
    label: string
    onViewMore: () => void
}

export function ThemeCard({
                        title,
                        thumbImage,
                        label,
                        // onViewMore,
                    }: ThemeCardProps) {
    return (
        <article className="flex h-full flex-col rounded-[18px] bg-white p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,0,0,.10)]">
            <div className="relative aspect-4/1 lg:aspect-[2.15/1] overflow-hidden rounded-xl">
                <Image
                    src={thumbImage}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <h3 className="mt-4 text-3xl md:text-4xl font-bold text-[#001431]">
                {title}
            </h3>

            <p className="mt-1 text-md md:text-lg text-zinc-400">
                {label}
            </p>

            {/* <button
                type="button"
                onClick={onViewMore}
                className="mt-auto pt-5 cursor-pointer"
            >
                <span className="flex min-h-[50px] items-center justify-center rounded-xl bg-[#f5f5f5] text-[15px] font-medium transition duration-500 hover:bg-[#023FFC] hover:font-bold hover:text-white">
                    View more
                </span>
            </button> */}
        </article>
    )
}