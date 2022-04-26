import Profile from './Profile.js'
import TodoList from './TodoList.jsx'
import { people } from './data.js'
import { getImageUrl } from './utils'

// 子要素 (Avatar) を受け取り、ラッパー要素で囲んで返す
function Card({ children }) {
  return(
    <div className="card">
      {children}
    </div>
  )
}

// props で受け取った値をセット
// & データオブジェクトから取得した値をセットして画像を返す
function Avatar({ person, size }) {
  return(
    <img
      className="avatar"
      src={getImageUrl(person)} // getImageUrl(person, 'l')
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

// 条件分岐レンダリング ( && )
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  )
}

// 純粋な関数 (引数は props から受け取ることで、純粋な関数として収まっている)
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function App3() {

  // リストをセット (オブジェクトデータをループ表示)
  const listItems = people.map(person =>
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name}/>
      <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  )

  // レンダリング
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <hr />
      <TodoList />
      <hr/>
      <Card>
        <Avatar
          size={100}
          person={{
            name: 'katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />
      </Card>

      <div>
        <h3>Sally Ride's Packing List</h3>
        <ul>
          <Item
            isPacked={true}
            name="Space suit"
          />
          <Item
            isPacked={true}
            name="Helmet with a golden leaf"
          />
          <Item
            isPacked={false}
            name="Photo of Tam"
          />
        </ul>
      </div>

      <div>
        <h3>Scientists (オブジェクトデータをループ表示)</h3>
        <ul>{listItems}</ul>
      </div>

      <hr/>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </section>
  )
}
