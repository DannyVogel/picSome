import { useContext } from 'react'
import { Context } from '../context/Context'
import useHover from '../utils/useHover'

interface Props {
    className: string;
    img: {
        url: string;
        id: string;
        isFavorite: boolean;
    }
}

function Image({className, img}: Props) {
    const [hovered, ref] = useHover()
    const {toggleFavorite, cartItems, addToCart, removeFromCart} = useContext(Context)
    
    const heartIconClass = img.isFavorite ? 'ri-heart-fill' : hovered && 'ri-heart-line'

    function cartIcon(): JSX.Element {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
        return <></>
    }
    return (
        <div 
            className={`${className} image-container`}
            ref={ref}
        >
            <img src={img.url} className="image-grid"/>
            <i className={`${heartIconClass} favorite`} onClick={() => toggleFavorite(img.id)}></i> 
            {cartIcon()}
        </div>
    )
}

export default Image
