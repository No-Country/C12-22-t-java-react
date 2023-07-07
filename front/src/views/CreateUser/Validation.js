const validation = (form, errorsState) => {
    const errors = { ...errorsState };
  
    // name
    if (!form.name) errors.name = "";
    else if (form.name.length < 6) errors.name = "Debe tener mas de 6 caracteres";
    else {
      errors.name = "";
    }
    // lastname
    if (!form.lastName) errors.lastName = "";
    else if (form.lastName.length < 3) errors.lastName = "Debe tener mas de 3 caracteres";
    else {
      errors.lastName = "";
    }
  
    // email
    if (!form.email) errors.email = "";
    else if (form.email.length > 35)
      errors.email = "No debe superar 35 caracteres";
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) {
      errors.email = "su email no es válido";
    } else {
      errors.email = "";
    }
    // password
    if (!form.password) errors.password = "";
    else if (!/[A-Za-z0-9]/.test(form.password))
      errors.password = "La contraseña deben ser numeros y letras";
    else if (form.password.length < 6)
      errors.password = "contraseña muy corta";
    else {
      errors.password = "";
    }

    return errors;
  };
  
  export default validation;