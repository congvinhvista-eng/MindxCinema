document.addEventListener("DOMContentLoaded", () => {
  const accountName = document.getElementById("accountName");

  if (accountName) {
    const currentUser = localStorage.getItem("softrollCurrentUser");
    accountName.textContent = currentUser || "Sign in";
    accountName.href = currentUser ? "#account" : "dangnhap.html";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const signupButton = document.getElementById("signupBtn");

  if (!signupButton) return;

  signupButton.addEventListener("click", () => {
    window.location.href = "dangky.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("loginBtn");

  if (!loginButton) return;

  loginButton.addEventListener("click", () => {
    window.location.href = "dangnhap.html";
  });
});
