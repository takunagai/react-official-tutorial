import { useState } from 'react'
import Letter from './MailClientLetter'
import { initialLetters } from './MailClientData'
// index.css にスタイル

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters)
  const [highlightedId, setHighlightedId] = useState(null)

  function handleHover(letterId) {
    setHighlightedId(letterId)
  }

  function handleStar(starredId) {
    setLetters(letters.map(letter => {
      if (letter.id === starredId) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        }
      } else {
        return letter
      }
    }))
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={letter.id === highlightedId}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  )
}