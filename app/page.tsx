'use client'

import {
  Deck,
  Slide as SpectacleSlide,
  Heading as SpectacleHeading,
  Markdown,
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
    content: (
      <>
        <Markdown>
          {`**Exercise:** Read the following statement and share your opinion on
          it with your neighbour. Use vocabulary from last lesson like “I
          agree,” “I think,” “I disagree,” “In my opinion”, “I don’t think”

          - "Cats are better than dogs."
          - "Homework should be banned."
          - "Video games are a waste of time."
          - "School should start later in the morning."
          `}
        </Markdown>
      </>
    ),
  },
  {
    id: 'vorwissen-aktivieren',
    title: 'Vorwissen aktivieren',
  },
]

export default function Home() {
  return (
    <main>
      <Deck theme={{ colors: { primary: '#000000' } }}>
        {slides.map((slide) => (
          <Slide key={slide.id} {...slide} />
        ))}
      </Deck>
    </main>
  )
}

function Slide({ title, content }: SlideProps) {
  return (
    <SpectacleSlide backgroundColor="#ffffff">
      <SpectacleHeading color="#000000">{title}</SpectacleHeading>
      {content}
    </SpectacleSlide>
  )
}
