$(".read-btn").on("click", function () {
  $(this)
    .closest(".card")
    .find("p")
    .slideToggle(300);
});
