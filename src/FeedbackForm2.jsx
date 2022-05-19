import { useState } from 'react'

export default function FeedbackForm2() {
  const [text, setText] = useState('')
  const [status, setStatus] = useState('typing')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    await sendMessage(text) // 帰ってくるまでに時間がかかる処理を想定
    setStatus('sent')
  }

  // 条件分岐の条件を短くスッキリ書くために定数化
  const isSending = status === 'sending'
  const isSent = status === 'sent'

  if(isSent) {
    return <h1>フィードバックをありがとうございます！</h1>
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>The Prancing Pony ホテルでの滞在はいかがでしたか？</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      /><br />
      <button type="submit" disabled={isSending}>送信</button>
      {isSending && <p>送信中…</p>}
    </form>
  )
}

/**
 * 1秒待つだけのメソッド
 */
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000)
  })
}