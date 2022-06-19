import styles from './drop-down.module.scss'
import {useState} from "react";
import {nameFormatter} from "../../utils/nameFormatter";

export const MultiSelect = ({placeholder, options, values, onChange}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const getIsSelectedStatus = (option) => {
        return values?.filter(el => el.value === option.value).length
    }

    const optionClickHandler = (option) => {
        if (getIsSelectedStatus(option)) {
            onChange([...values.filter(v => v.value !== option.value)])
        } else {
            onChange([...values, option])
        }
    }

    const Option = ({name, value}) => {
        return (
            <li onClick={optionClickHandler.bind(null, {name, value})} key={name}
                className={`${styles.wrapper__content__menu__option} ${getIsSelectedStatus({
                    name,
                    value
                }) ? styles.wrapper__content__menu__option_checked : ''}`}>
                {nameFormatter(name)}
            </li>
        )
    }

    return (
        <div onMouseEnter={setIsMenuOpen.bind(null, true)} onMouseLeave={setIsMenuOpen.bind(null, false)}
             className={styles.wrapper}>
            <p>{placeholder} {values?.length}</p>
            <div className={styles.wrapper__content}>
                <ul className={`${styles.wrapper__content__menu} ${isMenuOpen ? styles.wrapper__content__menu_open : ''}`}>
                    {options?.map(Option)}
                </ul>
            </div>
        </div>
    )
}
