myFunction = function (event) {
  //reset all menu items
  document.querySelectorAll("ul li a.active").forEach(function (item) {
    item.classList.remove("active");
  });
  //mark as active selected menu item
  event.target.classList.add("active");
};

function my_Function() {
  var x = document.getElementById("side");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// handle on page scroll
