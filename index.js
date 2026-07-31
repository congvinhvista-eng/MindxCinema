document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("signupBtn");
  if (!btn) {
    return;
  }

  btn.addEventListener("click", function () {
    window.location.href = "dangky.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("loginBtn");
  if (!btn) {
    return;
  }

  btn.addEventListener("click", function () {
    window.location.href = "dangnhap.html";
  });
});