const openBtn = document.querySelector(".sidebar__trigger");
const closeBtn = document.querySelector(".sidebar__close");
const sidebar = document.querySelector(".sidebar");
const hideAmtBtn = document.querySelector(".btn-hide-amt");
const amtBalance = document.querySelectorAll(".amount");

openBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

hideAmtBtn.addEventListener("click", () => {
  if (
    document
      .querySelector(".btn-hide-amt .mdi")
      .classList.contains("mdi-eye-outline")
  ) {
    document
      .querySelector(".btn-hide-amt .mdi")
      .classList.remove("mdi-eye-outline");

    document
      .querySelector(".btn-hide-amt .mdi")
      .classList.add("mdi-eye-off-outline");
  } else {
    document
      .querySelector(".btn-hide-amt .mdi")
      .classList.add("mdi-eye-outline");

    document
      .querySelector(".btn-hide-amt .mdi")
      .classList.remove("mdi-eye-off-outline");
  }
  amtBalance.forEach((amt) => {
    amt.classList.toggle("hide-amount");
    if (amt.classList.contains("hide-amount")) {
      amt.innerHTML = "*.**";
    } else {
      amt.innerHTML = "₦1,000,000.00";
    }
  });
});
