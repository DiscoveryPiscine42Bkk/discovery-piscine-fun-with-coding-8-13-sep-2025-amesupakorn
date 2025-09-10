$(function () {
  $("#change-bg").on("click", function () {
    const randomColor = `rgb(
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}
    )`;
    $("body").css("background-color", randomColor);
  });
});