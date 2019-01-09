
function toggleCollapsible(button) {
  var content = button.nextElementSibling;
  if (content.style.display == "block") {
    content.style.display = "none";
    button.classList.remove("DG-Active");
  }
  else {
    button.classList.add("DG-Active");
    content.style.display = "block";
  }
}

function openCollapsibleViaToC(id) {
  var button = document.getElementById(id);
  var content = button.nextElementSibling;
  if (content.style.display != "block") {
    content.style.display = "block";
    button.classList.add("DG-Active");
  }
}