import Toolbar from './Toolbar'

export default function Button() {
  // イベントハンドラーは、通常、コンポーネント内で定義する
  function handleClick() {
    alert('You clicked me!')
  }

  function Button2({ onSmash, children }) {
    return (
      <button onClick={onSmash}>
        {children}
      </button>
    )
  }

  return (
    <>
      <button onClick={handleClick}>クリック</button>

      {/* イベントハンドラーをインラインで定義することもできる(アロー関数) */}
      <button onClick={() => {
        alert('You clicked me!')
      }}>クリック</button>

      <hr />
      <Toolbar />

      <hr />
      {/* イベントハンドラーの props に名前を付ける */}
      <Button2 onSmash={() => alert('Playing!')}>
        Play Movie
      </Button2>
    </>
  )
}