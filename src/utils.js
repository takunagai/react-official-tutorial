/**
 * person オブジェクトを受け取り、画像 URL を組んで返す
 */
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' + person.imageId + size + '.jpg'
  )
}
