import { useState } from 'react'
import { sculptureList } from './data2'
import Form3 from './Form3'
import FeedbackForm from './FeedbackForm'

/**
 * -- Data --
 * name: 'Homenaje a la Neurocirugía',
 * artist: 'Marta Colvin Andrade',
 * description: 'Although Colvin is predominantly known for abstract...',
 * url: 'https://i.imgur.com/Mx7dA2Y.jpg',
 * alt: 'A bronze statue of two crossed hands delicately holding...'
 */

export default function Gallery() {
  const [index, setIndex] = useState(0)

  function handleClick() {
    setIndex(index + 1)
  }

  let sculpture =sculptureList[index]
  return (
    <>
      <button onClick={handleClick}>Next</button>

      <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
      <h3>({index + 1} of {sculptureList.length})</h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>

      <hr />
      <Form3 />

      <hr />
      <FeedbackForm />
    </>
  )
}