import styles from './Input.module.css';

const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
    return (<>
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}</label>
            <input 
                name={name} 
                id={name} 
                type={type} 
                placeholder={placeholder} 
                onChange={handleOnChange}
                value={value}
            />
        </div>
    </>);

}

export default Input;