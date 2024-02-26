function myfunction() {
  document.getElementById("jumiapay").style.filter = "grayscale(0%)";
}
function myfunction2() {
  document.getElementById("jumiapay").style.filter = "grayscale(100%)";
}
function myfunction3() {
  document.getElementById("jumialogistic").style.filter = "grayscale(0%)";
}
function myfunction4() {
  document.getElementById("jumialogistic").style.filter = "grayscale(100%)";
}
function myfunction5() {
  document.getElementById("dropdow").style.color = "red";
}
function resetColor() {
  document.getElementById("dropdow").style.color = "black";
}

let isDropdownOpen = false; // Flag to track the dropdown state
let isdropdownsecond = false;

// the reason for this remove and removeher function is because the down arrow in the both dropdown
//  does not want to obey the window.addeventlistener function , so i added the
// remove me function and add it to the onclick function of the other dropdown and i do the opposite for readher function

function swapIcon() {
  let dropdow = document.getElementById("down");
  dropdow.classList.toggle("fa-angle-up", !isDropdownOpen);
  dropdow.classList.toggle("fa-angle-down", isDropdownOpen);
}

const swapArrow = () => {
  let faju = document.getElementById("family");
  faju.classList.toggle("fa-angle-up", !isdropdownsecond);
  faju.classList.toggle("fa-angle-down", isdropdownsecond);
};

const oppoff = () => {
  let id = ["2nddropdownbtn", "family", "spanner", "o1"];
  let bow = document.getElementById("family");
  let d = document.getElementById("dropme");
  d.classList.remove("showme");
  bow.classList.remove("fa-angle-up");
  bow.classList.add("fa-angle-down");
  for (let i = 0; i < id.length; i++) {
    const currentColor = id[i];
    let no = document.getElementById(currentColor);
    no.style.removeProperty("background-color");
  }
};
const off = () => {
  let id = ["dropdow", "down", "user"];
  let arr = document.getElementById("down");
  let c = document.getElementById("dropdown-conten");
  c.classList.remove("show");
  arr.classList.remove("fa-angle-up");
  arr.classList.add("fa-angle-down");
  for (let i = 0; i < id.length; i++) {
    const currentColor = id[i];
    let yes = document.getElementById(currentColor);
    yes.style.removeProperty("background-color");
  }
};

function backgroundColor() {
  let id = ["dropdow", "down", "user"];
  for (let i = 0; i < id.length; i++) {
    const currentColor = id[i];
    let dropdow = (document.getElementById(currentColor).style.backgroundColor =
      "gray");
  }
}
function drop() {
  let work = document.getElementById("dropdown-conten");
  if ((isDropdownOpen = !isDropdownOpen));
  {
    // Toggle the dropdown state
    work.classList.toggle("show", isDropdownOpen);
  }
}

function usethis() {
  swapIcon();
  backgroundColor();
  drop();
  removeher();
}

window.addEventListener("click", function (event) {
  let dropdownContent = document.getElementById("dropdown-conten");
  if (
    event.target.matches(
      ".dropdown , .fa.fa-user-o , .fa.fa-angle-down , .fa.fa-angle-up"
    ) ||
    event.target.closest(".dropdown-content")
  ) {
    return; //  Click on the dropdown button or its content, do nothing
  }
  if (isDropdownOpen) {
    dropdownContent.classList.remove("show");
    swapIcon();
    isDropdownOpen = false; // Update the flag
  }
});

window.addEventListener("click", function (e) {
  if (
    !e.target.matches(
      `.dropdown , .fa.fa-user-o , .fa.fa-angle-down , .fa.fa-angle-up`
    )
  ) {
    let id = ["dropdow", "down", "user"];
    let content = this.document.getElementById("dropdown-conten");

    if (!content.contains(e.target)) {
      for (let i = 0; i < id.length; i++) {
        const currentColor = id[i];
        let yes = document.getElementById(currentColor);
        yes.style.removeProperty("background-color");
      }
    }
  }
});

//  second dropdown code.

const showme = () => {
  let dropme = document.getElementById("dropme");
  if ((isdropdownsecond = !isdropdownsecond));
  {
    dropme.classList.toggle("showme", isdropdownsecond);
  }
};

const groundColor = () => {
  let id = ["2nddropdownbtn", "family", "spanner", "o1"];
  for (let i = 0; i < id.length; i++) {
    const element = id[i];
    let me = (document.getElementById(element).style.backgroundColor = "gray");
  }
};

window.addEventListener("click", (e) => {
  if (
    !e.target.matches(
      `.trig-df-i-ctr-fs16 , .fa.fa-question-circle-o , .fa.fa-angle-down , .fa.fa-angle-up , .Help`
    )
  ) {
    let array = ["2nddropdownbtn", "family", "spanner", "o1"];
    let content = document.getElementById("dropme");
    if (!content.contains(e.target)) {
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let id = document.getElementById(element);
        id.style.removeProperty("background-color");
      }
    }
  }
});

function helpme() {
  swapArrow();
  showme();
  groundColor();
  removeme();
}

window.addEventListener("click", (event) => {
  if (
    event.target.matches(
      ".trig-df-i-ctr-fs16 , .fa.fa-question-circle-o , .fa.fa-angle-down , .fa.fa-angle-up , .Help"
    ) ||
    event.target.closest(".inbox")
  ) {
    return;
  }
  if (isdropdownsecond) {
    let dropme = document.getElementById("dropme");
    dropme.classList.remove("showme");
    swapArrow();
    isdropdownsecond = false;
  }
});
//  image looping
let img = [
  "image 1.jpg",
  "image 2.png",
  "image 3.jpg",
  "image 4.png",
  "image 5.jpg",
  "image 6.png",
  "image 7.jpg",
];
let currentSlide = 0;
let changeImg = () => {
  let slide = document.getElementById("imgflip");
  slide.src = img[currentSlide];

  currentSlide = (currentSlide + 1) % img.length;

  let buttons = document.querySelectorAll(".circlebutton");

  buttons.forEach((button, index) => {
    button.classList.toggle("active", index === currentSlide);
  });
};
let doIt = () => {
  changeImg();
  setInterval(changeImg, 3000);
};
window.onload = doIt();

const divContainer = document.getElementById("likedropdown");
const right = document.getElementById("front");
const left = document.getElementById("left");

right.addEventListener(`click`, () => {
  divContainer.scrollLeft += divContainer.offsetWidth;
});

left.addEventListener(`click`, () => {
  divContainer.scrollLeft -= divContainer.offsetWidth;
});

let showYou = () => {
  let arrowdivo = document.querySelector(`.arrowdiv4`);
  arrowdivo.classList.add("showyourself");
  const naMe = document.getElementById("naMe");
  let offsetWidth = 1700;
  if (naMe.scrollLeft >= offsetWidth) {
    arrowdivo.classList.remove("showyourself");
  }
  let scrolling = 100;
  const disappear = document.querySelector(`.arrowdiv3`);
  if (naMe.scrollLeft <= scrolling) {
    disappear.classList.remove("anothershow");
  }
};
let hideyou = () => {
  let arrowdivo = document.querySelector(`.arrowdiv4`);
  arrowdivo.classList.remove("showyourself");
};

const moveByForce = () => {
  const naMe = document.getElementById("naMe");
  let offsetWidth = 600;
  naMe.scrollLeft += offsetWidth;
};
const moveByFire = () => {
  const naMe = document.getElementById("naMe");
  let offsetWidth = 600;
  naMe.scrollLeft -= offsetWidth;
  const disappear = document.querySelector(`.arrowdiv3`);
};
const main = document.querySelector(`.mainscroll`);
main.addEventListener("scroll", () => {
  const disappear = document.querySelector(`.arrowdiv3`);
  disappear.classList.add("anothershow");
});
const timer = () => {
  const time = document.getElementById("time");
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");

  time.innerHTML = `Time Left is : ${hour}h : ${minute}m : ${second}s `;
};
window.onload = setInterval(timer, 1000);

const go = () => {
  const eko = document.getElementById("eko");
  const offsetWidth = 593;
  eko.scrollLeft += offsetWidth;
};
const back = () => {
  const eko = document.getElementById("eko");
  const offsetWidth = 593;
  eko.scrollLeft -= offsetWidth;
};

const first = document.querySelector(`.idontcare`);
first.addEventListener("scroll", () => {
  const backe = document.querySelector(`.backe`);
  const eko = document.getElementById("eko");
  backe.classList.add("shownow");
  let offsetWidth = 100;
  const width = 500;
  if (eko.scrollLeft <= offsetWidth) {
    backe.classList.remove("shownow");
  }
});
