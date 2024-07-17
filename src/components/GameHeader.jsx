import menuIcon from "/images/icon-menu.svg";
import RoundButton from "./RoundButton";

export default function GameHeader({ categoryName, currentHealth, totalHealth }) {
  return (
    <header className="game-header | flex">
        <div className="game-header__left | flex">
            <RoundButton className="round-button" icon={menuIcon}  ariaText="open menu"/>

            <h2 className="clr-white fs-game-category"> { categoryName } </h2>
        </div>

        <div className="game-header__right | flex">
            <progress className="health-bar" 
            value={currentHealth} 
            max={totalHealth}
            aria-valuenow={currentHealth}
            aria-valuemax={totalHealth}
            >
            </progress>

            <img className="game-header__heart-icon" src="/images/icon-heart.svg" alt="" aria-hidden="true"/>
        </div>
    </header>
  )
}
