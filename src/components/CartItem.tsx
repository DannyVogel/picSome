import {useContext} from "react"
import { Context } from '../context/Context'
import useHover from "../utils/useHover"

interface CartItemProps {
    item: {
        url: string
        id: string
    }
}

function CartItem({item}: CartItemProps) {
    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(Context)
    
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    
    return (
        <div className="cart-item">
            <i 
                className={iconClassName} 
                onClick={() => removeFromCart(item.id)}
                ref={ref}
            >
            </i>
            
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem