function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

// 呼び出し元の onPlayMovie, onUploadImage イベントハンドラーを受け取る
export default function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={{onPlayMovie}}>Play Movie</Button>
      <Button onClick={{onUploadImage}}>Upload Image</Button>
    </div>
  )
}