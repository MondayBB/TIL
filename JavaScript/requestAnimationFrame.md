# window.requestAnimationFrame(callback)

- 애니메이션 구현을 위한 함수
- callback을 인자로 갖는다. **callback 루틴은 반드시 스스로 requestAnimationFrame()을 호출해야 한다.**

---

## 예제

부드럽게 움직이는 커서

- `loop()` 함수 안에 `window.requestAnimationFrame(loop)`을 호출하여 자기 자신을 콜백하도록 하였다. 그럼 loop함수가 반복되면서 `mouseX, mouseY`의 값이 계속하여 변하게 된다.

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
```

```javascript
function loop() {
  mouseX = mouseX + (x - mouseX) * speed;
  mouseY = mouseY + (y - mouseY) * speed;

  cursorItem.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  window.requestAnimationFrame(loop);
}
```

---

## setInterval 보다 requestAnimationFrame 을 쓰는 이유

[블로그](https://simsimjae.tistory.com/402)
