import { useState, useRef } from 'react'

export default function Chat() {
  const [text, setText] = useState('')
  const [isSending, setIsSending] = useState(false)
  // let timeoutID = null // 再レンダリング間で存続しない
  let timeoutRef = useRef(null) // → 参照(存続、変更で再レンダリング発生しない)に保存

  function handleSend() {
    setIsSending(true)
    timeoutRef.current = setTimeout(() => {
      alert('Sent!')
      setIsSending(false)
    }, 3000)
  }

  function handleUndo() {
    setIsSending(false)
    clearTimeout(timeoutRef.current)
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending && <button onClick={handleUndo}>Undo</button>}
    </>
  )
}
