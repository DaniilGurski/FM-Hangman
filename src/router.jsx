import { createBrowserRouter } from "react-router-dom";
import Menu from "./routes/Menu";
import Tutorial from "./routes/Tutorial";
import Categories from "./routes/Categories";
import Game from "./routes/Game";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
        index: true
    },
    {
        path: "/tutorial",
        element: <Tutorial />,
    },
    {
        path: "/categories",
        element: <Categories />,
    },
    {
        path: "/game/:category",
        element: <Game />,
    },
]);
