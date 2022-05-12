# String 객체

## ⭐String 객체의 주요 기능

| 메서드 | 설명 |
| --- | --- |
| indexOf() | 특정 문자나 문자열이 처음으로 등장하는 위치의 인덱스를 반환 |
| lastIndexOf() | 특정 문자나 문자열이 마지막으로 등장하는 위치의 인덱스를 반환 |
| charAt() | 전달받은 인덱스에 위치한 문자를 반환 |
| slice() | 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 문자열을 추출한 새 문자열을 반환 |
| substring() | 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 문자열을 추출한 새 문자열을 반환 |
| substr() | 전달받은 시작 인덱스부터 길이만큼의 문자열을 추출한 새로운 문자열을 반환 |
| split() | 구분자를 기준으로 나눈 후, 나뉜 문자열을 하나의 배열로 반환 |
| concat() | 전달받은 문자열을 결합한 새로운 문자열을 반환 |
| toUpperCase() | 모든 문자를 대문자로 변환한 새로운 문자열을 반환 |
| toLowerCase() | 모든 문자를 소문자로 변환한 새로운 문자열을 반환 |
| trim() | 양 끝에 존재하는 공백과 모든 줄 바꿈 문자를 제거한 새로운 문자열을 반환 |
| search() | 인수로 전달받은 정규 표현식에 맞는 문자나 문자열이 처음으로 등장하는 위치의 인덱스를 반환 |
| replace() | 인수로 전달받은 패턴에 맞는 문자열을 대체 문자열로 변환한 새 문자열을 반환 |
| match() | 인수로 전달받은 정규 표현식에 맞는 문자열을 찾아서 하나의 배열로 반환 |
| includes() | 인수로 전달받은 문자나 문자열이 포함되어 있는지를 검사한 후 그 결과를 불리언 값으로 반환 |
| startsWith() | 인수로 전달받은 문자나 문자열로 시작되는지를 검사한 후 그 결과를 불리언 값으로 반환 |
| endsWith() | 인수로 전달받은 문자나 문자열로 끝나는지를 검사한 후 그 결과를 불리언 값으로 반환 |
| toLocaleUpperCase() | 영문자뿐만 아니라 모든 언어의 문자를 대문자로 변환한 새로운 문자열을 반환 |
| toLocaleLowerCase() | 영문자뿐만 아니라 모든 언어의 문자를 소문자로 변환한 새로운 문자열을 반환 |
| localeCompare() | 인수로 전달받은 문자열과 정렬 순서로 비교하여 그 결과를 정수 값으로 반환 |
| normalize() | 해당 문자열의 유니코드 표준화 양식을 반환 |
| repeat() | 해당 문자열을 인수로 전달받은 횟수만큼 반복하여 결합한 새로운 문자열을 반환 |
| toString() | string 인스턴스의 값을 문자열로 반환 |
| valueOf() | string 인스턴스의 값을 문자열로 반환 |

## String객체 사용 예제

### ⭐문자열 만들기

```jsx
//리터럴 방식
let str = 'hi';

//String 객체를 생성
let str = new String('hi');

//바로 호출도 가능
//문자 리터럴 방식 구문은 해석될 때 String 객체를 생성해서 이용하는 방식으로 변환되어 실행되기 때문
console.log('hi'.length); //2, new String('hi').length 와 같다.
```

### ⭐특정 위치의 문자 구하기

**`.charAt(index)`**

```jsx
let str = '안녕하세요.'
console.log(str.charAt(1)); //녕
console.log(str.charAt(5)); //.
```

### ⭐문자의 위치 찾기

`.indexOf(value, start)`

`value` = 찾을 문자

`start` = 시작위치, 기본값 `0`

찾는 문자열의 위치값을 찾지 못하면 `-1`을 리턴한다.

```jsx
let str = '안녕하세요.';
console.log(str.indexOf('세')); // 3
console.log(str.indexOf('하세')); // 2
console.log(str.indexOf('세',4)); // -1

let str2 = 'Hello';
console.log(str2.indexOf('l')); // 2, 문자가 중복될 경우 그 중 첫번째 문자를 호출한다.
console.log(str2.indexOf('l',3)); // 3
console.log(str2.indexOf('H')); // 0
console.log(str2.indexOf('h')); // -1, 대소문자를 구분한다.
```

### ⭐문자열 호출하기

`.slice(start, end)` 

`start` = 문자열의 시작 위치

`end` = 문자열의 끝 위치

`start` 인덱스부터 `end-1` 인덱스까지의 문자열을 호출한다.

```jsx
let str = '안녕하세요.';
console.log(str.slice(0,3)); // 안녕하
```

`.substr(start, length)`

`start` = 문자열의 시작 위치

`length` = 문자열 개수

```jsx
let str = '안녕하세요.';
console.log(str.substr(0,2)); // 안녕
```

### ⭐특정 위치의 문자를 다른 문자로 변경

`.replace(value, newValue)`

`value` = 원래 문자

`newValue` = 대체 문자

```jsx
let str = '안녕하세요.';
console.log(str.replace('.','?')); // 안녕하세요?
console.log(str.replace('세요','십니까')); // 안녕하십니까. , 문자열도 변경할 수 있다.
console.log(str.replace('녕','심').replace('.','?'); // 안심하세요?, 여러개의 문자도 바꿀 수 있다.
```
