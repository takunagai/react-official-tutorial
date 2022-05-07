import { useState } from 'react'

export default function Form4() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  })

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value // プロパティを動的にセット
    })
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName" // 変えたいプロパティを同じ名前を付ける
          value={person.firstName}
          onChange={handleChange}
        />
      </label><br />
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label><br />
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
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
