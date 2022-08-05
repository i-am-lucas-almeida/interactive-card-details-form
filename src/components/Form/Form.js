import styles from "../../sass/components/Form.module.scss";

import { validate } from "./validateForm";

const Form = ({ formData, handleBlur, handleChange }) => {

    const { cardName, cardNumber, validMonth, validYear, securityNumber } = formData;

    const validateForm = validate(formData);

    const errors = validateForm;

    function onSubmit(e) {

        e.preventDefault();

        console.log(formData);

    }

    return (

        <form onSubmit={onSubmit} className={styles.form}>

            <fieldset>

                <label>Nome do cartão</label>

                <input
                    type="text"
                    name="cardName"
                    maxLength={20}
                    size={20}
                    placeholder="ex. Isabele Acciolo"
                    value={cardName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={errors.cardName ? styles.error : ""}
                />

                {errors.cardName && <small>{errors.cardName}</small>}

            </fieldset>

            <fieldset>

                <label>Número do cartão</label>

                <input
                    type="text"
                    name="cardNumber"
                    maxLength={16}
                    size={16}
                    placeholder="ex. 1234 5678 9999 0000"
                    value={cardNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={errors.cardNumber ? styles.error : ""}
                />

                {errors.cardNumber && <small>{errors.cardNumber}</small>}

            </fieldset>

            <div className={styles.form__bottom}>

                <fieldset>

                    <label>Data valid. (MM/AA)</label>

                    <div className={styles.form__date}>

                        <input
                            type="text"
                            name="validMonth"
                            maxLength={2}
                            size={2}
                            placeholder="MM"
                            value={validMonth}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={errors.date ? styles.error : ""}
                        />

                        <input
                            type="text"
                            name="validYear"
                            maxLength={2}
                            size={2}
                            placeholder="AA"
                            value={validYear}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={errors.date ? styles.error : ""}
                        />

                    </div>

                    {errors.date && <small>{errors.date}</small>}

                </fieldset>

                <fieldset className={styles.form__security_code}>

                    <label>CVV</label>

                    <input
                        type="text"
                        name="securityNumber"
                        maxLength={3}
                        size={3}
                        placeholder="ex. 123"
                        value={securityNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={errors.securityNumber ? styles.error : ""}
                    />

                    {errors.securityNumber && <small>{errors.securityNumber}</small>}

                </fieldset>

            </div>

            <button type="submit"
                className={styles.form__button}>
                Confirmar
            </button>

        </form>

    );

};

export default Form;