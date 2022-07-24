# 특정 시간에 사라지고 나타나는 slide 만들기

## ✔ html 구조

- `.introSlider` : 나열된 슬라이드를 감싸는 태그의 클래스
- `.introSlides` : 각각의 슬라이드
- `.show` : 보여지는 슬라이드와 pager에 적용되는 클래스
- `.hide` : 숨겨질 슬라이드와 pager에 적용되는 클래스
- `.introBanMenu` : pager를 감싸는 태그의 클래스
- `#prev`, `#next` : 슬라이드 컨트롤 버튼

```html
<div class="container">
  <ul id="introSlider">
    <li class="introSlides show" style="background: red;"></li>
    <li class="introSlides hide" style="background: green;"></li>
    <li class="introSlides show" style="background: purple;"></li>
    <li class="introSlides show" style="background: blue;"></li>
    <li class="introSlides show" style="background: orange;"></li>
    <li class="introSlides show" style="background: aqua;"></li>
  </ul>

  <ul class="introBanMenu"></ul>
  <a href="#" id="prev"><</a>
  <a href="#" id="next">></a>
</div>
```

## ✔ Javascript

**1. 변수 지정**

```javascript
// 슬라이드 영역
const introSlider = document.querySelector("#introSlider");
const introSlides = document.querySelectorAll(".introSlides");
let slideShow = introSlider.querySelectorAll(".show");

// 컨트롤 영역
const introPrev = document.querySelector("#prev");
const introNext = document.querySelector("#next");

// 슬라이드 인덱스
let currentIdx = 0;
```

---

**★ 특정 시간에 생성되고 사라지게 하기**  
**아래에서 페이지 로드 시 슬라이드의 개수를 구하기 때문에 그것보다 상단에 작성한다.**

- 현재 시간을 가져오는 변수를 선언한다. => `currentTime`
- 배너가 생성될 시간과 사라질 시간을 가진 변수를 선언한다. => `eventStartTime`, `eventEndTime`

```javascript
// 현재 시간 구하기
let currentTime = new Date().getTime();

// 배너가 생성되고 사라질 시간
const eventStartTime = new Date(2022, 7 - 1, 18, 10, 0).getTime();
const eventEndTime = new Date(2022, 7 - 1, 25, 17, 1).getTime();
```

- 배너가 생성되고 사라질 시간과 해당 배너의 인덱스 번호를 변경하기 쉽도록 함수로 생성하였다.
- if문 : 현재 시간이 배너의 생성시간보다 크거나 같고, 배너의 삭제 시간보다 작을 때 해당 배너에 적용된 `hide` 클래스는 삭제하고, `add` 클래스를 추가한다.  
  그리고 배너 추가로 변동된 슬라이드들을 `slideShow` 에 다시 넣는다.

```javascript
// 인트로배너 시작, 종료
function eventBan(eventStartTime, eventEndTime, slideIndex) {
  if (currentTime >= eventStartTime && currentTime < eventEndTime) {
    introSlides[slideIndex].classList.remove("hide");
    introSlides[slideIndex].classList.add("show");
    slideShow = introSlider.querySelectorAll(".show");
  } else {
    introSlides[slideIndex].classList.remove("show");
    introSlides[slideIndex].classList.add("hide");
    slideShow = introSlider.querySelectorAll(".show");
  }
}
eventBan(eventStartTime, eventEndTime, 0);
```

- 그 시간이 되면 페이지가 새로고침되도록 한다.
- 페이지가 열려있는 시간을 계속 가져오는 함수를 넣기엔 용량이 클 것 같아 슬라이드가 넘어갈 때 시간을 확인(`currentTime`)하여 실행할 수 있도록 아래에 `setInterval` 에 함수를 실행하였다.
- if문 : (배너의 생성시간 <= 현재시간 > 배너의 생성시간+7500ms) 이거나,  
   (배너의 삭제시간 <= 현재시간 > 배너의 삭제시간+7500ms) 라면 새로고침한다.
  500ms의 오차시간을 주었다.

```javascript
function introReload() {
  currentTime = new Date().getTime();
  if (
    (currentTime >= eventStartTime && currentTime < eventStartTime + 7500) ||
    (currentTime >= eventEndTime && currentTime < eventEndTime + 7500)
  ) {
    location.reload();
  }
}
```

---

**2. 슬라이드 전체 너비 구하기**

- `clientWidth` 를 사용하여 스크롤 영역을 제외한 `body` 의 너비를 구하여 `bodyWidth` 변수에 할당한다.
- 페이지를 로드할 때마다 body의 너비를 슬라이드의 너비로 설정한다.

```javascript
let bodyWidth = document.body.clientWidth;
introSlider.style.width = `${slideShow.length * bodyWidth}px`;
```

---

**3. pager 생성**
- `creatLi()` : `show` 클래스를 가진 슬라이드의 개수만큼 `introBanMenu` 안에 `show` 클래스를 가진 `li` 태그를 생성한다.   
  생성된 `li` 태그는 `introBanMenuLi` 변수 안에 값으로 들어간다.   
  그리고 페이지가 로드될 때 li가 보여지도록 함수를 실행한다.
- `introBanMenuLiShow` 변수에 li의 값을 넣고, 첫번째 li 는 페이지가 로드될 때 항상 active 상태로 보여지도록 `active` 함수를 넣어준다.

```javascript
const introBanMenu = document.querySelector(".introBanMenu");
let introBanMenuLi;

function creatLi() {
  for (let i = 0; i < slideShow.length; i++) {
    let introBanMenuCreate = document.createElement("li");
    introBanMenuCreate.classList.add("show");
    introBanMenu.append(introBanMenuCreate);
  }
  introBanMenuLi = introBanMenu.querySelectorAll("li");
}
creatLi();

let introBanMenuLiShow = introBanMenu.querySelectorAll("li");
introBanMenuLiShow[0].classList.add("active");
```
---

**4. pager 클릭 시 슬라이드 이동**
- 위에 생성한 li 태그를 클릭하면 li의 인덱스와 동일한 인덱스를 가진 슬라이드로 이동하는 함수를 생성한다.
- 각각의 li에 click 이벤트를 주기 위해 li 를 배열로 묶고 forEach() 를 사용하였다.
- `dotClick()` : 클릭된 li에 클릭 이벤트를 실행한다.   
  - 변수 `idx` 에는 해당 li의 인덱스 번호를 넣는다.   
  - `idx` 의 값과 `bodyWidth` 의 값을 곱하여 동일한 인덱스를 가진 슬라이드로 위치가 변경된다.
  - `currentIdx` (슬라이드 인덱스) 가 아직 변경된 값을 갖지 못했으므로 변경된 인덱스 번호를 넣어준다. 
  - 클릭 전 `active` 상태였던 li가 계속 `active` 상태이므로 모든 li에서 `active` 클래스를 삭제하고 클릭한 li에만 `active` 클래스를 추가한다.
```javascript
function dotClick(e){
  e.addEventListener("click", function(){
    let idx = introBanMenuLiArr.indexOf(e);
    introSlider.style.transform = `translate3d(${idx * -(bodyWidth)}px, 0px, 0px)`;
    currentIdx = idx;
    for(let i=0; i<slideShow.length; i++){
      introBanMenuLi[i].classList.remove("active");
    }
    this.classList.add("active");
  });
}
const introBanMenuLiArr = Array.from(introBanMenuLi);
introBanMenuLiArr.forEach(dotClick);
```

--- 

5. 좌우 슬라이드 이어서...