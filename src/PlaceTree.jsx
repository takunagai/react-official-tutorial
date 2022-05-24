import { useState } from 'react'
import { initialTravelPlan } from './placeTreeData'

function PlaceTree({ id, placesById }) {
  const place = placesById[id]
  const childIds = place.childIds

  return (
    <>
      <li>{place.title}</li>
      {childIds.length > 0 && (
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId} // リストに必要な key
              id={childId}
              placesById={placesById}
            />
          ))}
        </ol>
      )}
    </>
  )
}

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan)
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
            placesById={plan}
          />
        ))}
      </ol>
    </>
  )
}