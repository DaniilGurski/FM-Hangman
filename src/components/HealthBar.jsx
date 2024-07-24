import { useContext } from "react"
import { gameContext } from "../routes/Game"


export default function HealthBar() {
  const { currentHealth, TOTAL_HEALTH } = useContext(gameContext); 

  return (
    <>
      <progress className="health-bar" 
      value={currentHealth} 
      max={TOTAL_HEALTH}
      aria-valuenow={currentHealth}
      aria-valuemax={TOTAL_HEALTH}
      aria-label="Health bar"
      >
      </progress>

      <img className="game-header__heart-icon" src="/images/icon-heart.svg" alt="" aria-hidden="true"/>
    </>
  )
}
