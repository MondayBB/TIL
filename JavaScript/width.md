# Width 구하기

- window.innerWidth
- clientWidth
- offsetWidth

## ✔ innerWidth

- 현재 열린 창(브라우저 윈도우)의 너비값을 가져온다

```jsx
let Width = window.innerWidth;
console.log(Width);
// 현재 열린창의 너비값을 가져온다.
```

## ✔ clinetWidth

- `padding`을 포함한 너비 값을 가져온다.
- `scrollbar`, `border`, `margin` 값은 제외하고 가져온다.

```javascript
// body에 border값이 50이 있을 때
const bodyWidth = document.body.clientWidth;
console.log(bodyWidth); // 1820;
```

## ✔ offsetWidth

- `padding`, `border` 를 포함한 너비 값을 가져온다.
- `scrollbar`, `margin` 값은 제외하고 가져온다.

```javascript
// body에 border값이 50이 있을 때
const bodyWidth = document.body.offsetWidth;
console.log(bodyWidth); // 1920
```
