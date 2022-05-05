import { sculptureList } from './data2'

/**
 * -- Data --
 * name: 'Homenaje a la Neurocirugía',
 * artist: 'Marta Colvin Andrade',
 * description: 'Although Colvin is predominantly known for abstract...',
 * url: 'https://i.imgur.com/Mx7dA2Y.jpg',
 * alt: 'A bronze statue of two crossed hands delicately holding...'
 */

export default function Gallery() {
  let index = 0

  function handleClick() {
    index = index++
  }

  let sculpture =sculptureList[index]
  return (
    <>
      <button onClick={handleClick}>Next</button>

      <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
      <h3>({index + 1} of {sculptureList.length})</h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  )
}