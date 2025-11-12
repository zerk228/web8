$(document).ready(function () {
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

  savedReviews.forEach((text) => {
    const newReview = $("<p>")
      .html("<strong>Гость:</strong> " + text)
      .hide()
      .fadeIn(500);
    $("#reviews").append(newReview);
  });
});

$("#reviewForm").on("submit", function (e) {
  e.preventDefault();

  const text = $("#reviewText").val().trim();
  if (!text) return;

  const newReview = $("<p>")
    .html("<strong>Гость:</strong> " + text)
    .hide()
    .fadeIn(500);
  $("#reviews").append(newReview);

  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  savedReviews.push(text);
  localStorage.setItem("reviews", JSON.stringify(savedReviews));

  $("#reviewText").val("");
});
