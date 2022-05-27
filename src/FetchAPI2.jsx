/**
 * API からデータをフェッチ (初回のみ) async/await を使用
 * @see https://reffect.co.jp/react/react-useeffect-understanding
 */
import { useState, useEffect } from 'react'

export default function FetchAPI2() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      )
      const posts = await response.json()
      setPosts(posts)
    }
    fetchPost()
  })

  return (
    <>
      <h1>Learn useEffect</h1>
      <ul>
        { posts.map(post => (
            <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}
