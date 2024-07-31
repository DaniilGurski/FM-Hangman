import { Link } from "react-router-dom";
import logoUrl from "/images/logo.svg";
import iconPlay from "/images/icon-play.svg";
import LinkRoundButton from "../components/LinkRoundButton";
 
export default function Menu() {
    return (
        <div className="menu-panel action-panel"> 
            <div className="grid">
                <img className="menu-panel__logo action-panel__header" src={logoUrl} alt="logo" />
                <h1 className="visually-hidden"> The hangman game </h1> 

                <LinkRoundButton className="round-button menu-panel__start-button" to="/categories" icon={iconPlay} ariaText={"start the game"}/>

                <Link className="button" to="/tutorial"> how to play </Link>
            </div>
        </div>
    )
}
