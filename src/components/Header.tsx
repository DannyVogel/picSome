import {NavLink} from "react-router-dom"
import { useContext } from 'react'
import { Context } from '../context/Context'

function Header() {
    const {cartItems} = useContext(Context)

    const cartIconClass = cartItems.length > 0 ? "fill" : "line"

    return (
        <header>
            <NavLink to="/"><h2>Pic Some</h2></NavLink>
            <NavLink to="/cart"><i className={`ri-shopping-cart-${cartIconClass} ri-fw ri-2x`}></i></NavLink>
        </header>
    )
}

export default Header
