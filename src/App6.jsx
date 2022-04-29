import { getImageUrl } from './utils'
import { people } from './data'

/**
 * リストアイテムをフィルタリングして表示 (科学者、それ以外を分けて出力)
 */
export default function List() {
  // 科学者のリスト
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  )

  // 科学者以外のリスト
  const everyoneElse = people.filter(person =>
    person.profession !== 'chemist'
  )

  // 科学者のリストのDOMを生成
  const listItems = chemists.map(person =>
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
  )

  // 科学者以外のリストのDOMを生成
  const listItems2 = everyoneElse.map(person =>
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
  )

  // レンダリング
  return (
    <article>
      <h1>chemists</h1>
      <ul>{listItems}</ul>
      <h2>Others</h2>
      <ul>{listItems2}</ul>
    </article>
  );
}
