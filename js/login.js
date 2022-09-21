// let loginBtn = document.querySelector(".submit-btn");
// loginBtn.addEventListener("click", signup);

// let idText = document.form1.id.value;
// let pwText = document.fomr1.pw.value;

function signup() {
  let idText = document.querySelector('#id').value;
  let pwText = document.querySelector('#pw').value;
  alert("정말로 가입하시겠습니까?");

  if ((idText != "" )&& (pwText != "" )) {
    console.log(idText);
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".login-text").style.display = "none";
    document.querySelector("#result-id").innerHTML = document.form1.id.value;
    document.querySelector(".result").setAttribute("style","display: block;" );
  }
  else {
    alert("아이디와 비밀번호를 정확하게 입력해 주세요");
  }

}