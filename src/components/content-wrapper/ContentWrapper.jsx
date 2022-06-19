import styles from './content-wrapper.module.scss'
import {CategoriesMenu} from "../categories-menu/CategoriesMenu";
import {Outlet} from 'react-router-dom'

export const ContentWrapper = () => {

    return (
        <section className={styles.wrapper}>
            <CategoriesMenu/>
            <main>
                <Outlet/>
            </main>
        </section>
    )
}
