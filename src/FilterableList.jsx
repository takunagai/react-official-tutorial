import { useState } from 'react'
import { filterItems, foods } from './filterableListData'

export default function FilterableList() {
  return (
    <>
      <SearchBar />
      <hr />
      <List items={foods} />
    </>
  )
}

function SearchBar() {
  const [query, setQuery] = useState('')

  function handleChange(e) {
    setQuery(e.target.value)
  }

  return (
    <label>
      Search:{' '}
      <input
        type="text"
        value={query}
        onChange={handleChange}
      />
    </label>
  )
}

function List({ items }) {
  return (
    <table>
      {items.map(food => (
        <dl key={food.id} style={{marginTop:'.5em'}}>
          <dt style={{fontWeight:'bold'}}>{food.name}</dt>
          <dd>{food.description}</dd>
        </dl>
      ))}
    </table>
  )
}