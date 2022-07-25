# 부드러운 커서 움직임

- 커서가 가는 방향을 따라 부드럽게 움직이는 도형 만들기

## ✔ html 구조

```html
<div class="cursorItem"></div>
```

## ✔ css 구조

```css
body {
  background: black;
  position: relative;
  cursor: none;
  margin: 0;
  padding: 0;
}
.cursorItem {
  position: absolute;
  width: 50px;
  height: 50px;
  background: red;
  top: 0px;
  left: 0px;
}
```

## ✔ javascipt 구조

**1. 변수 선언**

- `x, y` : 커서가 위치하는 x, y 값
- `mouseX, mouseY` : 도형이 커서를 따라가는 위치
- `speed` : 0에 가까울수록 부드럽게 따라오고 1에 가까울수록 커서와 동일하게 움직이는 변수
- `cursorItem` : 도형

```javascript
let x = 0;
let y = 0;
let mouseX = 0;
let mouseY = 0;
let speed = 0.2;
let cursorItem;
```

---

**2. 부드러운 커서 움직임을 위한 함수**

- `window.onload` : 페이지가 다 load 된 후에 실행한다.
- 변수 x와 y에 현재 커서의 위치를 할당한다.
- `loop()` : 커서가 움직이면 도형의 위치를 나타내는 mouseX, mouseY 변수에 값이 들어간다.
  - `window.requestAnimationFrame()` 을 통해 계속 반복된다.

```javascript
window.onload = function () {
  cursorItem = document.querySelector(".cursorItem");

  window.addEventListener("mousemove", mouseFunc);

  function mouseFunc(e) {
    x = e.clientX;
    y = e.clientY;
  }

  loop();
};

function loop() {
  mouseX = mouseX + (x - mouseX) * speed;
  mouseY = mouseY + (y - mouseY) * speed;

  cursorItem.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  window.requestAnimationFrame(loop);
}
```
