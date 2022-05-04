function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

// 動作を親コンポーネントで定義
function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}`)
  }

  return (
    <Button onClick={handlePlayClick}>Play "{movieName}"</Button>
  )
}

function UploadButton() {
  return (
    <Button onClick = {() => alert('Uploading!')}>Upload Image</Button>
  )
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  )
}