# Array.from()

반환되는 값을 배열로 만든다.

## ✔Array.from(str)

텍스트를 하나씩 배열의 요소르 바꾸어 반환한다.

```jsx
const strArr = Array.from("hello");
console.log(strArr); //['h', 'e', 'l', 'l', 'o']
```

## ✔Array.from(arr, Fn)

배열에 함수를 실행한 뒤 배열로 반환한다.

- **Fn** : arr의 모든 요소를 호출하여 함수를 적용한다.

```jsx
const plusArr = Array.from([1, 2, 3], (i) => i + 1);
console.log(plusArr); //[2, 3, 4]
```
