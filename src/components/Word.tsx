"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface WordProps {
  text: string
  isTitle?: boolean
  interactive?: boolean
  options?: string[]
  onInteraction: (finalWord: string) => void
  isWaiting: boolean
  isVisible: boolean
  finalWord?: string
  isCurrentInteractive?: boolean
}

export function Word({
  text,
  isTitle,
  interactive,
  options,
  onInteraction,
  isWaiting,
  isVisible,
  finalWord,
  isCurrentInteractive,
}: WordProps) {
  const [currentOption, setCurrentOption] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (finalWord && options) {
      setCurrentOption(options.indexOf(finalWord))
    }
  }, [finalWord, options])

  const handleClick = () => {
    if (interactive && options) {
      const nextOption = (currentOption + 1) % options.length
      setCurrentOption(nextOption)
      if (nextOption === options.length - 1) {
        onInteraction(options[nextOption])
      }
    } else if (isTitle || interactive) {
      onInteraction("")
    }
  }

  const displayText = finalWord || (interactive && options ? options[currentOption] : text)

  return (
    <span
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "inline-block transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0",
        isTitle && "font-bold text-[#ff6b6b]",
        (isTitle || (interactive && isCurrentInteractive)) && isWaiting && "cursor-pointer",
        interactive && isCurrentInteractive && isWaiting && "relative transition-all duration-300",
        interactive && isWaiting && "relative transition-all duration-300",
        interactive &&
          isCurrentInteractive &&
          isWaiting &&
          "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-[#e6a4a4] after:opacity-30 after:transition-opacity after:duration-300",
        isHovered && interactive && isCurrentInteractive && isWaiting && "after:opacity-60",
      )}
    >
      {displayText}
    </span>
  )
}

