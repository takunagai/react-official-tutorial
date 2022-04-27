import Avatar from './Avatar'

function Card({ children }) {
  return(
    <div className="card">
      {children}
    </div>
  )
}

export default function Profile () {
  return (
    <>
      <Card>
        <Avatar
          person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
          size={100}
        />
      </Card>
      <Card>
        <Avatar
          person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }}
          size={80}
        />
      </Card>
      <Card>
        <Avatar
          person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
          size={50}
        />
      </Card>
    </>
  )
}