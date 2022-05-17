export default function Form8({
  // Try: 'empty', 'submitting', 'success', 'error'
  status = 'empty'
}) {
  if (status === 'success') {
    return <h1>正解！</h1>
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>空気を飲み水に変える看板があるのはどこの都市でしょう？ (答え: リマ)</p>
      <form>
        <textarea disabled={status === 'submitting'} />
        <br />
        <button disabled={
          status === 'empty' || status === 'submitting'
        }>Submit</button>
        {status === 'error' &&
          <p className="error">惜しいけど不正解。再チャレンジしてください。</p>
        }
      </form>
      <p><img src="https://beta.reactjs.org/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fresponding_to_input_flow.dark.png&w=1920&q=75" width="500" /></p>
    </>
  )
}