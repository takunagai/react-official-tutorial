import { useState, useRef } from 'react'
import { flushSync } from 'react-dom'

const catList = []
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  })
}

export default function CatFriends3() {
  const [index, setIndex] = useState(0)
  let selectedRef = useRef(null)

  return (
    <div id="cat-friends">
      <nav>
        <button onClick={() => {
          flushSync(() => {
            if (index < catList.length - 1) {
              setIndex(index + 1)
            } else {
              setIndex(0)
            }
          })

          selectedRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          })
        }}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id} ref={index === i ? selectedRef : null}> {/*現在の画像にのみRefを渡す*/}
              <img
                className={ index === i ? 'active' : '' }
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
