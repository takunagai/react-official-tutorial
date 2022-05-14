import { useState } from 'react'

export default function Form7() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const fullName = `${firstName} ${lastName}`

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value)
  }

  return (
    <>
      <hr />
      <h2>Let's check you in</h2>
      <label>
        First name: {' '}
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label><br />
      <label>
        Last name: {' '}
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>Your ticket will be issued to: <b>{fullName}</b></p>
    </>
  )
}