import { useImmer } from 'use-immer'

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
]

export default function BucketList () {
  const [list, updateList] = useImmer(initialList)

  function handleToggle(artworkId, nextSeen) { // id, チェック状態(変数名わかりにくい)
    updateList(draft => {
      const artwork = draft.find(a => // find: テスト関数を満たす配列内の最初の要素の値を返す
        a.id === artworkId
      )
      artwork.seen = nextSeen
    })
  }

  return (
    <>
      <h2>Art Bucket List</h2>
      <h3>My list of art to see:</h3>
      <ItemList
        artworks={list}
        onToggle={handleToggle} // 関数をコンポーネントに渡す
      />
    </>
  )
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}> {/* 必要なキーに ID をセット */}
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                )
              }}
            />
            {' ' + artwork.title}
          </label>
        </li>
      ))}
    </ul>
  )
}