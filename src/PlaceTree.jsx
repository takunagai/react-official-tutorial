import { useState } from 'react'
import { initialTravelPlan } from './placeTreeData'

function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id]
  const childIds = place.childIds

  return (
    <>
      <li>
        {place.title}
        <button onClick={() => {
          onComplete(parentId, id)
        }}>完了</button>
      </li>
      {childIds.length > 0 && (
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId} // リストに必要な key
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </>
  )
}

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan)

  function handleComplete(parentId, childId) {
    const parent = plan[parentId]
    // この子 ID を含まない親の新バージョンを作成
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter(id => id !== childId)
    }
    // ルートの状態オブジェクトを更新
    setPlan({
      ...plan,
      [parentId]: nextParent // 更新された親を持つようにする
    })
  }

  const root = plan[0]
  const planetIds = root.childIds

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id} // リストに必要な key
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  )
}