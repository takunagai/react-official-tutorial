import { useState } from 'react'
import { filterItems, foods } from './filterableListData'

export default function FilterableList() {
  const [query, setQuery] = useState('')
  const results = filterItems(foods, query)

  function handleChange(e) {
    setQuery(e.target.value)
  }

  return (
    <>
      <SearchBar
        query={query}
        onChange={handleChange}
      />
      <hr />
      <List items={results} />
    </>
  )
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search:{' '}
      <input
        type="text"
        value={query}
        onChange={onChange}
      />
    </label>
  )
}

function List({ items }) {
  return (
    <>
      {items.map(food => (
        <dl key={food.id} style={{marginTop:'.5em'}}>
          <dt style={{fontWeight:'bold'}}>{food.name}</dt>
          <dd>{food.description}</dd>
        </dl>
      ))}
    </>
  )
}