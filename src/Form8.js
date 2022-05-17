export default function Form8({ status = 'empty' }) { // 'success'
  if (status === 'success') {
    return <h1>That's right!</h1>
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>In which city is there a billboard that turns air into drinkable water? (Answer: Lima)</p>
      <form>
        <textarea />
        <br />
        <button>Submit</button>
      </form>
    </>
  )
}