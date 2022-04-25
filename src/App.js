import './App.css'

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>
}

function MyButton() {
  return (
    <button>Click me</button>
  )
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://picsum.photos/600/400.webp',
  imageSize: 200,
}

const isFlaged = true

const App = () => {
  return <>
    <Greeting name="world" />
    <MyButton /><br />
    {isFlaged && <MyButton />}
    <img
      className="avatar"
      src={user.imageUrl}
      alt={'photo of' + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
    />
  </>
}

export default App