window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".main div");
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });

  function glow(i) {
    pads[i].classList.add("active");
    setTimeout(function () {
      pads[i].classList.remove("active");
    }, 200);
  }

  document.addEventListener("keypress", function (e) {
    if (e.key == "q") {
      document.querySelector(".kick .sound").currentTime = 0;
      document.querySelector(".kick .sound").play();
      glow(0);
    }
    if (e.key == "w") {
      document.querySelector(".snare1 .sound").currentTime = 0;
      document.querySelector(".snare1 .sound").play();
      glow(1);
    }
    if (e.key == "e") {
      document.querySelector(".precussion1 .sound").currentTime = 0;
      document.querySelector(".precussion1 .sound").play();
      glow(2);
    }
    if (e.key == "r") {
      document.querySelector(".precussion2 .sound").currentTime = 0;
      document.querySelector(".precussion2 .sound").play();
      glow(3);
    }
    if (e.key == "a") {
      document.querySelector(".openHihat .sound").currentTime = 0;
      document.querySelector(".openHihat .sound").play();   
      glow(4);
    }
    if (e.key == "s") {
      document.querySelector(".precussion3 .sound").currentTime = 0;
      document.querySelector(".precussion3 .sound").play();
      glow(5);
    }
    if (e.key == "d") {
      document.querySelector(".precussion4 .sound").currentTime = 0;
      document.querySelector(".precussion4 .sound").play();
      glow(6);
    }
    if (e.key == "f") {
      document.querySelector(".snare2 .sound").currentTime = 0;
      document.querySelector(".snare2 .sound").play();
      glow(7);
    }
    if (e.key == "z") {
      document.querySelector(".closedHihat .sound").currentTime = 0;
      document.querySelector(".closedHihat .sound").play();
      glow(8);
    }
    if (e.key == "x") {
      document.querySelector(".track").input();
      glow(9);
    }
    if (e.key == "c") {
      glow(10);
    }
    if (e.key == "v") {
      glow(11);
    }
  });
});
