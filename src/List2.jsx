import { useState } from 'react'

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andre' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
]

export default function List2() {
  const [artists, setArtists] = useState(initialArtists)
  return (
    <>
      <hr />
      <h1>Inspiring sculptors</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button
              onClick={() => {
                setArtists(
                  artists.filter(a =>
                    a.id !== artist.id // filter で、この要素のみを省いた配列にする。元の配列は変更されてしまう
                  )
                )
              }}
            >Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}