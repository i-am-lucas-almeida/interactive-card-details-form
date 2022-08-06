export const validate = (formData) => {

    const errors = {
        cardName: "",
        cardNumber: "",
        date: "",
        validMonth: "",
        validYear: "",
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

    } else if (formData.touched.cardNumber && (formData.cardNumber.replace(/ /g, "")).length < 16) {
        errors.cardNumber = "Número inválido";
    }

    if (formData.touched.validMonth && !formData.validMonth) {
        errors.date = "Campo obrigatório";
        errors.validMonth = "Campo obrigatório";

    } else if (formData.touched.validYear && !formData.validYear) {
        errors.date = "Campo obrigatório";
        errors.validYear = "Campo obrigatório";

    } else if (formData.touched.validMonth && formData.validMonth === "0") {
        errors.date = "Data inválida";
        errors.validMonth = "Data inválida";

    } else if (formData.touched.validMonth && formData.validMonth === "00") {
        errors.date = "Data inválida";
        errors.validMonth = "Data inválida";

    } else if (formData.touched.validMonth && parseInt(formData.validMonth) > 12) {
        errors.date = "Data inválida";
        errors.validMonth = "Data inválida";

    } else if (formData.touched.validYear && formData.validYear === "0") {
        errors.date = "Data inválida";
        errors.validYear = "Data inválida";

    } else if (formData.touched.validYear && parseInt(formData.validYear) < 22) {
        errors.date = "Data inválida";
        errors.validYear = "Data inválida";

    }

    if (formData.touched.securityNumber && !formData.securityNumber) {
        errors.securityNumber = "Campo obrigatório";

    } else if (formData.touched.securityNumber && formData.securityNumber.length < 3) {
        errors.securityNumber = "Código inválido";

    }

    return errors;

};