import { useState } from 'react'

function Field({ label }) {
  const [text, setText] = useState('')
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  )
}


export default function App() {
  const [reverse, setReverse] = useState(false)

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  )

  if (reverse) {
    return (
      <>
        <Field key="lastName" label="Last name" /><br />
        <Field key="firstName" label="First name" /><br />
        {checkbox}
      </>
    )
  } else {
    return (
      <>
        <Field key="firstName" label="First name" /><br />
        <Field key="lastName" label="Last name" /><br />
        {checkbox}
      </>
    )
  }
}
