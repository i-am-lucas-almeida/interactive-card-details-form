import styles from "../sass/components/BackCard.module.scss";

const BackCard = ({ securityNumber }) => {

    return (

        <div className={styles.card}>

            <span>
                {securityNumber ? securityNumber : "000"}
            </span>

        </div>

    );

};

export default BackCard;