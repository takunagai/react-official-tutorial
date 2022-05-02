function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  )
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="playing!">Play Movie</AlertButton>
      <AlertButton message="uploading!">Upload Image</AlertButton>
    </div>
  )
}