import { useRef } from 'react'

// 写真を取得し配列にセット
const catList = []
for (let i = 0; i<10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  })
}

export default function CatFriends2() {
  const itemsRef = useRef(null)

  function scrollToId (itemId) {
    const map = getMap()
    const node = map.get(itemId)
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }

  function getMap() {
    // 初回使用時に Map オブジェクトを初期化
    if (!itemsRef.current) {
      itemsRef.current = new Map()
    }
    return itemsRef.current
  }

  return (
    <div id="cat-friends">
      <h1>useRef で DOM 操作 (スライダー) 2</h1>
      <nav>
        <button onClick={() => scrollToId(0)}>Tom</button>
        <button onClick={() => scrollToId(5)}>Maru</button>
        <button onClick={() => scrollToId(9)}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          {catList.map(cat => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap()
                if (node) {
                  map.set(cat.id, node)
                } else {
                  map.delete(cat.id)
                }
              }}
            >
              <img
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
