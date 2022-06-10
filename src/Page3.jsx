import { useRef } from 'react'

export default function Page3() {
  const inputRef = useRef(null)

  return (
    <>
      <nav>
        <button onClick={() => inputRef.current.focus()}>
          Search
        </button>
      </nav>
      <input
        ref={inputRef}
        placeholder="Looking for something?"
      />
    </>
  )
}
