import { useState } from 'react'

export default function TrafficLight() {
  const [walk, setWalk] = useState(true)

  function handleClick() {
    setWalk(!walk) // true と false を反転
    alert(walk ? 'Stop is next.' : 'Walk is next.')
  }

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'stop' : 'walk'}
      </button>
      <h1 style={{
        color: walk ? 'green' : 'red'
      }}>
        {walk ? 'walk' : 'stop'}
      </h1>
    </>
  )
}