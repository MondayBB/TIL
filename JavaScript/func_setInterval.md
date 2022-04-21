# 타이머 함수

## setInterval(func, duration)

일정 시간 간격을 두고 함수를 실행하는 함수

*👇사용 방법1 - 즉시 실행*

```jsx
setInterval(function countStart(){
  document.querySelector("body").innerHTML = count;
  count++;
}, 1000);
```

*👇사용 방법2 - 일반함수를 setInterval()에 할당*

```jsx
let count = 0;

function countStart(){
  document.querySelector("body").innerHTML = count;
  count++;
}
setInterval(countStart, 1000);
// 1초 간격으로 count가 증가한다
```

*👇사용 방법3 - 변수에 setInterval()을 할당*

```jsx
let countUp = setInterval(function countStart(){
  document.querySelector("body").innerHTML = count;
  count++;
}, 1000);
// 따로 선언하지 않아도 즉시 실행
```
