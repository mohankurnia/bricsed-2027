type SubThemeCardProps = {
    title: string
}

export function SubThemeCard({
                                 title,
                             }: SubThemeCardProps) {
    return (
        <article className="flex min-h-[220px] flex-col rounded-[18px] bg-white p-4">
            <h3 className="text-[18px] font-bold leading-[0.95] tracking-[0.03em]">
                {title}
            </h3>

            <p className="mt-4 text-sm text-zinc-400">
                Sub Theme
            </p>

            <button
                type="button"
                className="mt-auto pt-5"
            >
        <span className="flex min-h-[48px] items-center justify-center rounded-xl bg-[#f5f5f5] text-sm font-medium">
          View more
        </span>
            </button>
        </article>
    )
}