import React from "react";
import { Link } from "react-router-dom";

function GameActionPanel({ gameStatus }, ref) {

  function handlePanelClosing(e) {
    ref.current.close();
  }
  
  return (
    <dialog className="action-panel action-panel--fixed" id="game-panel" ref={ref}>
      <div className="grid">
        <span className="action-panel__header gradient-heading"> Test </span>

        <div className="action-panel__buttons | grid"> 
            <button className="button" onClick={handlePanelClosing}> Continue </button>
            <Link className="button" to="/categories"> New Category </Link>
            <Link className="button button--gradient" to="/"> Quit game </Link>
        </div>
      </div>
    </dialog>
  )
}

export default React.forwardRef(GameActionPanel);