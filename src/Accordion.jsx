import { useState } from 'react'

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0) // 共有する状態

  return (
    <>
      <h2>Almary, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
    </>
  )
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel" style={{
      border: '1px solid silver',
      padding: '1em'
    }}>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </section>
  )
}