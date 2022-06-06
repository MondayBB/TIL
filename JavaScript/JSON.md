# JSON과 메서드
### 📌JSON.stringify()
javaScript의 object, array 등 어떤 것이든 문자형으로 바꿔주는 함수   
```jsx
const num = 1;
JSON.stringify(num); // "1"

const array = [1,2,3,4,5];
JSON.stringify(array); // "[1,2,3,4,5]"
```   

### 📌JSON.parse()
문자형으로 변환된 객체를 다시 객체로 만드는 함수
```jsx
const strArray = JSON.stringify(array);
JSON.parse(strArray); // [1,2,3,4,5]
```
