## setTimeout(func, duration)

일정 시간이 지난 후에 함수를 실행하는 방법   

👇*사용 방법1 - 함수 이름으로 setTimeout 호출*

```jsx
function hi1(){
  document.querySelector("body").innerHTML = "안녕";
}
function hi2(){
  document.querySelector("body").innerHTML = "반가워";
}
setTimeout(hi1, 0); // "안녕" 출력
setTimeout(hi2, 3000); // 3초 후 "반가워" 출력
```

👇*사용 방법2 - 호출 시 메서드를 같이 입력하여 한번에 호출*

```jsx
function hi1(name){
  document.querySelector("body").innerHTML = name + " 안녕";
}
function hi2(text){
  document.querySelector("body").innerHTML =  text + " 반가워";
}
setTimeout(hi1, 0, "yejin"); // "yejin 안녕" 출력
setTimeout(hi2, 3000, "만나서"); // 3초 후 "만나서 반가워" 출력
```
