/**
 * API からデータをフェッチ (初回のみ)
 * @see https://reffect.co.jp/react/react-useeffect-understanding
 */
import { useState, useEffect } from 'react'

export default function FetchApi () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      }, [])
  })

  return (
    <>
      <h1>Learn useEffect</h1>
      <ul>
        { posts.map(post => (
            <li key={post.id}>{post.title} (UserId: {post.userId})</li>
        ))}
      </ul>
    </>
  )
}