import { useState } from 'react'
// 'empty', 'submitting', 'success', 'error'
export default function Form8() {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')

  if (status === 'success') {
    return <h1>正解！</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitForm(answer)
      setStatus('success')
    } catch (err) {
      setStatus('typing')
      setError(err)
    }
  }

  function handleTextChange(e) {
    setAnswer(e.target.value)
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>空気を飲み水に変える看板があるのはどこの都市でしょう？ (答え: リマ)</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 || status === 'submitting'
        }>送信</button>
        {error !== null && <p className="error">{error.message}</p>}
      </form>
      <p><img src="https://beta.reactjs.org/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fresponding_to_input_flow.dark.png&w=1920&q=75" width="500" /></p>
    </>
  )
}

function submitForm (answer) {
  // ネットワークへのアクセスを擬似的に表現
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // let shouldError = answer.toLowerCase() !== 'lima'
      let shouldError = answer !== 'リマ'
      if (shouldError) {
        reject(new Error('惜しいけど不正解。再チャレンジしてください。'))
      } else {
        resolve()
      }
    }, 1000)
  })
}