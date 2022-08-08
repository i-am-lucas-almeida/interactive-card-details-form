import styles from "../../sass/components/FrontCard.module.scss";
import { useEffect } from "react";

import logo from "../../assets/card-logo.svg";

const FrontCard = ({ cardName, cardNumber, cardMonth, cardYear }) => {

    function editCardNumber() {

        let number = cardNumber.replace(/ /g, "");

        number = number.padEnd("16", "0");

        let resultNumber = number.substring(0, 4) + "  " + number.substring(4, 8) + "  " + number.substring(8, 12) + "  " + number.substring(12, 16);

        return resultNumber;

    }

    useEffect(() => {

        editCardNumber();

    }, [cardNumber]);

    return (

        <div className={styles.card}>

            <img src={logo} alt="logo do cartão" />

            <h2>
                {cardNumber ? editCardNumber() : "0000 0000 0000 0000"}
            </h2>

            <aside>

                <p>
                    {cardName ? cardName : "Isabele Acciolo"}
                </p>

                <p>
                    {`${cardMonth ? cardMonth : "00"}/${cardYear ? cardYear : "00"}`}
                </p>

            </aside>

        </div>

    );

};

export default FrontCard;