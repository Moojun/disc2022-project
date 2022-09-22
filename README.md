# 2022 디스커버리 경진대회 프로젝트

* 참가분야: 웹사이트
* Chrome 환경에서 사용을 권장합니다. (Safari의 경우 한글 글꼴 적용이 원활하게 되지 않음)

<br>

### 프로젝트 주제: 프로그래밍 언어 도서 쇼핑 웹사이트

* OS: macOS
* IDE: Visual Studio Code
* 사용 언어: HTML5, CSS, javaScript

### 작업 기간: 22.09.05 ~ 22.09.22

### 구현된 기능

* 회원가입, 로그인 
* 도서 구매: 버튼 클릭 시 장바구니에 담을 수 있음
* 문의하기 ( Google API )
* 쉬어가기: 테트리스, 스택 게임
* 장바구니: 담은 도서 목록을 확인할 수 있음
* 마이페이지: 회원가입 정보 확인 및 가입 내역 초기화 

### js-cookie 사용 부분 간단 정리

###### cdn 방식으로 import

```javascript
<script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.0/dist/js.cookie.min.js"></script>
```

###### signup.js

```javascript
// Cookie에 key, value 값 저장. 만료 기간은 1 day
Cookies.set('id', cookieId, { expires: 1 });
Cookies.set('email', cookieEmail, { expires: 1 });
Cookies.set('password', cookiePassword, { expires: 1 });
```

###### login.js

```javascript
// 사용자가 로그인 폼에 입력한 id 및 비밀번호와 회원가입 시에 입력한 id 및 비밀번호 값이 동일한지를 체크
if ((idText == Cookies.get('id') )&& (pwText == Cookies.get('password')) {
    ...
}
```

###### languages.js

```javascript
// 장바구니 담기
// Cookie에 대한 메소드가 거의 없어서, 임의로 'book'+번호 형식을 취함으로써 cookie에 정보 저장

let pageTitle = document.querySelector('.section-heading').innerHTML;
if (pageTitle == "C 언어 도서 목록") {
  console.log("here is C");
  let imgList = document.querySelectorAll('.section-h4');
  let buyButtonList = document.querySelectorAll('.img-buyButton');

  for (let i = 0; i < buyButtonList.length; i++) {
    buyButtonList[i].addEventListener('click', function(e) {
      alert(imgList[i].innerHTML + " 도서가 장바구니에 담겼습니다!");

      // C언어는 0부터 3
      Cookies.set(("book" + i), imgList[i].innerHTML);
    });
  }
}
else if (pageTitle == "Java 도서 목록") {
  console.log("here is Java");
  let imgList = document.querySelectorAll('.section-h4');
  let buyButtonList = document.querySelectorAll('.img-buyButton');

  for (let i = 0; i < buyButtonList.length; i++) {
    buyButtonList[i].addEventListener('click', function(e) {
      alert(imgList[i].innerHTML + " 도서가 장바구니에 담겼습니다!");
      
      // Java는 4부터 7을 저장
      Cookies.set(("book" + (i + 4)), imgList[i].innerHTML);
    });
  }
}
else {
  console.log("here is Python");
  let imgList = document.querySelectorAll('.section-h4');
  let buyButtonList = document.querySelectorAll('.img-buyButton');

  for (let i = 0; i < buyButtonList.length; i++) {
    buyButtonList[i].addEventListener('click', function(e) {
      alert(imgList[i].innerHTML + " 도서가 장바구니에 담겼습니다!");

       // Python은 8부터 10
      Cookies.set(("book" + (i + 8)), imgList[i].innerHTML);
    });
  }
}
```

###### mypage.html

```html
<!-- cookie를 html 화면에서 받아오도록 구현 -->
<body>
   <script>
     let savedId = Cookies.get('id');
     if (savedId == undefined) {
       savedId = "<b>가입된 아이디 정보가 없습니다.</b>"
     }
     let savedEmail = Cookies.get('email');
     if (savedEmail == undefined) {
       savedEmail = "<b>가입된 이메일 정보가 없습니다.</b>"
     }
     document.write("아이디: " + savedId);
     document.write("<br>");
     document.write("이메일 주소: " + savedEmail);
     document.write("<br>");
   </script>
</body>
```

###### mypage.js

```javascript
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
```


<br>


## Reference sites

> 1. Github pages 생성: [Github Docs: Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
>
> 2. javascript cookie library: js-cookie: https://github.com/js-cookie/js-cookie
>
> 3. font awesome: 대다수 유료이나, 무료 아이콘도 사용 가능. [fontawesome 공식 사이트](https://fontawesome.com/)
> 4. signup.html: 회원가입 페이지 참고. [tistory blog](https://cocoon1787.tistory.com/700)
> 5. mypage.html Button 모양 참고 링크: [velog](https://velog.io/@whdnjsdyd111/CSS-%EB%B2%84%ED%8A%BC-%EC%9D%B4%EC%81%98%EA%B2%8C-%EA%BE%B8%EB%AF%B8%EA%B8%B0)
> 6. 내 웹 페이지 프로젝트: https://github.com/Moojun/disc2022


<br>


### 아쉬운 점

* 따로 서버나 db를 활용하지 않다 보니, 사용자의 정보를 저장하기 위해서 Javascript cookie를 사용해서 브라우저에 저장하도록 하였으나, 사용할 수 있는 메소드가 한정되어 있어서 구현하는 데에 있어 한계점이 명확하게 존재했다.
  * 또한 서버 및 데이터베이스를 사용하지 않다 보니, 게시판 작성, 공지사항 작성 등 게시물을 직접 홈페이지 내에서 작성하는 기능을 구현하지 못하였다.
* mainPage.html 에서, slide show event를 Javascript를 사용해서 구현하려고 하였으나, 구현에 실패하였다.



