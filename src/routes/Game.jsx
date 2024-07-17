import { useState } from 'react'
import GameHeader from '../components/GameHeader';


export default function Game() {
  const totalHealth = 3;
  const [currentHealth, setCurrentHealth] = useState(totalHealth);

  return (
    <div className="game-page | backdrop"> 
      <GameHeader 
      categoryName="placeholder" 
      currentHealth={currentHealth} 
      totalHealth={totalHealth}/>
    </div>  
  )
}
