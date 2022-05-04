function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation() // これが無いと、背面の Div 要素にセットされたイベントが発火してしまう
      onClick() // 親コンポーネントから受け取った関数を実行
    }}>
      {children}
    </button>
  )
}

export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => alert('You clicked on the toolbar!')}
      style={{
        padding: "1rem",
        backgroundColor: "#E7E7E7"
      }}
    >
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
      <p><small>親要素(Div, グレー)にはクリックイベントが設定してある</small></p>
    </div>
  )
}
