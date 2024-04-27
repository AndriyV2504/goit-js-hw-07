document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".login-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const formData = {};
      const inputs = form.elements;
  
      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
  
        if (input.type !== "submit") {
          const key = input.name;
          const value = input.value.trim();
          formData[key] = value;
        }
      }
  
      const formValues = Object.values(formData);
      const allFieldsFilled = formValues.every(value => value !== "");
  
      if (!allFieldsFilled) {
        alert("All form fields must be filled in");
        return;
      }
  
      console.log(formData);
  
      form.reset();
    });
  });
  