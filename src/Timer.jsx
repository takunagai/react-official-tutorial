import { useState, useEffect } from 'react'
import Clock from './TimerClock'

function useTime() {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Timer() {
  const time = useTime()
  const [color, setColor] = useState('lightcoral')
  return (
    <>
      <p>Pick a color:</p>
      <select value={color} onChange={e => setColor(e.target.value)}>
        <option value="lightcoral">lightcoral</option>
        <option value="midnightblue">midnightblue</option>
        <option value="rebeccapurple">rebeccapurple</option>
      </select>

      <Clock color={color} time={time.toLocaleTimeString()} />
    </>
  )
}
