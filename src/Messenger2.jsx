import { useReducer } from 'react'
import { initialState, messengerReducer } from './Messenger2Reducer'
import ContactList from './Messenger2ContactList'
import Chat from './Messenger2Chat'

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
]

export default function Messenger2() {
  const [state, dispatch] = useReducer(messengerReducer, initialState)
  // const message = state.message
  const message = state.messages[state.selectedId]
  const contact = contacts.find(c =>
    c.id === state.selectedId
  )

  return (
    <>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </>
  )
}
