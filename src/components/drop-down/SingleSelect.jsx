import {useState} from "react";
import styles from "./drop-down.module.scss";

import clearIcon from '../../assets/image/cross.png'
import {nameFormatter} from "../../utils/nameFormatter";

export const SingleSelect = ({options, value, onChange, placeholder, wrapperClassName}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const Option = ({name, value}) => {
        return (
            <li onClick={onChange?.bind(null, {name, value})} key={name}
                className={styles.wrapper__content__menu__option}>
                {nameFormatter(name)}
            </li>
        )
    }

    return (
        <div onMouseEnter={setIsMenuOpen.bind(null, true)} onMouseLeave={setIsMenuOpen.bind(null, false)}
             className={`${styles.wrapper} ${wrapperClassName ? wrapperClassName : ''} `}>
            <p>{(value?.name && nameFormatter(value?.name)) || placeholder}</p>
            {value && <img onClick={onChange?.bind(null, null)} src={clearIcon} alt={'clear-icon'}/>}
            <div className={styles.wrapper__content}>
                <ul className={`${styles.wrapper__content__menu} ${isMenuOpen ? styles.wrapper__content__menu_open : ''}`}>
                    {options?.map(Option)}
                </ul>
            </div>
        </div>
    )
}
