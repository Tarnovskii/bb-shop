import styles from './cart.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {cartSelector} from "../../store/cart/selector";
import {useEffect, useState} from "react";
import {getCartProductsArrayFromCookie} from "../../utils/cartManager";
import {popProductFromCart, pushProductToCart} from "../../store/cart/operations";

export const Cart = ({isOpen, closeCart}) => {
    const dispatch = useDispatch()
    const {totalPrice} = useSelector(cartSelector)
    const [productsArray, setProductsArray] = useState([])

    useEffect(() => {
        setProductsArray(getCartProductsArrayFromCookie())
        if (!totalPrice) {
            closeCart && closeCart()
        }
    }, [totalPrice])

    const addProductToCart = (product) => {
        dispatch(pushProductToCart(product))
    }


    const removeProductFromCart = (product) => {
        dispatch(popProductFromCart(product))
    }

    const ProductsTile = ({id, thumbnail, count, price, title, description}) => {
        return (
            <div key={id} className={styles.wrapper__product}>
                <img className={styles.wrapper__product_thumbnail} src={thumbnail} alt={'img_thumbnail'}/>
                <div className={styles.wrapper__product__details}>
                    <p>{title} ({count} in a cart worth {count * price}$)</p>
                    <small>{description}</small>
                </div>
                <div className={styles.wrapper__product__controls}>
                    <span onClick={removeProductFromCart.bind(null, {id, thumbnail, price, title, description})}>-</span>
                    <p>{count}</p>
                    <span onClick={addProductToCart.bind(null, {id, thumbnail, price, title, description})}>+</span>
                </div>
            </div>
        )
    }

    return (
        <div className={`${styles.wrapper} ${isOpen ? styles.wrapper__open : ''}`}>
            {productsArray.map(ProductsTile)}
        </div>
    )
}
