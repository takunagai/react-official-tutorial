import { useState } from 'react'

export default function App() {
  const [showHint, setShowHint] = useState(false)

  return (
    <>
      {showHint && <p><i>Hint: Your favorite city?</i></p>}
      <Form />
      <button onClick={() => {
        setShowHint(!showHint)
      }}>Show hint</button>
    </>
  )
}

function Form() {
  const [text, setText] = useState('')
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  )
}
