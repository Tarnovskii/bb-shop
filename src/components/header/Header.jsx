import styles from './header.module.scss'

import logo from '../../assets/image/logo.png'
import searchIcon from '../../assets/image/search-icon.png'
import {Input} from "../input/Input";
import {useEffect, useState} from "react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {routerBook} from "../../routes/router-book";
import {Cart} from "../cart/Cart";
import {useSelector} from "react-redux";
import {cartSelector} from "../../store/cart/selector";

export const Header = () => {
    const {totalPrice} = useSelector(cartSelector)
    const [_value, _setValue] = useState('')
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [query] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        _setValue(query.get('q') ? query.get('q') : '')
    }, [query])

    const searchbarInputHandler = ({value}) => {
        _setValue(value)
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        if (_value === '' || !_value) navigate(routerBook.main)
        else  navigate(`${routerBook.main}?q=${_value}`)
        return false
    }

    return (
        <header className={styles.wrapper}>
            <Link  className={styles.wrapper__logo} to={routerBook.main}><img src={logo} alt={'bb_shop_logo'}/></Link>
            <form onSubmit={formSubmitHandler} className={styles.wrapper__form}>
                <Input onChange={searchbarInputHandler} value={_value} icon={searchIcon} name={'q'}/>
            </form>
            <button onClick={setIsCartOpen.bind(null, !isCartOpen)}>My Cart {totalPrice ? totalPrice + ' $' : ''}</button>
            <Cart closeCart={setIsCartOpen.bind(null, false)} isOpen={isCartOpen}/>
        </header>
    )
}
