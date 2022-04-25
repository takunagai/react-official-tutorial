import { useState } from 'react';
import './App.css'

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>
}

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1)
  }
  return ( /* handleClick 関数の最後に括弧がないことに注意 */
    <button onClick={handleClick}>Clicked {count} times</button>
  )
}

/**
 * データ
 */
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://picsum.photos/600/400.webp',
  imageSize: 200,
}

/**
 * 分岐処理
 */
const isFlaged = true

/**
 * リスト x 分岐処理
 */
const products = [
  { title: 'Cabbage', id: 1, isFruit: false },
  { title: 'Garlic', id: 2, isFruit: false },
  { title: 'Apple', id: 3, isFruit: true },
];

function Products() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  )

  return (
    <ul>{listItems}</ul>
  )
}

/**
 * レンダリング
 */
const App = () => {
  return <>
    <Greeting name="world" />
    <MyButton /><br />
    {isFlaged && <MyButton />}
    <img
      className="avatar"
      src={user.imageUrl}
      alt={'photo of' + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
    />
    <Products />
  </>
}

export default App