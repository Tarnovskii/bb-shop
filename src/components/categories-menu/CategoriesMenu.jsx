import styles from './categories.module.scss'
import {useSelector} from "react-redux";
import {categoriesSelector} from "../../store/categories/selectors";
import {Link} from "react-router-dom";
import {nameFormatter} from "../../utils/nameFormatter";

export const CategoriesMenu = () => {
    const {list} = useSelector(categoriesSelector)
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
