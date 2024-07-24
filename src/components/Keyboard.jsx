

export default function Keyboard({ onLetterBlockClick }) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");

  return (
    <ul className="keyboard__letter-group | flex" role="list">
        {
        alphabet.map(letter => {
            return (
              <li key={letter}>
                <button className="keyboard__letter-button" onClick={onLetterBlockClick}> {letter} </button>
              </li>
            );
        })
        }
    </ul>
  )
}
