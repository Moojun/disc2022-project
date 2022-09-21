// let loginBtn = document.querySelector(".submit-btn");
// loginBtn.addEventListener("click", signup);

function signup() {
  alert("정말로 가입하시겠습니까?");
  console.log("test");

  document.querySelector(".login-form").style.display = "none";
  document.querySelector(".login-text").style.display = "none";
  document.querySelector("#result-id").innerHTML = document.form1.id.value;
  document.querySelector(".result").setAttribute("style","display: block;" );

}