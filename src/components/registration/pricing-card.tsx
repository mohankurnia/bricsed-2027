type PricingCardProps = {
    title: string
    prices: string[][]
}

export function PricingCard({
                                title,
                                prices,
                            }: PricingCardProps) {
    return (
        <div className="overflow-hidden text-2xl rounded-xl bg-[#f6f6f6]">
            <div className="bg-gradient-to-b from-[#001431] to-[#07319b] px-5 py-4 text-center font-bold text-white">
                {title}
            </div>

            <div className="space-y-5 p-5">
                {prices.map(([label, price]) => (
                    <div
                        key={label}
                        className="grid grid-cols-[1fr_auto] items-center gap-5 hover:scale-101 transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex items-center gap-2 text-2xl font-bold leading-[0.9] text-[#063fe9]">
                            <span className="mt-1 size-2 shrink-0 rounded-full bg-[#0aa31a]" />
                            {label}
                        </div>

                        <strong className="text-2xl text-[#001431]">
                            {price}
                        </strong>
                    </div>
                ))}
            </div>
        </div>
    )
}