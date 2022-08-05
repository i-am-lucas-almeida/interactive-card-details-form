export const validate = (formData) => {

    const errors = {
        cardName: "",
        cardNumber: "",
        date: "",
        securityNumber: ""
    };

    const validName = /^[a-zA-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[a-zA-ZÀ-Ÿ][A-zÀ-ÿ']+$/;

    if (formData.touched.cardName && !formData.cardName) {
        errors.cardName = "Campo obrigatório";

    } else if (formData.touched.cardName && !validName.test(formData.cardName)) {
        errors.cardName = "Nome inválido";
    }

    if (formData.touched.cardNumber && !formData.cardNumber) {
        errors.cardNumber = "Campo obrigatório";

    } else if (formData.touched.cardNumber && formData.cardNumber.length < 16) {
        errors.cardNumber = "Número inválido";
    }

    if (formData.touched.validMonth && !formData.validMonth) {
        errors.date = "Campo obrigatório";

    } else if (formData.touched.validYear && !formData.validYear) {
        errors.date = "Campo obrigatório";

    } else if (formData.touched.validMonth && formData.validMonth === "0") {
        errors.date = "Data inválida";

    } else if (formData.touched.validMonth && formData.validMonth === "00") {
        errors.date = "Data inválida";

    } else if (formData.touched.validMonth && formData.validMonth > 12) {
        errors.date = "Data inválida";

    } else if (formData.touched.validYear && formData.validYear === "0") {
        errors.date = "Data inválida";

    }

    if (formData.touched.securityNumber && !formData.securityNumber) {
        errors.securityNumber = "Campo obrigatório";

    } else if (formData.touched.securityNumber && formData.securityNumber.length < 3) {
        errors.securityNumber = "Código inválido";

    }

    return errors;

};