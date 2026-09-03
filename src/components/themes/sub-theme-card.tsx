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
        <article className="flex min-h-[220px] flex-col rounded-[18px] bg-white p-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,0,0,.10)]">
            <h3 className="text-xl font-bold leading-none text-[#001431]">
                {title}
            </h3>

            <p className="mt-1 text-lg text-zinc-400">
                {label}
            </p>

            <button
                type="button"
                onClick={onViewMore}
                className="mt-auto pt-5 cursor-pointer"
            >
                <span className="flex min-h-[48px] items-center justify-center rounded-xl bg-[#f5f5f5] text-sm font-medium transition duration-500 hover:bg-[#023FFC] hover:font-bold hover:text-white">
                    View more
                </span>
            </button>
        </article>
    )
}