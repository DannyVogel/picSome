import React, {useState, useEffect} from "react"

interface Photos {
    url: string;
    id: string;
    isFavorite: boolean;
}

interface ContextValue {
    allPhotos: Photos[],
    cartItems: Photos[],
    toggleFavorite: (id: string) => void,
    addToCart: (newItem: Photos) => void,
    removeFromCart: (id: string) => void,
    emptyCart: () => void
}

const Context = React.createContext<ContextValue>(null!)

function ContextProvider({children}: {children: React.ReactNode}) {
    const [allPhotos, setAllPhotos] = useState<Photos[]>([])
    const [cartItems, setCartItems] = useState<Photos[]>([])
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id: string) {
        const updatedArr = allPhotos.map((photo: Photos) => {
            if (photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function addToCart(newItem: Photos) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id: string) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, cartItems, addToCart, removeFromCart, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}