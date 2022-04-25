import { useState } from 'react';
import './App.css'

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>
}

// ボタン - 個々のボタンコンポーネントにデータ
function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1)
  }
  return ( /* handleClick 関数の最後に括弧がないことに注意 */
    <button onClick={handleClick}>Clicked {count} times</button>
  )
}

// ボタン - App.js にデータを持たせる
function MyButton2({ count, onClick }) {
  return ( /* handleClick 関数の最後に括弧がないことに注意 */
    <button onClick={onClick}>Clicked {count} times</button>
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
  const [count2, setCount2] = useState(0);

  function handleClick2() {
    setCount2(count2 + 1);
  }

  return <>
    <Greeting name="world" />
    【個々のボタンコンポーネントにデータ】<br />
    <MyButton /><br />
    {isFlaged && <MyButton />}<br />
    【App.js にデータを持たせる】<br />
    <MyButton2 count={count2} onClick={handleClick2} /><br />
    <MyButton2 count={count2} onClick={handleClick2} /><br />
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