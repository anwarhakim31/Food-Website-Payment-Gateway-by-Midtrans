const heroSection = document.querySelector(".hero");

heroSection.addEventListener("mousemove", function (e) {
  const move = document.querySelector(".parallax");
  const back = document.querySelector(".back-parallax");
  const move_value = move.getAttribute("data-value");

  let x = -(e.clientX * move_value) / 150;
  let y = -(e.clientY * move_value) / 150;
  let xx = (e.clientX * move_value) / 250;
  let yy = (e.clientY * move_value) / 250;

  move.style.transform = `translateX(${x}px) translateY(${y}px)`;

  back.style.transform = `translateX(${xx}px) translateY(${yy}px)`;
});

const humberger = document.querySelector(".humberger");
const navbar = document.querySelector(".navbar");
const close = document.querySelector(".close");

humberger.addEventListener("click", () => {
  navbar.classList.add("show");
  humberger.style.opacity = "0";
});

close.addEventListener("click", function () {
  navbar.classList.remove("show");
  humberger.style.opacity = "1";
});

const gbox1 = document.querySelector(".gbox1");
const gbox2 = document.querySelector(".gbox2");
const gbox3 = document.querySelector(".gbox3");
const gbox4 = document.querySelector(".gbox4");
const gbox5 = document.querySelector(".gbox5");
const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");
const c5 = document.querySelector(".c5");

function cursorDiv(box, category) {
  let isMouseMoving = false;

  box.addEventListener("mousemove", function (e) {
    isMouseMoving = true;

    let boundingRect = box.getBoundingClientRect();
    let mouseX = e.clientX - boundingRect.left;
    let mouseY = e.clientY - boundingRect.top;

    category.style.left = mouseX - 0 + "px";
    category.style.top = mouseY + 120 + "px";
  });

  box.addEventListener("mouseleave", function () {
    isMouseMoving = false;
    category.style.left = "initial"; // Mengembalikan posisi left ke nilai awal
    category.style.top = "initial"; // Mengembalikan posisi top ke nilai awal
  });

  setInterval(function () {
    if (!isMouseMoving) {
      category.style.left = "initial";
      category.style.top = "initial";
    }
  }, 100);
}

cursorDiv(gbox1, c1);
cursorDiv(gbox2, c2);
cursorDiv(gbox3, c3);
cursorDiv(gbox4, c4);
cursorDiv(gbox5, c5);

const shop = document.querySelector(".shop");
const shopPx = document.querySelector(".shops-parallax");

shop.addEventListener("mousemove", function (e) {
  let x = (e.clientX * 1) / 100;
  let y = (e.clientY * 1) / 100;

  shopPx.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

const container = document.querySelector(".shop-contains");
const snackBtn = document.querySelector(".snackbtn");
const foodBtn = document.querySelector(".foodbtn");
const drinkBtn = document.querySelector(".bevaragebtn");
const button = document.querySelectorAll(".btn");

function foodProduct() {
  let product = "";
  food.forEach((food) => {
    product += template(food);
  });

  container.innerHTML = product;
}
foodProduct();

drinkBtn.addEventListener("click", function () {
  checkClass(button);
  container.innerHTML = "";
  let product = "";
  drinkBtn.classList.add("active");
  drink.forEach((food) => {
    product += template(food);
  });

  container.innerHTML = product;
});

snackBtn.addEventListener("click", function () {
  checkClass(button);
  container.innerHTML = "";
  let product = "";
  snackBtn.classList.add("active");
  snack.forEach((food) => {
    product += template(food);
  });

  container.innerHTML = product;
});

foodBtn.addEventListener("click", function () {
  checkClass(button);
  foodProduct();
  foodBtn.classList.add("active");
});

function checkClass(button) {
  button.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });
}

function template(food) {
  return ` <div class="product">
            <div class="product-img">
              <img src="${food.img}" alt="" />
              <div class="toggle">
                <i class="ph ph-eye detail-product"></i>
                <i class="ph ph-shopping-bag detail-cart"></i>
              </div>
            </div>
            <h3 class="title">${food.title}</h3>
            <p class="info">${food.info}</p>
            <strong>Rp<span class="price">. ${food.price}</span></strong>
          </div>`;
}
