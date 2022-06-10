import { useRef } from 'react'
import SearchButton from './Page4SearchButton'
import SearchInput from './Page4SearchInput'

export default function Page() {
  const inputRef = useRef(null)
  return (
    <>
      <nav>
        <SearchButton onClick={() => {
          inputRef.current.focus()
        }} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  )
}