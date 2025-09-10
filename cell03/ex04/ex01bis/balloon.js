$(document).ready(function () {
  const $balloon = $("#balloon");
  const colors = ["red", "green", "blue"];
  let colorIndex = 0;
  let size = 200;

  $balloon.on("click", function () {
    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;

    $balloon.css({
      width: size + "px",
      height: size + "px",
      backgroundColor: colors[colorIndex],
    });

    if (size > 420) {
      size = 200;
      colorIndex = 0;
      setTimeout(() => {
        $balloon.css({
          width: "200px",
          height: "200px",
          backgroundColor: colors[0],
        });
      }, 200);
    }
  });

  $balloon.on("mouseleave", function () {
    size = Math.max(200, size - 5);
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;

    $balloon.css({
      width: size + "px",
      height: size + "px",
      backgroundColor: colors[colorIndex],
    });
  });
});