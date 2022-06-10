import { useState, useRef } from 'react'

export default function Counter8() {
  const [show, setShow] = useState(true)
  const ref = useRef(null)

  return (
    <>
      <p><small>問題が発生する例。DOM削除ボタン押した後、おかしくなる。React に管理させている要素の変更等は避けること</small></p>
      <button onClick={() => {setShow(!show)}}>Toggle with setState</button><br />
      <button onClick={() => {ref.current.remove()}}>Remove from the DOM</button>
      {show && <p ref={ref}>Hello world</p>}
    </>
  )
}