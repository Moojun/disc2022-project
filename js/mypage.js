// cookie 내역 초기화
function cookieReset() {
  Cookies.remove('id');
  Cookies.remove('password');
  Cookies.remove('email');
  hrefLink();
}

// index.html 메인 화면으로 이동
function hrefLink() {
  location.href = "../index.html";
}