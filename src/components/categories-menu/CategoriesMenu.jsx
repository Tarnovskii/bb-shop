import styles from './categories.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {categoriesSelector} from "../../store/categories/selectors";
import {Link} from "react-router-dom";
import {nameFormatter} from "../../utils/nameFormatter";
import {useEffect} from "react";
import {requestCategoriesList} from "../../store/categories/operations";

export const CategoriesMenu = () => {
    const dispatch = useDispatch()
    const {list} = useSelector(categoriesSelector)

    useEffect(() => {
        dispatch(requestCategoriesList())
    }, [])

    return (
        <section className={styles.wrapper}>
            {list.map(({name, value}) => {
                return (
                    <Link to={`/category/${name}`} key={value}>{nameFormatter(name)}</Link>
                )
            })}
        </section>
    )
}
