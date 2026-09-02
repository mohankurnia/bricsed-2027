import Image from "next/image"

type ThemeCardProps = {
    title: string
    image: string
    label: string
    onViewMore: () => void
}

export function ThemeCard({
                              title,
                              image,
                              label,
                              onViewMore,
                          }: ThemeCardProps) {
    return (
        <article className="flex h-full flex-col rounded-[18px] bg-white p-4">
            <div className="relative aspect-[2.15/1] overflow-hidden rounded-[12px]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <h3 className="mt-4 text-[29px] font-medium leading-[0.95] tracking-[-0.04em] text-[#001431]">
                {title}
            </h3>

            <p className="mt-4 text-sm text-zinc-400">
                {label}
            </p>

            <button
                type="button"
                onClick={onViewMore}
                className="mt-auto pt-5"
            >
        <span className="flex min-h-[50px] items-center justify-center rounded-xl bg-[#f5f5f5] text-[15px] font-medium transition hover:bg-[#e8e8e8]">
          View more
        </span>
            </button>
        </article>
    )
}