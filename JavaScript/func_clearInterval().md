## clearInterval(function name)

setInterval() 호출을 중단한다.

```jsx
let count = 0;

let countUp = setInterval(function countStart(){
  document.querySelector("body").innerHTML = count;
  count++;
  if(count > 5){
    clearInterval(countUp); 
// count의 값이 5보다 커지면 countUp이라는 이름의 setInterval()호출을 중단한다.
  }
}, 1000);
```
