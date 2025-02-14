"use client"

import { useState, useEffect } from "react"
import { Word } from "@/components/Word"
import Image from "next/image"

const letter = [
  { text: "Happy Valentine's day Richie,", isTitle: true, newLine: true },
  { text: "I" },
  { text: "can't" },
  { text: "believe" },
  { text: "it's" },
  { text: "been" },
  { text: "four" },
  { text: "months" },
  { text: "of" },
  { text: "dating", interactive: true, options: ["dating", "you and me", "togetherness", "us", "us"] },
  { text: "already.", newLine: true },
  { text: "You’re" },
  { text: "someone" },
  { text: "I" },
  { text: "thought" },
  { text: "was" },
  { text: "out" },
  { text: "of" },
  { text: "reach" },
  { text: "for" },
  { text: "me" },
  { text: "initially," },
  { text: "but" },
  { text: "as" },
  { text: "I" },
  { text: "got" },
  { text: "to" },
  { text: "know" },
  { text: "you," },
  { text: "you" },
  { text: "became" },
  { text: "more" },
  { text: "down-to-earth", interactive: true, options: ["down-to-earth", "whole", "human", "human."] },
  { text: "There's" },
  { text: "so" },
  { text: "much" },
  { text: "to" },
  { text: "admire" },
  { text: "about" },
  { text: "you" },
  { text: "—" },
  { text: "your" },
  { text: "optimism", newLine: true, interactive: true, options: ["optimism", "kindness", "drive", "cuteness", "propensity for making people like you", "bright and positive energy", "holistic mindset and worldview", "whole being, inward and outward", "whole being, inward and outward."] },
  { text: "You" },
  { text: "bring" },
  { text: "a" },
  { text: "lot" },
  { text: "of" },
  { text: "joy" },
  { text: "into" },
  { text: "my" },
  { text: "life" },
  { text: "and" },
  { text: "I’m" },
  { text: "so" },
  { text: "grateful" },
  { text: "for" },
  { text: "you" },
  { text: "and" },
  { text: "proud" },
  { text: "to" },
  { text: "call" },
  { text: "you" },
  { text: "mine." },
  { text: "We’ve" },
  { text: "already" },
  { text: "made" },
  { text: "so" },
  { text: "many" },
  { text: "good" },
  { text: "memories" },
  { text: "together" },
  { text: "and" },
  { text: "I" },
  { text: "can’t" },
  { text: "wait" },
  { text: "to" },
  { text: "spend time with you", interactive: true, options: ["travel with you", "eat yummy food with you", "discover new things with you", "go to new places with you", "learn more about you", "make so many more with you", "make so many more with you."] },
  { text: "I" },
  { text: "can’t" },
  { text: "help" },
  { text: "but" },
  { text: "smile" },
  { text: "every" },
  { text: "time" },
  { text: "I" },
  { text: "think" },
  { text: "of" },
  { text: "you" },
  { text: "and" },
  { text: "everytime" },
  { text: "I" },
  { text: "hear" },
  { text: "from" },
  { text: "you." },
  { text: "I’ve" },
  { text: "grown" },
  { text: "to" },
  { text: "love" },
  { text: "you" },
  { text: "so," },
  { text: "much", newLine: true, interactive: true, options: ["much", "much more than I thought I could", "much more than I thought I would", "so much", "so much."] },
  { text: "Although" },
  { text: "this" },
  { text: "year" },
  { text: "I" },
  { text: "couldn’t" },
  { text: "be" },
  { text: "with" },
  { text: "you" },
  { text: "in" },
  { text: "person," },
  { text: "and" },
  { text: "I" },
  { text: "couldn’t" },
  { text: "get" },
  { text: "you" },
  { text: "flowers," },
  { text: "I" },
  { text: "hope" },
  { text: "you" },
  { text: "still" },
  { text: "appreciate" },
  { text: "this" },
  { text: "card.", newLine: true },
  { text: "I" },
  { text: "love" },
  { text: "you." },
  { text: "Happy" },
  { text: "Valentine’s" },
  { text: "day" },
  { text: "Richie.", newLine: true  },
  { text: "Love," },
];


export function Letter() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [waitingForInteraction, setWaitingForInteraction] = useState(false)
  const [interactiveWords, setInteractiveWords] = useState<{ [key: number]: string }>({})
  const [currentInteractiveIndex, setCurrentInteractiveIndex] = useState<number | null>(null)

  useEffect(() => {
    if (waitingForInteraction) return

    if (currentIndex < letter.length) {
      const timer = setTimeout(() => {
        if (letter[currentIndex].interactive || letter[currentIndex].isTitle) {
          setWaitingForInteraction(true)
          if (letter[currentIndex].interactive) {
            setCurrentInteractiveIndex(currentIndex)
          }
        } else {
          setCurrentIndex((prev) => prev + 1)
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, waitingForInteraction])

  const handleWordInteraction = (index: number, finalWord: string) => {
    setWaitingForInteraction(false)
    setCurrentIndex((prev) => prev + 1)
    setCurrentInteractiveIndex(null)
    if (finalWord) {
      setInteractiveWords((prev) => ({ ...prev, [index]: finalWord }))
    }
  }

  return (
    <div className="w-[800px] mx-auto p-8 border border-[#575279] rounded">
      <p className="text-lg text-[#575279] whitespace-pre-wrap break-words">
        {letter.map((item, index) => (
          <>
            <Word
              key={index}
              {...item}
              onInteraction={(finalWord) => handleWordInteraction(index, finalWord)}
              isWaiting={waitingForInteraction}
              isVisible={index <= currentIndex}
              finalWord={interactiveWords[index]}
              isCurrentInteractive={index === currentInteractiveIndex}
            />{item.newLine ? (<><br /> <br /></>) : " "}
          </>
        ))}
      </p>
      {currentIndex === letter.length && (
          <>
            <div className="flex justify-between mt-4">
              <div className="w-1/2">
                <Image src="/signature.png" alt="signature" width={150} height={150} />
              </div>
              <div className="w-1/2 translate-y-[-100px] translate-x-[100px]">
                <Image src="/roses.png" alt="roses" width={250} height={250} />
              </div>
            </div>
          </>
        )}
    </div>
  )
}

