export const NumberMask = (e) => {

    let value = e.target.value;
    value = value.replace(/\D/g, "");
    e.target.value = value;
    return e;

};

export const CardNumberMask = (e) => {

    let value = e.target.value;
    value = value.replace(/[\D]/g, "");
    value = value.replace(/(\d{4})(\d)/, "$1  $2");
    value = value.replace(/(\d{4})(\d)/, "$1  $2");
    value = value.replace(/(\d{4})(\d)/, "$1  $2");
    e.target.value = value;
    return e;

};