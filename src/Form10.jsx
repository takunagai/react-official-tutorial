import { useRef } from 'react'

export default function Form10() {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus() // ブラウザ API のイベントが使える
    // inputRef.current.remove() // ブラウザ API のイベントが使える
  }

  return (
    <>
      <input ref={inputRef} /> {/* これでこの要素にブラウザ API のイベントを適用できる */}
      <button onClick={handleClick}>Focus the input</button>
    </>
  )
}