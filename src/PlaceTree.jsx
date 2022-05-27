import { useImmer } from 'use-immer'
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
  const [plan, updatePlan] = useImmer(initialTravelPlan)

  function handleComplete(parentId, childId) {
    updatePlan(draft => {
      // 親プレースの子IDから削除
      const parent = draft[parentId]
      parent.childIds = parent.childIds.filter(id => id !== childId)

      // この場所とそのすべてのサブツリーを取得
      function deleteAllChildren(id) {
        const place = draft[id]
        place.childIds.forEach(deleteAllChildren)
        delete draft[id]
      }
      deleteAllChildren(childId)
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