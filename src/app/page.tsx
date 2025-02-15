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

  const now = new Date();
  if (now < new Date("2025-02-14T00:00:00Z")) {
    return (
      <div
      className={cn("min-h-screen flex flex-col items-center justify-center p-8", "bg-[#f6f3ee]", playfair.className)}
    >
      <div className="w-[400px] mx-auto p-8 border border-[#575279] rounded bg-white">
        <h1 className="text-2xl font-bold text-[#575279] mb-4 text-center">Wait &apos;til Valentine&apos;s Day!</h1>
        <p className="text-3xl text-center">💌</p>
      </div>
    </div>
    )
  }

  if (!isAuthenticated) {
    return <PasswordEntry onCorrectPassword={handleCorrectPassword} />
  }

  return (
    <>
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
