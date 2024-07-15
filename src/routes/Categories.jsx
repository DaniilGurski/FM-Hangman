import { Link } from "react-router-dom";
import MenuHeader from "../components/MenuHeader";
import getGameData from "../getGameData";

export default function Categories() {
  const { categories } = getGameData();

  return (
    <div className="categories-page backdrop grid">
      <MenuHeader pageTitle={"Pick a Category"}/>

      <ul className="category-list">
        {
          Object.keys(categories).map(category => {
            const categoryUrl = category.toLowerCase().split(" ").join("-");

            return (
              <li className="category-list__list-item" key={category}>
                <Link className="category-list__category" to={`/game/${categoryUrl}`}> 
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