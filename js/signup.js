// Cookie 설정
let cookieId = " ";
let cookieEmail = " ";
let cookiePassword = " ";
// let cookieGender = " ";


// 가입부분 체크
function signUpCheck(){

  let email = document.getElementById("email").value
  let id_ = document.getElementById("id_").value
  let password = document.getElementById("password").value
  let passwordCheck = document.getElementById("passwordCheck").value
  // let gender_man = document.getElementById("gender_man").checked
  // let gender_woman = document.getElementById("gender_woman").checked
  let check = true;

  // 이메일 확인
  if(email.includes('@')){
    let emailId = email.split('@')[0]
    let emailServer = email.split('@')[1]
    if(emailId === "" || emailServer === ""){
      document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
      check = false
    }
    else{
      document.getElementById("emailError").innerHTML=""
    }
  }else{
    document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
    check = false
  }


  // 이름 확인
  if(id_ === ""){
    document.getElementById("id_Error").innerHTML="아이디가 올바르지 않습니다."
    check = false
  } else{
    document.getElementById("id_Error").innerHTML=""
  }


// 비밀번호 확인
  if(password !== passwordCheck){
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML="비밀번호가 동일하지 않습니다."
    check = false
  }else{
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
  }

  if(password === ""){
    document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
    check = false
  } else{
    //document.getElementById("passwordError").innerHTML=""
  }
  if(passwordCheck === ""){
    document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 입력해주세요."
    check = false
  } else{
    //document.getElementById("passwordCheckError").innerHTML=""
  }

  // 성별 체크 확인
  // if(!gender_man && !gender_woman){
  //   document.getElementById("genderError").innerHTML="성별을 선택해주세요."
  //   check = false
  // } else{
  //   document.getElementById("genderError").innerHTML=""
  // }


  if(check){
    document.getElementById("emailError").innerHTML=""
    document.getElementById("id_Error").innerHTML=""
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
    // document.getElementById("genderError").innerHTML=""
    
    alert("회원가입을 축하합니다.");

    cookieId = id_;
    cookieEmail = email;
    cookiePassword = password;
    // cookieGender = $('input:radio[name=gender]:checked').val();


    Cookies.set('id', cookieId, { expires: 1 });
    Cookies.set('email', cookieEmail, { expires: 1 });
    Cookies.set('password', cookiePassword, { expires: 1 });
    // Cookies.set('gender', cookieGender, { expires: 1 });

    hrefLink();
  }
}

function hrefLink() {
  location.href = "index.html";
}