import { Link } from "react-router-dom";
 
export default function Menu() {
    return (
        <div>
            <h1>Menu</h1>
            <Link to="/tutorial"> How to play </Link>
            <Link to="/categories"> Pick category </Link>
        </div>
    )
}
