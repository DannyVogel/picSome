import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import {ContextProvider} from "./context/Context"
import Layout from "./components/Layout"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import Error from "./pages/Error";
import "./styles.css"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Photos />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
    </Route>
))

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
)
