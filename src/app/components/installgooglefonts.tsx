"use client"

import { useEffect } from "react"

export default function GoogleFonts() {
    useEffect(() =>{
        //@ts-ignore
        import("next/font/google")
      })

    return<></>
}