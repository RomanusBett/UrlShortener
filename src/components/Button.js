import styles from './home.module.css';

const Button = (props)=>{
    return (
         <button className={styles.shorten_button} onClick={props.onClick}>
            SHORTEN URL
         </button>
    )
}
export default Button;