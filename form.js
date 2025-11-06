// form.js — простая валидация формы "Контакты"
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Пожалуйста, заполните все поля!");
    return;
  }

  document.getElementById("formStatus").textContent =
    "Сообщение успешно отправлено!";
  e.target.reset();
});
