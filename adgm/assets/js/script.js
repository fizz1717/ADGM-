// const el = document.getElementById("login-form");
// if (el) {
  // document.getElementById("login-form").addEventListener("submit", functSubmit());
  // function functSubmit(event) {
    // event.preventDefault();
    // alert("fizza");
    // }
    // }
function formSubmit() {
  const username = document.getElementById("username").value;
  console.log(username);
  localStorage.setItem("username", username);
}
function getData(){
  let un = localStorage.getItem("username");
  console.log(un , "username");
  document.getElementById("topbar-username").innerHTML = "Welcome, " + un;
  document.getElementById("userProfile").innerHTML = un;
}
function redirect(){
  location.replace("index.html");
  localStorage.removeItem("username");
}
// login form input value set and get
const sidebarBtn = document.querySelector("#sidebar-toggle-btn");
  if (sidebarBtn) {
    document.querySelector("#sidebar-toggle-btn").addEventListener("click", () => {
      document.querySelector("#sidebar-wrap").classList.toggle("opened");
    });
}
const inboxImg = document.querySelector("#inbox-toggle-img");
if (inboxImg) {
  document.querySelector("#inbox-toggle-img").addEventListener("click", () => {
    document.querySelector("#inbox-toggle").classList.toggle("opened");
    document.querySelector(".dashboard-cards-area").classList.toggle("expanded");
  });
}
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
const btnMsgBox = document.querySelector("#button");
if (btnMsgBox) {
  document.querySelector("#button").addEventListener("click", () => {
  document.querySelector("#message").classList.toggle("opened");
});
}