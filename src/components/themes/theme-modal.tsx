/* eslint-disable @next/next/no-img-element */
"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"

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
    const [isMounted, setIsMounted] = useState(isOpen)
    const [isVisible, setIsVisible] = useState(false)
    const [modalContent, setModalContent] = useState({
        title,
        description,
        sdgs,
    })

    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setModalContent({ title, description, sdgs })
            setIsMounted(true)
            setIsVisible(false)
            return
        }

        setIsVisible(false)
        const timeout = window.setTimeout(() => setIsMounted(false), 500)
        return () => window.clearTimeout(timeout)
    }, [description, isOpen, sdgs, title])

    useEffect(() => {
        if (!isMounted || !isOpen) return

        const frame = requestAnimationFrame(() => setIsVisible(true))
        return () => cancelAnimationFrame(frame)
    }, [isMounted, isOpen])

    if (!isMounted) return null

    return (
            <div
                className={`fixed inset-0 z-999 flex items-center justify-center px-4 transition-opacity duration-500 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={!isVisible}
            >
            {/* overlay */}
            <div
                onClick={onClose}
                className={`absolute inset-0 bg-[#001431]/35 backdrop-blur-[2px]`}
            />

            {/* modal */}
            <div className="relative z-10 w-full max-w-180 overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                {/* green section */}
                <div className="relative bg-[#0aa31a] px-6 py-5 text-white">
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full cursor-pointer transition duration-300 hover:bg-white/10"
                        aria-label="Close modal"
                    >
                        <X size={26} />
                    </button>

                    <h3 className="font-primary pr-10 text-2xl leading-none">
                        {modalContent.title}
                    </h3>

                    <p className="mt-6 pr-4 text-[14px] leading-4 text-justify">
                        {modalContent.description}
                    </p>
                </div>

                {/* SDG title */}
                {modalContent.sdgs.length > 0 && (
                    <>
                        <div className="bg-[#0645ff] py-2 text-center text-sm font-bold text-white">
                            SDGs
                        </div>

                        <div className="flex justify-center gap-8 px-6 py-6">
                            {modalContent.sdgs.map((sdg, index) => (
                                <img
                                    key={`${sdg.id}-${index}`}
                                    src={sdg.image}
                                    alt={sdg.label}
                                    className="h-21.5 w-21.5 object-contain cursor-pointer transition-all duration-300 hover:scale-105"
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}