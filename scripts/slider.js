let slider = document.querySelector(".slider"),
  sliderItem = document.querySelectorAll(".slider-item"),
  dots = document.querySelectorAll(".dots-item"),
  step = sliderItem[0].offsetHeight;

//Some data
let currentPage = 0,
  canDrag = false,
  canWeel = true,
  intialMousePostions = 0;
//functions
const changePage = (nextPage) => {
  slider.style.transform = `translateY(-${step * nextPage}px)`;
};
const getNextPage = (direction) => {
  if (direction === "next" && currentPage < sliderItem.length - 1) {
    currentPage = currentPage + 1;
    return currentPage;
  } else if (direction === "prev" && currentPage > 0) {
    currentPage = currentPage - 1;
    return currentPage;
  } else {
    return false;
  }
};
const togleActiveBtn = (id) => {
  dots.forEach((item) => {
    item.className = "dots-item";
  });
  dots[id].classList.add("active");
};
const resetCanWeel = () => (canWeel = true);
//listeners

//Control slider use ArrowUp and ArrowDown
window.addEventListener("keyup", (e) => {
  let nextPage =
    e.key === "ArrowUp"
      ? getNextPage("prev")
      : e.key === "ArrowDown"
      ? getNextPage("next")
      : false;
  if (nextPage !== false) {
    togleActiveBtn(nextPage);
    changePage(nextPage);
  }
});

//Control slider use dots there are no checks... I like dots
dots.forEach((item, id) => {
  item.addEventListener("click", (e) => {
    currentPage = id;
    togleActiveBtn(id);
    changePage(currentPage);
  });
});

//Control slider use drag-n-drop

slider.addEventListener("mousedown", (e) => {
  canDrag = true;
  intialMousePostions = e.pageY;
});
slider.addEventListener("mouseup", (e) => {
  canDrag = false;
});
slider.addEventListener("mousemove", (e) => {
  if (canDrag) {
    let currentMousePosition = e.pageY;
    let nextPage = false;
    if (intialMousePostions - currentMousePosition > 30) {
      nextPage = getNextPage("next");
      canDrag = false;
    } else if (intialMousePostions - currentMousePosition < -30) {
      nextPage = getNextPage("prev");
      canDrag = false;
    }
    if (nextPage !== false) {
      togleActiveBtn(nextPage);
      changePage(nextPage);
    }
  }
});

//Control slider use touch (for mobile, tablet or another sensor device)

slider.addEventListener("touchstart", (e) => {
  canDrag = true;
  intialMousePostions = e.targetTouches[0].pageY;
});
slider.addEventListener("touchend", (e) => {
  canDrag = false;
});
slider.addEventListener("touchmove", (e) => {
  if (canDrag) {
    let currentMousePosition = e.targetTouches[0].pageY;
    let nextPage = false;
    if (intialMousePostions - currentMousePosition > 30) {
      nextPage = getNextPage("next");
      canDrag = false;
    } else if (intialMousePostions - currentMousePosition < -30) {
      nextPage = getNextPage("prev");
      canDrag = false;
    }
    if (nextPage !== false) {
      togleActiveBtn(nextPage);
      changePage(nextPage);
    }
  }
});

//re-calculate step and slider transform on window resize
window.addEventListener("resize", (e) => {
  step = sliderItem[0].offsetHeight;
  changePage(currentPage);
});

// i need to slide every 3 seconds
setInterval(() => {
  let nextPage = getNextPage("next");
  if (nextPage !== false) {
    togleActiveBtn(nextPage);
    changePage(nextPage);
  }
}, 3000);

const sliderTexts = [
  "Size özel çözümler üreterek haklarınızı en güçlü şekilde savunuyoruz.",
  "Süreci şeffaf, hızlı ve etkili şekilde yöneterek yanınızda duruyoruz.",
  "Alanında uzman ekibimizle, her türlü hukuki sürecinizi titizlikle analiz ediyor ve size özel stratejiler geliştiriyoruz.",
  "Adaletin, güvenin ve şeffaflığın esas olduğu bir yaklaşım ile, haklarınızı korumak için tüm bilgi ve tecrübemizi ortaya koyuyoruz.",
];

// add some text part to all slider items
sliderItem.forEach((item, id) => {
  // add class to text
  let text = document.createElement("div");
  text.className = "abc-slider-text";
  text.innerHTML = sliderTexts[id];
  item.appendChild(text);
});
