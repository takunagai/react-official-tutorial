import { useState, useRef } from 'react'

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)
  const intervalRef = useRef(null) // レンダリング不要なインターバルIDを参照に保存

  function handleStart() {
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(intervalRef.current)

    // setInterval() は、繰り返し呼び出し＆インターバルを一意に識別するインターバル ID を返す
    // そのインターバルIDを参照に保存しておく(clearInterval(インターバルID)で繰り返しストップ)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10) // ミリ秒
  }

  function handleStop() {
    clearInterval(intervalRef.current)
  }

  let secondsPassed = 0
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(2)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <p><small>startTime: {startTime}<br />
        now: {now}</small></p>
    </>
  )
}