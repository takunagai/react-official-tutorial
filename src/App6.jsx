import { getImageUrl } from './utils'
import { people } from './data'

// /**
//  * リストアイテムを表示
//  */
// const people = [
//   'Creola Katherine Johnson: mathematician',
//   'Mario José Molina-Pasquel Henríquez: chemist',
//   'Mohammad Abdus Salam: physicist',
//   'Percy Lavon Julian: chemist',
//   'Subrahmanyan Chandrasekhar: astrophysicist'
// ]
//
// export default function List() {
//   const listItems = people.map(person =>
//     <li>{person}</li> {// アロー関数なので return 不要}
//   )
//   return <ul>{listItems}</ul>
// }


/**
 * リストアイテムをフィルタリングして表示 (科学者のみ抽出)
 */
export default function List() {
  // chemist だけを抽出
  const chemists = people.filter(person => // メモ：{} 付けたら、return 必要
    person.profession === 'chemist'
  )

  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
        {` ${person.profession} `}
        known for {person.accomplishment}
      </p>
    </li>
  )

  return <ul>{listItems}</ul>
}