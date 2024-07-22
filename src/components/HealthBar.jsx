import { useContext } from "react"
import { gameContext } from "../routes/Game"


export default function HealthBar() {
  const { currentHealth, totalHealth } = useContext(gameContext); 

  return (
    <>
      <progress className="health-bar" 
      value={currentHealth} 
      max={totalHealth}
      aria-valuenow={currentHealth}
      aria-valuemax={totalHealth}
      >
      </progress>

      <img className="game-header__heart-icon" src="/images/icon-heart.svg" alt="" aria-hidden="true"/>
    </>
  )
}
