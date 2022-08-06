import { useState } from "react";

import CardSection from "./components/CardSection";
import Container from "./components/Container";
import Form from "./components/Form/Form";

const App = () => {

  const initState = {
    cardName: "",
    cardNumber: "",
    validMonth: "",
    validYear: "",
    securityNumber: "",
    touched: {
      cardName: false,
      cardNumber: false,
      validMonth: false,
      validYear: false,
      securityNumber: false
    }
  };

  const [formData, setFormData] = useState(initState);

  function handleChange(e) {

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  }

  function handleBlur(e) {

    const { name, value } = e.target;
    setFormData({ ...formData, touched: { ...formData.touched, [name]: true } });

    if ((name === "validMonth") &&
      (formData.validMonth.length === 1)) {

      setFormData({ ...formData, validMonth: "0" + value });

    }

  }

  return (

    <Container>

      <CardSection
        formData={formData}
      />

      <Form
        formData={formData}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />

    </Container>

  );

};

export default App;
