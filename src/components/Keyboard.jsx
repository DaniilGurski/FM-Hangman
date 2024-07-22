

export default function Keyboard() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");

  return (
    <ul className="keyboard__letter-group | flex" role="list">
        {
        alphabet.map(letter => {
            return <li key={letter}><button className="keyboard__letter-button"> {letter} </button></li>
        })
        }
    </ul>
  )
}
