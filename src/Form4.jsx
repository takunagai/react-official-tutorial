import { useState } from 'react'

export default function Form4() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  })

  function handleFirstNameChange(e) {
    // person.firstName = e.target.value // これではダメ
    setPerson({
      ...person, // 元のオブジェクトのデータを複製
      firstName: e.target.value // 更新したいものをオーバーライド
    })
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    })
    person.lastName = e.target.value
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    })
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label><br />
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label><br />
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  )
}
