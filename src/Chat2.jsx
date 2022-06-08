import { useState, useRef } from 'react'

export default function Chat() {
  const [text, setText] = useState('')
  const textRef = useRef(text)

  function handleChange(e) {
    setText(e.target.value)
    textRef.current = e.target.value
  }

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + textRef.current)
    }, 3000)
  }

  return (
    <>
      <input
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleSend}>Send</button><br />
      <p><small>入力して Send → アラートが表示されるまでの間に内容を変更 → 変更がアラートに反映されている</small></p>
    </>
  )
}
