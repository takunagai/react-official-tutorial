import { useState } from 'react'
import Chat from './MessengerChat'
import ContactList from './MessengerContactList'

const contacts = [
  { name: 'Taylor', email: 'taylor@gmail.com' },
  { name: 'Alice', email: 'alice@gmail.com' },
  { name: 'Bob', email: 'Bob@gmail.com' },
]

export default function Messenger() {
  const [to, setTo] = useState(contacts[0])

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.email} contact={to} /> {/* 別キーを渡し、コンポーネントの状態を強制的リセット */}
    </div>
  )
}