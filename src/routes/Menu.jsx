import { Link } from "react-router-dom";
import logoUrl from "/images/logo.svg";
import iconBack from "/images/icon-back.svg";
import iconPlayUrl from "/images/icon-play.svg";
import RoundButton from "../components/RoundButton";
 
export default function Menu() {
    return (
        <div className="menu-panel action-panel"> 
            <img className="menu-panel__logo action-panel__header" src={logoUrl} alt="logo" />

            <RoundButton className="round-button menu-panel__start-button" to="/categories" iconUrl={iconPlayUrl} ariaText={"start the game"}/>

            <Link className="button" to="/tutorial"> how to play </Link>
        </div>
    )
}
