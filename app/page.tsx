'use client'

import React from 'react'
import { Heading } from '@radix-ui/themes'

interface SlideProps {
  id: string
  title: string
  nextSlide?: string
  content?: React.ReactNode
}

const slides: SlideProps[] = [
  {
    id: 'lebensweltbezug',
    title: 'Lebensweltbezug herstellen',
    content: (
      <>
        <h1>Hello World</h1>
      </>
    ),
    nextSlide: 'vorwissen-aktivieren',
  },
  {
    id: 'vorwissen-aktivieren',
    title: 'Vorwissen aktivieren',
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState<SlideProps | null>(
    slides[0],
  )

  return (
    <main>
      <Slide {...currentSlide} />
    </main>
  )
}

function Slide({ title, content, nextSlide }: SlideProps) {
  return (
    <section>
      <Heading>{title}</Heading>
      {content}
      {nextSlide && (
        <button onClick={() => console.log('next slide')}>Next</button>
      )}
    </section>
  )
}
