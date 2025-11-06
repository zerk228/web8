// catalog.js — логика каталога
// При нажатии на "Подробнее" текст манги сворачивается и разворачивается
$(".read-btn").on("click", function () {
  $(this)
    .closest(".card")
    .find("p")
    .slideToggle(300);
});
