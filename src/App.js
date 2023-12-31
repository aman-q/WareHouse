import "./styles.css";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { ItemDetails } from "./pages/ItemDetails";
import { NotFound } from "./pages/NotFound";
import { WarehouseProvider } from "./context/data";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />
        },

        {
          path: "/list",
          children: [
            {
              index: true,
              element: (

                <List />

              )
            },
            {
              path: ":itemId",
              element: (

                <ItemDetails />

              )
            }
          ]
        }
      ]
    }
  ]);

  return (
    <WarehouseProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </WarehouseProvider>

  );
}
