import { useState } from 'react'

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
]

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes)

  // 新しい配列を作成し "square はそのまま"、"他は　y を +50" し上書き変更" (＝加工)
  const handleClick = function() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        return shape
      } else {
        return {
          ...shape, // 一旦全てコピー
          y:shape.y + 50 // オーバーライド
        }
      }
    })
    setShapes(nextShapes) // セッターで状態を変更
  }

  return (
    <section style={{
      position: 'relative',
      height: '300px',
      padding: '1rem',
      outline: '1px dotted gray',
    }}>
      <button onClick={handleClick}>Move circles down!</button>
      {shapes.map(shape => (
        <div style={{
          position: 'absolute',
          top: shape.y,
          left: shape.x,
          width: 20,
          height: 20,
          backgroundColor: 'purple',
          borderRadius: shape.type === 'circle' ? '50%' : ''
        }} />
      ))}
    </section>
  )
}