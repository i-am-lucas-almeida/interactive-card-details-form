import styles from "../sass/components/Container.module.scss";

const Container = ({ children }) => {

    return (

        <div className={styles.container}>

            <div className={styles.container__content}>
                {children}
            </div>

        </div>

    );

};

export default Container;