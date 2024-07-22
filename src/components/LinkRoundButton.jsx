import { Link } from 'react-router-dom'

export default function LinkRoundButton({className, to, icon, ariaText}) {

  return (
    <Link className={className} aria-label={ariaText} to={to}> 
        <img className="round-button__icon" src={icon} alt="" />
    </Link>
  )
}
