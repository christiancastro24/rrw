var btn = document.querySelector(".no");
var position;
btn.addEventListener("click", function () {
  position ? (position = 0) : (position = 150);
  btn.style.transform = `translate(${position}px,0px)`;
  btn.style.transition = "all 0.2s ease";
});

var btn = document.querySelector(".no");
var position;
btn.addEventListener("mouseover", function () {
  position ? (position = 0) : (position = 350);
  btn.style.transform = `translate(${position}px,0px)`;
  btn.style.transition = "all 0.2s ease";
});

const sim = document.getElementById("yes");

sim.addEventListener("click", () => {
  let timerInterval;
  Swal.fire({
    title: "Obrigado por aceitar namorar comigo 😍",
    html: "💘",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 1000);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    window.location.href = "https://www.youtube.com/watch?v=lp-EO5I60KA"
  });
});
