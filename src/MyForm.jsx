import { forwardRef, useRef, useImperativeHandle } from 'react'

// 他のコンポーネントの DOM ノード(子でも)へのアクセスを許可しないためにエラーに
// function MyInput(props) {
//   return <input {...props} />
// }

// forwardRef で、DOM入力要素を公開
const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null) // 実際の入力 DOM ノード
  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus()
    }
  }))
  return <input {...props} ref={realInputRef} />
})

export default function MyForm() {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus()
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  )
}