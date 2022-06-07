import { useState } from 'react'

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)

  function handleStart() {
    setStartTime(Date.now())
    setNow(Date.now())

    setInterval(() =>{
        setNow(Date.now())
      },
      10 // ミリ秒
    )
  }

  let secondsPassed = 0
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(2)}</h1>
      <button onClick={handleStart}>Start</button>
      <p><small>startTime: {startTime}<br />
        now: {now}</small></p>
    </>
  )
}