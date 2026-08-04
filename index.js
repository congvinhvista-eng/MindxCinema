document.addEventListener("DOMContentLoaded", function () {
  const accountName = document.getElementById("accountName");
  if (accountName) {
    const currentUser = localStorage.getItem("softrollCurrentUser");
    accountName.textContent = currentUser || "Account";
  }
});

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
