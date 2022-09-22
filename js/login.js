// let loginBtn = document.querySelector(".submit-btn");
// loginBtn.addEventListener("click", signup);

// let idText = document.form1.id.value;
// let pwText = document.fomr1.pw.value;

console.log("Current id is " , Cookies.get('id'));
console.log("Current pw is " ,  Cookies.get('password'));
console.log("Current email is " , Cookies.get('email'));
// console.log("Current gender is " , Cookies.get('gender'));


function login() {
  let idText = document.querySelector('#id').value;
  let pwText = document.querySelector('#pw').value;
  let state = confirm("로그인하시겠습니까?");

  if ((idText == Cookies.get('id') )&& (pwText == Cookies.get('password') ) && (state == true)) {
    // console.log(idText);
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".login-text").style.display = "none";
    document.querySelector("#result-id").innerHTML = document.form1.id.value;
    document.querySelector("#result-email").innerHTML = Cookies.get('email');
    document.querySelector(".result").setAttribute("style","display: block;" );
  }
  else if (state == false) {
    return;
  }
  else if (idText != Cookies.get('id')){
    alert("가입한 아이디와 일치하지 않습니다.");
  }
  else if (pwText != Cookies.get('password')){
    alert("가입한 비밀번호와 일치하지 않습니다.");
  }


}

    