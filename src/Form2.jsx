import { useState } from 'react'

export default function Form2 () {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  })

  function handleNameChange(e) {
    setPerson({
      ...person, // 状態(オブジェクトそのまま全部)
      name: e.target.value // 特定のプロパティを上書き、双方向パインディング
    })
  }

  function handleTitleChange(e) {
    setPerson({
        ...person, // 状態(オブジェクトそのまま全部)
        artwork: { // 2階層目
          ...person.artwork, // 状態(2階層目そのまま全部)
          title: e.target.value // 特定のプロパティを上書き、双方向パインディング
      }
    })
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    })
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    })
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label><br />
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label><br />
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label><br />
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>

      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
      />
    </>
  )
}