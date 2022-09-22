// cookie 내역 초기화
function cookieReset() {
  Cookies.remove('id');
  Cookies.remove('password');
  Cookies.remove('email');

  // 장바구니 내역도 초기화
  for (let i = 0; i <= 10; i++) {
    Cookies.remove("book"+ i);
  }
  hrefLink();
}

// index.html 메인 화면으로 이동
function hrefLink() {
  location.href = "../index.html";
}