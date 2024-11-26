'use client'

import { Deck, Slide, Heading as SpectacleHeading } from 'spectacle'

export default function Home() {
  return (
    <main>
      <Deck>
        <Slide backgroundColor="#ffffff">
          <SpectacleHeading color="#000000">
            Hello World Presentation
          </SpectacleHeading>
        </Slide>
      </Deck>
    </main>
  )
}
