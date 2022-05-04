/**
 * ボタンクリックで背景色を変更
 */
export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white'
    } else {
      bodyStyle.backgroundColor = 'black'
    }
  }

  return ( // handleClick() でなく handleClick を渡す
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  )
}
