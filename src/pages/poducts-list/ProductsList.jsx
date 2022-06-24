import styles from './products-list.module.scss'
import {useParams, useSearchParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {Pagination} from "../../components/pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {requestProductsListByCategory, requestProductsListByQuery} from "../../store/products/operations";
import {paginationSelector} from "../../store/pagination/selectors";
import {productsSelector} from "../../store/products/selectors";
import {DropDown} from "../../components/drop-down/DropDown";
import shoppingCartIcon from '../../assets/image/shopping-cart.png'
import {pushProductToCart} from "../../store/cart/operations";

const sortTypes = [{
    name: 'Price',
    value: 'price'
}, {
    value: 'discount',
    name: 'Discount'
}]

const sortDirections = [{
    name: 'From highest to lowest',
    value: 'htl'
}, {
    name: 'From lowest to highest',
    value: 'lth'
}]

export const ProductsList = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [sortBy, setSortBy] = useState(null)
    const [sortDirection, setSortDirection] = useState(null)
    const {limit, skip} = useSelector(paginationSelector)
    const {list, totalCount} = useSelector(productsSelector)
    const dispatch = useDispatch()
    const [query, setQuery] = useSearchParams()
    const {category} = useParams()

    useEffect(() => {
        setCurrentPage(0)
    }, [limit])

    useEffect(() => {
        if (category) dispatch(requestProductsListByCategory(limit, limit * currentPage, category))
    }, [limit, skip, category, currentPage])

    useEffect(() => {
        if (!category) dispatch(requestProductsListByQuery(limit, limit * currentPage, query.get('q') || ''))
    }, [query, limit, skip, currentPage, category])

    const productsSorter = useCallback((prev, next) => {
        if (sortBy?.value === 'price') {
            if (sortDirection?.value === 'lth') return prev.price - next.price
            if (sortDirection.value === 'htl') return next.price - prev.price
        }
        if (sortBy?.value === 'discount') {
            if (sortDirection?.value === 'lth') return prev.discountPercentage - next.discountPercentage
            if (sortDirection?.value === 'htl') return next.discountPercentage - prev.discountPercentage
        }

        return 0
    }, [sortBy, sortDirection])

    const addProductToCart = (product) => {
        dispatch(pushProductToCart(product))
    }

    const ProductTile = ({id, title, thumbnail, discountPercentage, rating, stock, price, description}) => {
        return (
            <div key={id} className={styles.content__product}>
                <img className={styles.content__product_thumbnail} src={thumbnail} alt={`${title}_thumbnail`}/>
                <div className={styles.content__product__text}>
                    <h4>{title}</h4>
                    <p className={styles.content__product__text_description}>{description}</p>
                    <div className={styles.content__product__text__price}>
                        <span>{price}$</span>
                        {discountPercentage && <p>{discountPercentage}% OFF</p>}
                    </div>
                    <div className={styles.content__product__text__additional}>
                        <small>Stock: {stock}</small>
                        <img src={shoppingCartIcon} onClick={addProductToCart.bind(null, {id, title, thumbnail, price, description})} alt={'shoppingCartIcon'}/>
                    </div>
                </div>

            </div>
        )
    }

    return (
        <>
            <section className={styles.header}>
                <div className={styles.header__sort}>
                    <p>Sort By:</p>
                    <DropDown onChange={setSortBy} placeholder={'Sort By'} options={sortTypes} value={sortBy}/>
                </div>
                <div className={styles.header__sort}>
                    <p>Sort Direction:</p>
                    <DropDown onChange={setSortDirection} placeholder={'Sort Direction'} options={sortDirections}
                              value={sortDirection}/>
                </div>
                <div className={styles.header__sort}>
                    <Pagination pageClassName={styles.header__sort__pagination__page}
                                wrapperClassName={styles.header__sort__pagination} maxDisplayPages={5}
                                currentPage={currentPage} onPageChange={setCurrentPage} totalCount={totalCount}/>
                </div>
            </section>
            <section className={styles.content}>
                {list.sort(productsSorter).map(ProductTile)}
            </section>
        </>
    )
}
