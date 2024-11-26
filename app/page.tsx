'use client'

import {
  Deck,
  Slide as SpectacleSlide,
  Heading as SpectacleHeading,
} from 'spectacle'

interface SlideProps {
  id: string
  title: string
  content?: React.ReactNode
}

const slides: SlideProps[] = [
  {
    id: 'lebensweltbezug',
    title: 'Lebensweltbezug herstellen',
  },
  {
    id: 'vorwissen-aktivieren',
    title: 'Vorwissen aktivieren',
  },
]

export default function Home() {
  return (
    <main>
      <Deck>
        {slides.map((slide) => (
          <Slide key={slide.id} {...slide} />
        ))}
      </Deck>
    </main>
  )
}

function Slide({ title }: SlideProps) {
  return (
    <SpectacleSlide backgroundColor="#ffffff">
      <Heading>{title}</Heading>
    </SpectacleSlide>
  )
}

function Heading({ children }: { children: React.ReactNode }) {
  return <SpectacleHeading color="#000000">{children}</SpectacleHeading>
}
