function handleFormSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  // Перевірка на незаповнені поля
  if (email === "" || password === "") {
    alert("Будь ласка, заповніть всі поля");
    return;
  }

  // Створення об'єкта
  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);
  event.target.reset();
}

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleFormSubmit);
