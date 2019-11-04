$(document).ready(function () {
  
    $("#bouto").on("click",function () {
        $("#bouto").hide();
        $("#devoIs").show();
    })
    $("#devoIs").on("click",function () {
        $("#bouto").show();
        $("#devoIs").hide();
    })
});
