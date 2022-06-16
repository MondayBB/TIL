# 기존에 구성한 D-day 카운터 재구성
[기존 코드 보러가기](https://github.com/Yejin-J/TIL/blob/master/%EB%AC%B8%EC%A0%9C%ED%95%B4%EA%B2%B0/IOS%EC%97%90%EC%84%9C%20%EC%88%AB%EC%9E%90%EA%B0%80%20NaN%EC%9C%BC%EB%A1%9C%20%EB%82%98%EC%98%A4%EB%8A%94%20%EB%AC%B8%EC%A0%9C.md)

- IOS에서 숫자가 NaN으로 나오는 문제는 new Date()에 날짜를 입력하는 방법으로 해결했다.
- 쓸데없이 남발한 전역변수들은 지역변수로 바꿔 정리했다.
- padStart()를 사용하여 한 자릿수가 나올 경우 앞에 0이 붙도록 했다.
- 함수를 전역에서 한번 호출하여 페이지가 열리면 바로 카운트다운이 시작되도록 했다.

```jsx
const eventDayNum = document.querySelector("#eventDayNum");
const eventHourNum = document.querySelector("#eventHourNum");
const eventMinNum = document.querySelector("#eventMinNum");
const eventSecNum = document.querySelector("#eventSecNum");

let eventCountDown = setInterval(eventCount, 1000);

function eventCount(){
  const endDay = new Date(`2022-06-27:17:01`);
  const nowDay = new Date();
  const difference = new Date(endDay-nowDay);

  let sec = Math.floor(difference/1000);
  let min = Math.floor(sec/60);
  let hour = Math.floor(min/60);
  let day = Math.floor(hour/24);

  // 이벤트 종료 시 적용될 함수
  if(difference <= 0){
    clearInterval(eventCountDown);
    alert("이벤트가 종료되었습니다.");
    document.querySelectorAll(".buyBtn")[0].style.display = "none";
    document.querySelectorAll(".buyBtn")[1].style.display = "none";
    document.querySelectorAll(".buyBtn")[2].style.display = "none";
    document.querySelector("#eventEnd").style.display = "block";
    day = "0";
    hour = "0";
    min = "0";
    sec = "0";
  }else{
    eventDayNum.textContent = String(day).padStart(2,"0");
    eventHourNum.textContent = String(hour%24).padStart(2,"0");
    eventMinNum.textContent = String(min%60).padStart(2,"0");
    eventSecNum.textContent = String(sec%60).padStart(2,"0");
  }
}
eventCount();
```
