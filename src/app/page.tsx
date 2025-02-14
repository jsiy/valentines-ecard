"use client"

import { useState } from "react"
import { Playfair_Display } from "next/font/google"
import { cn } from "@/lib/utils"
import { Letter } from "@/components/Letter"
import { PasswordEntry } from "@/components/PasswordEntry"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
})

export default function Home() {
  const [started, setStarted] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleCorrectPassword = () => {
    setIsAuthenticated(true)
  }

  const handleStart = () => {
    setStarted(true)
  }

  if (!isAuthenticated) {
    return <PasswordEntry onCorrectPassword={handleCorrectPassword} />
  }

  return (
    <>
    <head>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐧</text></svg>"></link>
    </head>
    <main
      className={cn("min-h-screen flex flex-col items-center justify-center p-8", "bg-[#f6f3ee]", playfair.className)}
    >
      {!started ? (
        <button
          onClick={handleStart}
          className="text-4xl text-[#4a4a4a] hover:text-[#ff6b6b] transition-colors cursor-pointer"
        >
          gdmornigfn
        </button>
      ) : (
        <Letter />
      )}
    </main>
    </>
  )
}

