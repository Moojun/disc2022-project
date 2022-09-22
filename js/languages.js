let indicator = document.querySelectorAll('.indicator button');
let lightbox = document.querySelector('#lightbox');
let block = document.querySelector('#block'); // 라이트박스 배경
let lightboxContents = document.querySelectorAll(".lightbox-contents");

// lightbox 표시
function lightbox_open(num){
    lightbox.setAttribute('class', 'active');
    block.setAttribute('class', 'active');

    for (let i = 0; i < lightboxContents.length; i++) {
      lightboxContents[i].style.display = 'none'
    }
    lightboxContents[num - 1].style.display = '';

    change_img(num);
    indicator[num-1].focus();	
}

// lightbox close
function lightbox_close(){
    lightbox.removeAttribute('class');
    block.removeAttribute('class');
}

// 이미지 전환 표시 함수
function change_img(val){
  let imgs = document.querySelectorAll('figure > img');

  for(let i = 0; i < imgs.length; i++){
    imgs[i].removeAttribute('class');
  }
  imgs[val - 1].setAttribute('class', 'active');

  for (let i = 0; i < lightboxContents.length; i++) {
    lightboxContents[i].style.display = 'none'
  }
  lightboxContents[val - 1].style.display = '';
}	


// 장바구니 담기: Cookie 사용
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

