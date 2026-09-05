type DateItem = {
    date: string
    title: string
    status: "now" | "not yet"
}

type DateListProps = {
    items: DateItem[]
}

export function DateList({
                            items,
                        }: DateListProps) {
    return (
        <div data-aos="zoom-in" data-aos-delay="200">
            {items.map((item, index) => (
                <div
                    key={`${item.date}-${item.title}`}
                    className={[
                        "grid grid-cols-[100px_1fr] py-4 px-4 md:px-8 gap-5 md:gap-10 lg:gap-20 items-center md:grid-cols-[200px_1fr_100px] lg:grid-cols-[300px_1fr_100px] hover:py-8 transition-all duration-300 cursor-pointer",
                        index !== items.length - 1
                            ? "border-b border-[#001431]/30"
                            : "",
                    ].join(" ")}
                >
                    <p className="text-md md:text-lg lg:text-xl text-zinc-500">
                        {item.date}
                    </p>

                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#001431]">
                        {item.title}
                    </p>

                    <p className={`
                        ${item.status === "now" ? "block" : "hidden"}
                        col-span-2 md:col-span-1
                        text-xl font-bold text-white text-center
                        px-4 py-2 justify-center items-center rounded-full 
                        bricsed-gradient shadow-[inset_0px_8px_60px_rgba(0,0,0,.3)]
                    `}>
                            NOW
                    </p>
                </div>
            ))}
        </div>
    )
}