import { useContext } from 'react'
import { LevelContext } from './PageLevelContext'

export default function Section({ children }) {
  const level = useContext(LevelContext)

  return (
    <section className="section" style={{
      outline: '1px dotted blue',
      padding: '1em'
    }}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}