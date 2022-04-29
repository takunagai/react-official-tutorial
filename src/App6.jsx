import { getImageUrl } from './utils'
import { people } from './data'

/**
 * リストアイテムをフィルタリングして表示 (科学者、それ以外を分けて出力)
 */
export function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </>
  )
}

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  )
  // △ フィルター呼び出し２回目
  const everyoneElse = people.filter(person =>
    person.profession !== 'chemist'
  )

  return (
    <article>
      <ListSection title="Chemists" people={chemists} />
      <ListSection title="Everyone Else" people={everyoneElse} />
    </article>
  )
}
