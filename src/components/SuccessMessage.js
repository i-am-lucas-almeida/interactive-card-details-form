import styles from "../sass/components/SuccessMessage.module.scss";

import SuccessIcon from "../components/SuccessIcon";

const SuccessMessage = () => {

    return (

        <div className={styles.container}>

            <SuccessIcon />

            <h2>Tudo certo!</h2>

            <p>
                Adicionamos os detalhes do seu cartão
            </p>

            <button>
                Continuar
            </button>

        </div>

    );

};

export default SuccessMessage;