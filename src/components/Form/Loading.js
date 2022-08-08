import styles from "../../sass/components/Form.module.scss";

export const FormLoading = () => {

    return (

        <div className={styles.spinner}>
            <span></span>
            <span></span>
            <span></span>
        </div>

    );

};