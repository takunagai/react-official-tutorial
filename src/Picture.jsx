import { useState } from 'react'

export default function Picture() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className={`background${isActive ? '' : ' background--active'}`}
      onClick={() => setIsActive(false)}
    >
      <figure>
        <img
          className={`picture${isActive && 'picture--active'}`}
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
          onClick={e => {
            e.stopPropagation()
            setIsActive(true)
          }}
        />
        <figcaption>画像/背景クリックでスタイルクラスをトグル</figcaption>
      </figure>
    </div>
  )
}
