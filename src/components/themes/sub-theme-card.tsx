type SubThemeCardProps = {
    title: string
    label: string
    onViewMore: () => void
}

export function SubThemeCard({
                                 title,
                                 label,
                                 onViewMore,
                             }: SubThemeCardProps) {
    return (
        <article className="flex min-h-[220px] flex-col rounded-[18px] bg-white p-4">
            <h3 className="text-[18px] font-bold leading-[0.95] tracking-[-0.03em] text-[#001431]">
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
        <span className="flex min-h-[48px] items-center justify-center rounded-xl bg-[#f5f5f5] text-sm font-medium transition hover:bg-[#e8e8e8]">
          View more
        </span>
            </button>
        </article>
    )
}