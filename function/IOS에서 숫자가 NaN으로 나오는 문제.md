이벤트 페이지에 종료까지의 D-Day 카운트를 생성했다.

그런데 여기서 문제가 발생했다.

IOS에서는 숫자가 `NaN`으로 나타난다.

```jsx
let dday1 = "2022-05-02T17:01:00+0900";
let dday = new Date(dday1).getTime();
let eventEndDay = new Date().getTime();

let today; let gap; let day; let hour; let min; let sec;
let interval = setInterval(function(){
  today = new Date().getTime();
  gap = dday - today;
  day = Math.floor(gap / (1000 * 60 * 60 * 24));
  hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  sec = Math.floor((gap % (1000 * 60)) / 1000);

  if(gap <= 0){
    clearInterval(interval);
    // location.reload(true);
    alert('이벤트가 종료되었습니다.');
    day = "0";
    hour = "0";
    min = "0";
    sec = "0";
    document.getElementById("buyBtn1").style.display = "none";
    document.getElementById("buyBtn2").style.display = "none";
    document.getElementById("eventEnd").style.display = "block";
  }
  document.getElementById("eventDayNum").innerHTML = day;
  document.getElementById("eventHourNum").innerHTML = hour;
  document.getElementById("eventMinNum").innerHTML = min;
  document.getElementById("eventSecNum").innerHTML = sec;
}, 1000);
```

찾아보니 IOS에서는 날짜를 렌더링 하는 방식이 달라서 그렇다고 한다.

```jsx
// 내가 사용한 날짜 표기
let dday1 = "2022-05-02T17:01:00+0900";

//IOS 날짜 렌더링 방식
let dday1 = "2022/05/02T17:01:00+0900";
```

그래서 `replace()`를 사용하여 IOS 방식으로 변경된 날짜값을 `dday2`라는 변수에 할당하고,  `new Date(dday1).getTime()` 의 값이 `NaN`이면 `dday1`을 `dday2`로 변경하는 조건문을 만들었다.

```jsx
let dday1 = "2022-05-02T17:01:00+0900";
let dday2 = dday1.replace("-", "/").replace("T", " ");

if(isNaN(dday)){
  dday = new Date(dday2).getTime();
}
```

## 🥳최종

아이폰에서도 무리없이 잘나온다

```jsx
let dday1 = "2022-05-02T17:01:00+0900";
let dday2 = dday1.replace("-", "/").replace("T", " ");
let dday = new Date(dday1).getTime();
let eventEndDay = new Date().getTime();

if(isNaN(dday)){
  dday = new Date(dday2).getTime();
}

let today; let gap; let day; let hour; let min; let sec;
let interval = setInterval(function(){
  today = new Date().getTime();
  gap = dday - today;
  day = Math.floor(gap / (1000 * 60 * 60 * 24));
  hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  sec = Math.floor((gap % (1000 * 60)) / 1000);

  if(gap <= 0){
    clearInterval(interval);
    // location.reload(true);
    alert('이벤트가 종료되었습니다.');
    day = "0";
    hour = "0";
    min = "0";
    sec = "0";
    document.getElementById("buyBtn1").style.display = "none";
    document.getElementById("buyBtn2").style.display = "none";
    document.getElementById("eventEnd").style.display = "block";
  }
  document.getElementById("eventDayNum").innerHTML = day;
  document.getElementById("eventHourNum").innerHTML = hour;
  document.getElementById("eventMinNum").innerHTML = min;
  document.getElementById("eventSecNum").innerHTML = sec;
}, 1000);
```
[D-day 업데이트](https://github.com/Yejin-J/TIL/blob/master/%EB%AC%B8%EC%A0%9C%ED%95%B4%EA%B2%B0/D-day%20%EC%B9%B4%EC%9A%B4%ED%84%B0.md)
