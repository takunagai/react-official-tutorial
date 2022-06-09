import { useRef } from 'react'

export default function Form10() {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus() // ブラウザ API のイベントが使える
    // inputRef.current.remove()
  }

  return (
    <>
      <input ref={inputRef} /> {/* この要素を inputRef.current に配置 */}
      <button onClick={handleClick}>Focus the input</button>
    </>
  )
}