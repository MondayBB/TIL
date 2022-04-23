# Math함수
## 메서드 종류

| 메서드 종류 | 반환 값 |
| --- | --- |
| Math.ceil() | 올림, 반환값은 정수이다. |
| Math.floor() | 내림, 반환값은 정수이다. |
| Math.max() | 두 수 중 큰값을 반환 |
| Math.min() | 두 수 중 작은값을 반환 |
| Math.random() | 0과 1 사이의 난수 반환 |
| Math.round() | 반올림 |
| Math.sqrt() | 제곱근 반환 |

## Math.ceil(), Math.floor()

```jsx
let result = 5.858213596;
console.log(Math.ceil(result)); // 6
console.log(Math.floor(result)); // 5
```

## Math.max(), Math.min()

입력받은 두 수 중 큰값과 작은값 반환

```jsx
let value1 = window.prompt('숫자',0);
let value2 = window.prompt('숫자',0);
min = Math.min(value1, value2);
max = Math.max(value1, value2);
alert('큰값 : ' + max);
alert('작은값 : ' + min);
```

## Math.random(), Math.round()

Math.random() * 100 = 0 ~ 100 사이로 범위를 지정

+50 = 50부터 시작

Math.round()은 50 ≤ n ≤ 150 사이의 n의 값을 나타낸다.

```jsx
function showRandom(){
  let value = Math.round(Math.random() * 100) + 50;
  console.log(value);
}
showRandom();
console.log(parseInt(0.0000678)); // 0
console.log(parseInt(1.0000678)); // 1
```

> parseInt() 는 소수점 자리는 버리고 정수의 값만 반환한다.
>
