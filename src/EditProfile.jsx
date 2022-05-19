import { useState } from 'react'

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState('Jane')
  const [lastName, setLastName] = useState('Jacobs')

  return (
    <form>
      <label>
        First name:{' '}
        {!isEditing && <b>{firstName}</b>}
        {isEditing &&
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
        }
      </label><br />
      <label>
        Last name:{' '}
        {!isEditing && <b>{lastName}</b>}
        {isEditing &&
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          />
        }
      </label><br />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault()
          setIsEditing(!isEditing)
        }}
      >
        {isEditing ? 'Save' : 'Edit'} Profile
      </button><br />
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  )
}
