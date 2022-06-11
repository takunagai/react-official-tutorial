import { useState } from 'react'
import Letter from './MailClientLetter'
import { letters } from './MailClientData'
// index.css にスタイル

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState([])

  const selectedCount = selectedIds.length

  function handleToggle(toggledId) {
    // 以前に選択されていたか？
    if (selectedIds.includes(toggledId)) {
      // 次に、この ID をアレイから削除
      setSelectedIds(selectedIds.filter(id =>
        id !== toggledId
      ))
    } else {
        // それ以外の場合は、この ID を配列に追加
        setSelectedIds([
            ...selectedIds,
            toggledId
        ])
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.includes(letter.id)}
            onToggle={handleToggle}
          />
        ))}
      </ul>
      <hr />
      <p><b>You selected {selectedCount} letters</b></p>
    </>
  )
}