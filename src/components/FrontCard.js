import styles from "../sass/components/FrontCard.module.scss";

import logo from "../assets/card-logo.svg";

const FrontCard = ({ cardName, cardNumber, cardMonth, cardYear }) => {

    return (

        <div className={styles.card}>

            <img src={logo} alt="logo do cartão" />

            <h2>
                {cardNumber ? cardNumber : "0000 0000 0000 0000"}
            </h2>

            <aside>

                <p>
                    {cardName ? cardName : "Isabele Acciolo"}
                </p>

                <p>
                    {`${cardMonth ? cardMonth : "00"} / ${cardYear ? cardYear : "00"}`}
                </p>

            </aside>

        </div>

    );

};

export default FrontCard;