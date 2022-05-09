import { useState } from 'react'

let nextId = 0

export default function List() {
  const [name, setName] = useState('')
  const [artists, setArtists] = useState([])

  return (
    <>
      <h1>Inspring sculptors:</h1>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setName('')
        setArtists([
          ...artists, // 元の配列全部
          { id: nextId++, name: name } // 追加分
        ])
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}