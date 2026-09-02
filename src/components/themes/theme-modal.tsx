"use client"

import { X } from "lucide-react"

type Sdg = {
    id: number
    label: string
    image: string
}

type ThemeModalProps = {
    isOpen: boolean
    title: string
    description: string
    sdgs: Sdg[]
    onClose: () => void
}

export function ThemeModal({
                               isOpen,
                               title,
                               description,
                               sdgs,
                               onClose,
                           }: ThemeModalProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
            {/* overlay */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-[#001431]/35 backdrop-blur-[2px]"
            />

            {/* modal */}
            <div className="relative z-10 w-full max-w-[500px] overflow-hidden rounded-[16px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                {/* green section */}
                <div className="relative bg-[#0aa31a] px-6 py-5 text-white">
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full transition hover:bg-white/10"
                        aria-label="Close modal"
                    >
                        <X size={26} />
                    </button>

                    <h3 className="font-primary pr-10 text-[24px] leading-none">
                        {title}
                    </h3>

                    <p className="mt-3 pr-4 text-[12px] leading-[1.05]">
                        {description}
                    </p>
                </div>

                {/* SDG title */}
                {sdgs.length > 0 && (
                    <>
                        <div className="bg-[#0645ff] py-2 text-center text-sm font-bold text-white">
                            SDGs
                        </div>

                        <div className="flex justify-center gap-8 px-6 py-6">
                            {sdgs.map((sdg) => (
                                <img
                                    key={sdg.id}
                                    src={sdg.image}
                                    alt={sdg.label}
                                    className="h-[86px] w-[86px] object-contain"
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}