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
