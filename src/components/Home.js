import Input from "./input";
import Button from "./Button";
import styles from './home.module.css';
import Header from "./header";

const Home = () => {
    return (
        <div className={styles.big_container}>
            <div className={styles.homeContainer}>
                <Header />
                <Input />
                <Button />
            </div>
        </div>
    )
}

export default Home