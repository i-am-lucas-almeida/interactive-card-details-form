import styles from "../../sass/components/CardSection.module.scss";

import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

const CardSection = ({ formData }) => {

    const { cardName, cardNumber, validMonth, validYear, securityNumber } = formData;

    return (

        <div className={styles.container}>

            <FrontCard
                cardName={cardName}
                cardNumber={cardNumber}
                cardYear={validYear}
                cardMonth={validMonth}
            />

            <BackCard
                securityNumber={securityNumber}
            />

        </div>

    );

};

export default CardSection;