 $("#reviewForm").on("submit", function (e) {
  e.preventDefault();
  const text = $("#reviewText").val().trim();
  if (!text) return;

  const newReview = $("<p>")
    .html("<strong>Гость:</strong> " + text)
    .hide()
    .fadeIn(500);

  $("#reviews").append(newReview);
  $("#reviewText").val("");
});
