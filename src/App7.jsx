import { useState } from 'react' // 状態管理のフック
import { sculptureList } from './data2'

/**
 * data2.js の各データの内容
 * name: 'Homenaje a la Neurocirugía',
 * artist: 'Marta Colvin Andrade',
 * description: 'Although Colvin is predominantly known for abstract',
 * url: 'https://i.imgur.com/Mx7dA2Y.jpg',
 * alt: 'A bronze statue of two crossed hands delicately.'
 */
export default function Gallery() {
  // 状態
  const [index, setIndex] = useState(0) // 作品番号。初期値を設定
  const [showMore, setShowMore] = useState(false) // 説明文の開閉状態

  function handleNextClick() {
    setIndex(index + 1)
  }

  function handleMoreClick() {
    setShowMore(!showMore) // false/true トグル
  }

  let sculpture = sculptureList[index]

  return (
    <>
      <button onClick={handleNextClick}> {/* ()は付けたらダメ */}
        next
      </button>
      <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
      <h3>({index + 1} of {sculptureList.length})</h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  )
}
