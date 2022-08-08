import { useEffect } from "react";
import styles from "../../sass/components/BackCard.module.scss";

const BackCard = ({ securityNumber }) => {

    function editCardNumber() {

        let number = securityNumber.padEnd("3", "0");
        return number;

    }

    useEffect(() => {

        editCardNumber();

    }, [securityNumber]);

    return (

        <div className={styles.card}>

            <span>
                {securityNumber ? editCardNumber() : "000"}
            </span>

        </div>

    );

};

export default BackCard;