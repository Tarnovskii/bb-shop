import styles from './content-wrapper.module.scss'
import {CategoriesMenu} from "../categories-menu/CategoriesMenu";
import {Outlet, useLocation} from 'react-router-dom'

export const ContentWrapper = () => {
    const {pathname} = useLocation()

    return (
        <section className={styles.wrapper}>
            <CategoriesMenu/>
            <main>
                <Outlet/>
            </main>
        </section>
    )
}
