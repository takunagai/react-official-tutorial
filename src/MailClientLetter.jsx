export default function MailClientLetter({
  // key,
  letter,
  isSelected,
  onToggle
}) {
  return (
    <li
      // key={key} // 不要？
      className={isSelected ? 'selected' : ''}
    >
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggle(letter.id)}
        />
        {' ' + letter.subject}
      </label>
    </li>
  )
}
