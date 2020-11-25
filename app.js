//slideshow
var btn = document.querySelector(".button");
demo1 = document.querySelector(".demo1");
demo2 = document.querySelector(".demo2");
demo3 = document.querySelector(".demo3");
var i = 1;

document.addEventListener("load", see, true);

function see() {
  demo3.style.display = "block";
  demo2.style.display = "none";
  demo1.style.display = "none";
}

btn.addEventListener("click", slideshow, true);

function slideshow() {
  if (i == 1) {
    demo3.style.display = "none";
    demo2.style.display = "none";
    demo1.style.display = "block";
    i = 2;
  } else if (i == 3) {
    demo3.style.display = "none";
    demo2.style.display = "block";
    demo1.style.display = "none";
    i = 1;
  } else if (i == 2) {
    demo3.style.display = "block";
    demo2.style.display = "none";
    demo1.style.display = "none";
    i = 3;
  }
}

