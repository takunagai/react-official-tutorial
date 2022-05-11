import { useState } from 'react'

const initialProducts = [
  { id: 0, name: 'Baklava', count: 1 },
  { id: 1, name: 'Cheese', count: 5 },
  { id: 2, name: 'Spaghetti', count: 2 },
]

export default function ShoppingCart2 () {
  const [products, setProducts] = useState(initialProducts)

  function handleIncreaseClick (productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: ++product.count,
        }
      }
      else {
        return product
      }
    }))
  }
  function handleDecreaseClick (productId) {
    let nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: --product.count
        }
      } else {
          return product // そのまま返す
      }
    })
    nextProducts = nextProducts.filter(p => p.count > 0) // カウントが0以上の要素のみセット
    setProducts(nextProducts)
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}{' '}
          (<b>{product.count}</b>)
          <button onClick={() => handleIncreaseClick(product.id)}>+</button>
          <button onClick={() => handleDecreaseClick(product.id)}>–</button>
        </li>
      ))}
    </ul>
  )
}