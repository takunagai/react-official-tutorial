import { useState } from 'react'

const props = {
  color: 'lightcoral',
  time: new Date()
}

export default function Clock2(props) {
  // const [color, setColor] = useState(props.color)
  return (
    <>
      <p>Pick a color:${' '}
        <select>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <h1 style={{ color: props.color }}>
        {props.time}
      </h1>
    </>
  )
}
