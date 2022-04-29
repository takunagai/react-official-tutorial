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

  // フィルター処理を１回に改善
  let chemists = []
  let everyoneElse = []

  people.forEach(person => {
    if (person.profession === 'chemist') {
      chemists.push(person)
    } else {
      everyoneElse.push(person)
    }
  })

  return (
    <article>
      <ListSection title="Chemists" people={chemists} />
      <ListSection title="Everyone Else" people={everyoneElse} />
    </article>
  )
}
