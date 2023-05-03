import {useState, useContext} from "react"
import { Context } from '../context/Context'
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState<string>("Place Order")
    const {cartItems, emptyCart} = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "EUR"})

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            setButtonText("Order placed!")
        }, 2000)
        setTimeout(() => {
            emptyCart()
            setButtonText("Place Order")
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
            {cartItems.length > 0 && <button onClick={placeOrder}>{buttonText}</button>}
            </div>
        </main>
    )
}

export default Cart