import styles from './input.module.scss'

export const Input = ({className, onChange, value = '', name, icon, type}) => {
    const _onChange = ({target: {value}}) => {
        onChange && onChange({name, value})
    }

    return (
        <div className={`${className || ''} ${styles.wrapper}`}>
            {icon && <img src={icon} alt={`${name}_input_icon`}/>}
            <input type={type} value={value} name={name} onChange={_onChange}/>
        </div>
    )
}
