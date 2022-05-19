import { useState } from 'react'

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState('Jane')
  const [lastName, setLastName] = useState('Jacobs')

  return (
    <form onSubmit={e => {
      e.preventDefault()
      setIsEditing(!isEditing)
    }}>
      <label>
        First name:{' '}
        {isEditing ? (
          <input
            type="text"
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value)
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label><br />
      <label>
        Last name:{' '}
        {isEditing ? (
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label><br />
      <button type="submit">
        {isEditing ? 'Save' : 'Edit'} Profile
      </button><br />
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  )
}
