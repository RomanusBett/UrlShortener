import styles from './input.module.css';

const Input = ()=>{
    return(
        <div className={`${styles.col_3} ${styles.input_effect}`}>
            <input className={styles.effect_19} type='text' placeholder=''/>
            <label>Enter a Url</label>
            <span className={styles.focus_border}>
                <i/>
            </span>
        </div>
    )
}
export default Input;