"use client"

import { useEffect } from "react"
import AOS from "aos"

export function AosProvider() {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
            once: false,
            offset: 80,
        })

        return () => AOS.refresh()
    }, [])

    return null
}
