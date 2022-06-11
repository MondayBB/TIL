# window 객체의 프로퍼티
- innerWidth
브라우저 윈도우의 뷰포트 너비
```jsx
let Width = window.innerWidth;
console.log(Width);
// 현재 열린창의 너비값을 가져온다.

// 그 외

// frameset 안의 어떤 frame의 너비를 가져온다.
let selfWidth = self.innerWidth; 

// 가장 가까운 frameset의 너비를 가져온다.
let parentWidth = parent.innerWithe;

// 가장 바깥쪽 frameset의 너비를 가져온다.
let topWidth = top.innerWidth;
```
