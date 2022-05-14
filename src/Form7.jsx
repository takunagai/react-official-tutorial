import { useState } from 'react'

export default function Form7() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('') // 不要な状態変数

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
    setFullName(e.target.value + ' ' + lastName) // 不要な文字組み立て
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value)
    setFullName(firstName + ' ' + e.target.value) // 不要な文字組み立て
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