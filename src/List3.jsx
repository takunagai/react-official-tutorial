import { useState } from 'react'

let nextId = 3
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
]

export default function List3() {
  const [name, setName] = useState('')
  const [artists, setArtists] = useState(initialArtists)

  function handleClick() {
    const insertAt = 1 // 任意のインデックス (ここでは2番目)
    const nextArtists = [
      ...artists.slice(0, insertAt), // 挿入位置以前のアイテム
      { id: nextId++, name: name },  // 追加するアイテム
      ...artists.slice(insertAt)     // 挿入位置以降のアイテム
    ]
    setArtists(nextArtists)
    setName('')
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}