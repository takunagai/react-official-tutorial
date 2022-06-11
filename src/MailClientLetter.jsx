export default function MailClientLetter({
  key,
  letter,
  isHighlighted,
  onHover,
  onToggleStar
}) {
  return (
    <li
      // key={key} // 不要？
      className={isHighlighted ? 'highlighted' : ''}
      onFocus={() => onHover(letter.id)}
      onPointerMove={() => onHover(letter.id)}
    >
      <button onClick={() => onToggleStar(letter.id)}>
        {letter.isStarred ? 'Unstar' : 'Star'}
      </button>
      {' ' + letter.subject}
    </li>
  )
}
