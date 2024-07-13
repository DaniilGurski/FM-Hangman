import { Link } from 'react-router-dom'

export default function RoundButton({className, to, iconUrl, ariaText}) {
  return (
    <Link className={className} aria-label={ariaText} to={to}> 
        <img className="round-button__icon" src={iconUrl} alt="" />
    </Link>
  )
}
