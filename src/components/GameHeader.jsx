import { useContext } from "react";
import menuIcon from "/images/icon-menu.svg";
import HealthBar from "./HealthBar";
import { gameContext } from "../routes/Game";
import { CURRENT_GAME_ACTIONS } from "../currentGameActions";


export default function GameHeader({ categoryName, onMenuClick }) {  
  return (
    <header className="game-header | flex">
        <div className="game-header__left | flex">
            <button className="round-button" onClick={() => onMenuClick("paused")}> 
              <img className="round-button__icon" src={menuIcon} alt="" />
            </button>

            <h2 className="clr-white fs-game-category"> { categoryName } </h2>
        </div>

        <div className="game-header__right | flex">
          <HealthBar />
        </div>
    </header>
  )
}
