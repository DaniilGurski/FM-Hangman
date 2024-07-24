import { Link } from "react-router-dom";
import MenuHeader from "../components/MenuHeader";
import { getGameData } from "../gameData";

export default function Categories() {
  const categories = getGameData();

  return (
    <div className="categories-page backdrop">
      <MenuHeader pageTitle={"Pick a Category"}/>

      <ul className="category-list">
        {
          Object.keys(categories).map((category, index) => {
            return (
              <li className="category-list__list-item" key={category}>
                <Link className="category-list__category" to={`/game/${index + 1}`}> 
                  {category.toUpperCase()}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}