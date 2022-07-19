# ✔.addEventListener(이벤트, 핸들러함수, 옵션)

- 이벤트 : click과 같은 이벤트 이름
- 핸들러 함수 : 이벤트가 발생했을 때 실행되는 함수, **이벤트가 발생해야만 실행되어야 하므로 함수 뒤에 괄호()는 붙이지 않는다.**
- 옵션 :
  - once : true면 이벤트가 트리거될 때 리스너가 자동으로 삭제
  - capture : 어느 단계에서 이벤트를 다뤄야 하는지 알려주는 프로퍼티
  - passive : true면 리스너에서 지정한 함수가 preventDefault()를 호출하지 않음

```jsx
//html
<div class="bgColor" style="background: blue;"></div>;

//script
let bgColor = document.querySelector(".bgColor");
bgColor.addEventListener("click", popUp);

//핸들러 함수 popUp
function popUp() {
  alert("이 색은 파란색입니다.");
}
```

`addEventListener`는 호출할 때마다 다른 핸들러함수를 붙일 수 있다.

```jsx
bgColor.addEventListener("click", popUp);
bgColor.addEventListener("click", popUp2);

function popUp() {
  alert("이 색은 파란색입니다.");
}
function popUp2() {
  alert("이 색은 BLUE입니다.");
}
//popUp()과 popUp1()이 연달아 호출된다.
```

---

# ⭐이벤트 종류

- **click** : 요소를 클릭하면 이벤트가 발생한다.
- **mouseover** : 마우스가 요소 위에 있을 때 이벤트가 발생한다.
- **mouseenter** : 마우스가 요소 위에 있을 때 이벤트가 발생한다. **버블링이 발생하지 않는다.**
- **mouseout** : 마우스가 요소를 벗어날 때 이벤트가 발생한다.
- **mouseleave** : 마우스가 요소를 벗어날 때 이벤트가 발생한다. **버블링이 발생하지 않는다.**

* 버블링 : 한 요소에 이벤트가 발생하면 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작, 최상단 부모 요소까지 핸들러가 동작하는 현상이다.

- **input** : `input`, `select`, `textarea` 엘리먼트의 값이 변경되면 이벤트가 발생한다.
- **resize** : 요소의 크기가 변경되면 이벤트가 발생한다. resize 이벤트는 **window 객체에서만 발생**한다.

```jsx
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
// window 객체에서만 발생하는 이벤트이므로 addEventListener 사용 시 주의할 것
window.addEventListener("resize", handleWindowResize);
```

- **copy** : 요소를 복사할 때 이벤트가 발생한다.

```jsx
function handleWindowCopy() {
  alert("지금 복사했지!");
}

window.addEventListener("copy", handleWindowCopy);
```

- **offline** : 인터넷이 끊기면 이벤트가 발생한다.

```jsx
function handleWindowOffline() {
  alert("SOS no WIFI");
}

window.addEventListener("offline", handleWindowOffline);
```

- **online** : 인터넷이 연결되면 이벤트가 발생한다.

```jsx
function handleWindowOnline() {
  alert("ALL GOOD");
}

window.addEventListener("online", handleWindowOnline);
```

- **contextmenu** : 사용자가 contextmenu를 열려고하면 이벤트가 발생한다. 일반적으로 마우스 우클릭이 있다.

```jsx
// 마우스 우클릭 비활성화
const body = document.body;

function offMRB(event) {
  event.preventDefault(); //기본작업을 수행하지 않게 한다.
}
body.addEventListener("contextmenu", offMRB);
```

- **touchstart** : 사용자가 화면을 터치할 때 이벤트가 발생한다.

```javascript
body.addEventListener("touchstart", (e) => {
  let startPointX = e.touches[0].pageX;
  let startPointY = e.touches[0].pageY;
  console.log(startPointX, startPointY); // 터치한 부분의 좌표값을 반환한다.
});
```

- **touchmove** : 사용자가 화면을 따라 터치 포인트가 이동할 때 이벤트 발생한다.

```javascript
body.addEventListener("touchmove", (e) => {
  let startPointX = e.touches[0].pageX;
  let startPointY = e.touches[0].pageY;
  console.log(startPointX, startPointY);
  // 터치한 상태로 이동하는 모든 순간의 좌표가 반환된다. 터치를 시작한 지점은 반환하지 않는다.
});
```

- **touchend** : 사용자가 화면에서 터치를 끝낼 때 이벤트가 발생한다.

```javascript
body.addEventListener("touchend", (e) => {
  let startPointX = e.targetTouches[0].pageX;
  let startPointY = e.targetTouches[0].pageY;
  console.log(startPointX, startPointY);
  // 터치 드래그가 끝나고 마지막 지점의 좌표값을 반환한다.
});
```
