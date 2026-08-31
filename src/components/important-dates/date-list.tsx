type DateItem = {
    date: string
    title: string
}

type DateListProps = {
    items: DateItem[]
}

export function DateList({
                             items,
                         }: DateListProps) {
    return (
        <div>
            {items.map((item, index) => (
                <div
                    key={`${item.date}-${item.title}`}
                    className={[
                        "grid grid-cols-[130px_1fr] gap-20 py-4 md:grid-cols-[180px_1fr]",
                        index !== items.length - 1
                            ? "border-b border-[#001431]/30"
                            : "",
                    ].join(" ")}
                >
                    <p className="text-xl  text-zinc-400">
                        {item.date}
                    </p>

                    <p className="text-2xl font-bold leading-[1.05] tracking-[0.03em] text-[#001431]">
                        {item.title}
                    </p>
                </div>
            ))}
        </div>
    )
}