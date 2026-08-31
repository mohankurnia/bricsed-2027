import Image from "next/image"

type ThemeCardProps = {
    title: string
    image?: string
    label?: string
}

export function ThemeCard({
                              title,
                              image,
                              label = "Main Theme",
                          }: ThemeCardProps) {
    return (
        <article className="flex h-full flex-col rounded-[18px] bg-white p-4">
            {image && (
                <div className="relative aspect-[2.15/1] overflow-hidden rounded-[12px] bg-zinc-200">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h3 className="mt-4 text-xl font-medium leading-[0.95] tracking-[0.04em] text-[#001431]">
                {title}
            </h3>

            <p className="mt-4 text-sm text-zinc-400">
                {label}
            </p>

            <button
                type="button"
                className="mt-auto pt-5"
            >
        <span className="flex min-h-[50px] items-center justify-center rounded-xl bg-[#f5f5f5] text-[15px] font-medium transition hover:bg-[#ececec]">
          View more
        </span>
            </button>
        </article>
    )
}