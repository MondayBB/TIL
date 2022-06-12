# onchange 이벤트

- 요소 값이 변경됐을 때 이벤트가 발생한다.

input의 텍스트를 입력하고 엔터를 누르면 inputValue의 글자색이 변하는 함수이다.  
input의 값이 변하면 onCh()가 실행된다.

```html
<!-- html -->
<input type="text" placeholder="입력 시 색상바뀜" onchange="onCh()" />
<div id="value"></div>
```

```jsx
// js
const input = document.querySelector("input");
const inputValue = document.querySelector("#value");

function onCh() {
  inputValue.innerText = input.value;
  inputValue.style.color = "red";
}
```

---

## 📌addEventListener에서의 onchange 이벤트

`onchange`가 아닌 `change`로 사용해야 한다.

```jsx
input.addEventListener("change", onCh);
```

---

## 📌React에서의 onchange 이벤트

React에서는 `onchange`를 `onChange`로 사용해야 한다.
