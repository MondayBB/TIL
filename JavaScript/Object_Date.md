# Date객체

## ⭐ Date 객체

Date 클래스에는 날짜 및 시간과 관련된 유용한 기능이 있다

## ⭐ Date 객체 호출 방법
### new Date()

인수없이 호출하면 현재 날짜와 시간이 저장된 Date 객체가 반환된다

```jsx
let now = new Date();
console.log(now); //Mon Apr 11 2022 15:41:54 GMT+0900 (한국 표준시)
```

### new Date(milliseconds)

- UTC 기준 1970년 1월 1일 0시 0분 0초에서 milliseconds 밀리초(1/1000초) 후의 시점이 저장된 Date 객체를 반환
- 타임스탬프(timestamp) : 1970년의 첫날을 기준으로 흘러간 밀리초를 나타내는 정수, 이전 날짜에 해당하는 타임스탬프 값은 음수다

```jsx
let Jan01_1970 = new Date(0);
console.log(Jan01_1970); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)

let Jan02_1970 = new Date(24 * 3600 * 1000); // 1000(1초) * 3600 = 1시간 
console.log(Jan02_1970); // Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)
```

### new Date(datestring)

- 인수가 문자열이라면 해당 문자열은 자동으로 구문 분석된다

```jsx
let date1 = new Date("2022-04-11,17:00:00");
console.log(date1); // Mon Apr 11 2022 17:00:00 GMT+0900 (한국 표준시)
```

### new Date(year, month, date, hours, minutes, seconds, ms)

- month - 0(1월) ~ 11(12월) 사이의 숫자
- date의 default 값 = 1일

```jsx
let date2 = new Date(2022,0,1,0,0,0,0); // 시간 인수 생략 시 0으로 반환
console.log(date2); // Sat Jan 01 2022 00:00:00 GMT+0900 (한국 표준시)

let date3 = new Date(2022,3,11,16,12,05,555);
console.log(date3); // Mon Apr 11 2022 16:12:05 GMT+0900 (한국 표준시)
```

## ⭐ 함수(메서드) 목록

| 메서드 | 설명 |
| --- | --- |
| getDate() | 로컬 시간을 사용하여 일(월 기준) 반환 |
| getDay() | 로컬 시간을 사용하여 일(주 기준, 즉 요일)을 반환 |
| getFullYear() | 로컬 시간을 사용하여 연도를 반환 |
| getHours() | 로컬 시간을 사용하여 시간을 반환 |
| getMilliseconds() | 로컬 시간을 사용하여 밀리초를 반환 |
| getMinutes() | 로컬 시간을 사용하여 분을 반환 |
| getMonth() | 로컬 시간을 사용하여 월을 반환 |
| getSeconds() | 로컬 시간을 사용하여 초를 반환 |
| getTime() | 1970년 1월 1일 00:00:00 부터 현재시간까지 경과한 시간을 밀리초로 반환 |
| getYear() | 로컬 시간을 사용하여 연도 값을 반환, getFullYear() 사용을 권장 |
| setDate() | 로컬 시간을 사용하여 일(월 기준)을 설정 |
| setFullYear() | 로컬 시간을 사용하여 연도를 설정 |
| setHours() | 로컬 시간을 사용하여 시간을 설정 |
| setMilliseconds() | 로컬 시간을 사용하여 밀리초를 설정 |
| setMinutes() | 로컬 시간을 사용하여 분을 설정 |
| setMonth() | 로컬 시간을 사용하여 월을 설정 |
| setSeconds() | 로컬 시간을 사용하여 초를 설정 |
| setTime() | 날짜와 시간 값을 설정 |
| setYear() | 로컬 시간을 사용하여 연도 값을 설정, setFullYear() 사용을 권장 |

---

## ⭐ Date 객체의 자동고침
- 정해진 달의 수(0 - 11), 일의 수(1 - 31)을 넘을 경우 호출 시 자동으로 해당 월,일로 변경되서 반환된다
```jsx
let overDate = new Date(2022, 14, 32); // 2022년 15월 32일
console.log(overDate); // Wed Feb 01 2023 00:00:00 GMT+0900 (한국 표준시) / 2023년 2월 1일
```
- Date 객체를 호출할 때 더하기 연산이 가능하다.
```jsx
let addDate = new Date(2022, 3, 11); // 2022년 4월 11일
addDate.setDate(addDate.getDate() + 2); // addDate의 date 값에 +2 한 값을 addDate의 date로 설정
console.log(addDate); // Wed Apr 13 2022 00:00:00 GMT+0900 (한국 표준시)
```

## ⭐ Date 객체를 만들지 않고 시차 확인하기
### Date.now()

- new Date().getTime()과 결과가 동일
- 1970년 1월 1일부터 현재까지의 밀리초를 반환

```jsx
let start = Date.now();
console.log(start); //1649678951178
```

## ⭐ 문자열에서 날짜 읽어오기
### Date.parse(str)

- 문자열에서 날짜를 읽어올 수 있다.
- str의 형식 : YYYY-MM-DDThh:mm:ss.sssZ
- Z(옵션) : +-hh:mm 형식의 시간대를 나타냄

```jsx
let ms = Date.parse('2022-04-11T23:55:50.555');
console.log(ms); //1649688950555

let date4 = new Date(ms);
console.log(date4); //Mon Apr 11 2022 23:55:50 GMT+0900 (한국 표준시)
```
