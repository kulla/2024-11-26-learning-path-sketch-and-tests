'use client'

import React from 'react'
import { Heading } from '@radix-ui/themes'

enum SlideId {
  Intro = 'intro',
  LernpfadKarte = 'lernpfad-karte',
  Lebensweltbezug = 'lebensweltbezug',
  VorwissenAktivieren = 'vorwissen-aktivieren',
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState<SlideId>(SlideId.Intro)

  return (
    <main className="p-4">
      <CurrentSlide />
    </main>
  )

  function CurrentSlide() {
    switch (currentSlide) {
      case SlideId.Intro:
        return <IntroSlide />
      case SlideId.LernpfadKarte:
        return <LernpfadKarteSlide />
      case SlideId.Lebensweltbezug:
        return <LebensweltbezugSlide />
      case SlideId.VorwissenAktivieren:
        return <VorwissenAktivierenSlide />
    }
  }

  function IntroSlide() {
    return (
      <Slide
        title="Intro"
        nextSlide={SlideId.LernpfadKarte}
        setCurrentSlide={setCurrentSlide}
      />
    )
  }
}

function Slide({
  title,
  nextSlide,
  setCurrentSlide,
}: {
  title: string
  nextSlide?: SlideId
  setCurrentSlide: (slide: SlideId) => void
}) {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <Heading>{title}</Heading>
      {nextSlide && (
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setCurrentSlide(nextSlide)}
        ></button>
      )}
    </div>
  )
}
