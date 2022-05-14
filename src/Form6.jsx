import { useState } from 'react'

export default function Form6() {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('typing')

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault() // デフォルトの挙動 (送信して遷移) を止める
    setStatus('submitting')
    try {
      await submitForm(answer)
      setStatus('success')
    } catch (err) {
      setStatus('typing')
      setError(err)
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value)
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>富士山がある県は？(都道府県は不要)</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'} // true で無効化
        />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>
          Submit
        </button>
        {error !== null &&
          <p className="Error">{error.message}</p>
        }
      </form>
    </>
  )
}

function submitForm(answer) {
  // ネットワークにアクセス中のふりをします
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer !== '静岡'
      if (shouldError) {
        reject(new Error('おしい、不正解です。再トライしてみましょう！'))
      } else {
        resolve()
      }
    }, 1500)
  })
}