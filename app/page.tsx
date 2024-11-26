'use client'

import {
  Deck,
  Slide as SpectacleSlide,
  Heading as SpectacleHeading,
} from 'spectacle'

export default function Home() {
  return (
    <main>
      <Deck>
        <Slide>
          <Heading>Hello World Presentation</Heading>
        </Slide>
      </Deck>
    </main>
  )
}

function Slide({ children }: { children: React.ReactNode }) {
  return <SpectacleSlide backgroundColor="#ffffff">{children}</SpectacleSlide>
}

function Heading({ children }: { children: React.ReactNode }) {
  return <SpectacleHeading color="#000000">{children}</SpectacleHeading>
}
