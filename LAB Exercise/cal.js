$(document).ready(function () {
  var displayValue = "0";
  $("#res").text(displayValue);

  $(".bttn").each(function () {
    $(this).click(function () {
      if (displayValue == "0") displayValue = "";
      if ($(this).text() == "AC") {
        displayValue = "0";
        $("#res").text(displayValue);
      } else if ($(this).text() == "=") {
        displayValue = eval(displayValue);
        $("#res").text(displayValue);
      } else if ($(this).text() == "C") {
        displayValue = displayValue.substring(0, displayValue.length - 1);
        $("#res").text(displayValue);
      } else if ($(this).text() == "sqr_root") {
        displayValue = Math.sqrt(displayValue);
        $("#res").text(displayValue);
      } else if ($(this).text() == "sqr") {
        displayValue = Math.pow(displayValue, 2);
        $("#res").text(displayValue);
      } else if ($(this).text() == "N") {
        displayValue += "-";
        $("#res").text(displayValue);
      } else {
        displayValue += $(this).text();
        $("#res").text(displayValue);
      }
    });
  });
});
