
function toggleCollapsible(button) {
  var content = button.nextElementSibling;
  if (content.style.display == "block") {
    content.style.display = "none";
  }
  else {
    content.style.display = "block";
  }
}