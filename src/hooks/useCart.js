import { useEffect, useState } from "react"
import Products from "../Components/Products/Products";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {

        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = []
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                // console.log(addedProduct);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }

            }
            setCart(storedCart)
        }
    }, [products])

    return [cart, setCart];
}

export default useCart;