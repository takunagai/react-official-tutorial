export default function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault() // これ無しだと、フォーム＆ボタンデフォルトのイベントで更新されてしまう
      alert('Submitting!')
    }}>
      <input />
      <button>Send</button>
    </form>
  )
}
