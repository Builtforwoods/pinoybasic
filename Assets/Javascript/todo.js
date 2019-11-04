$("input").keypress(function(event) {
  if (event.which === 13) {
    let todoText = $(this).val();
    $(this).val("");
    $("ul").append(
      `<li> ${todoText} <span><img src="./Assets/Oapaga.png"></span>`
    );
  }
});
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});
