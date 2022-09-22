function cookieBookReset() {
  for (let i = 0; i <= 10; i++) {
    if (Cookies.get("book"+ i) != undefined) {
      Cookies.remove("book"+ i);
    }
  }
  alert("장바구니 초기화가 완료 되었습니다.");

  location.reload();  // Cookie 제거 후 html 페이지 초기화를 위한 코드
}

console.log(Cookies.get());

