"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
})

interface PasswordEntryProps {
  onCorrectPassword: () => void
}

export function PasswordEntry({ onCorrectPassword }: PasswordEntryProps) {
  const [date, setDate] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (date === "2024-10-03") {
      onCorrectPassword()
    } else {
      setError("You forgot? Try again :(")
    }
  }

  return (
    <div
      className={cn("min-h-screen flex flex-col items-center justify-center p-8", "bg-[#f6f3ee]", playfair.className)}
    >
      <div className="w-[400px] mx-auto p-8 border border-[#575279] rounded bg-white">
        <h1 className="text-2xl font-bold text-[#575279] mb-4 text-center">Enter password</h1>
        <p className="text-[#575279] mb-4 text-center">(the start of us)</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-[#575279] rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-[#ff6b6b] text-white rounded hover:bg-[#ff5252] transition-colors"
          >
            Submit
          </button>
        </form>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  )
}

