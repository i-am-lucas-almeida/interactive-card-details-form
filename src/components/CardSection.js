import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

const CardSection = ({ formData }) => {

    const { cardName, cardNumber, validMonth, validYear, securityNumber } = formData;

    return (

        <div>

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