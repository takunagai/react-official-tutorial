import Profile from './Profile.js'
import TodoList from './TodoList.jsx'
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

export default function App3() {
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
    </section>
  )
}
