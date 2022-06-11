# Array
- join()
- split()
- 배열의 요소에 변수명 주기

***
### ✔join("구분자")
- 배열의 원소들을 인자로 넣은 구분자로 연결하여 문자열로 출력하는 메서드이다.
- 문자열로 반환되기 때문에 구분자를 넣을 때는 **따옴표로 감싸줘야 한다.**
- 인자에 아무것도 안넣었을 때 나오는 기본값은 `,` 이다.
```jsx
const alphabet = ["a", "b", "c"];

console.log(alphabet.join()); // 'a,b,c'
console.log(alphabet.join("/")); // 'a/b/c'
```

### ✔split("구분자")
- 문자열에서 인자로 넣은 구분자를 기준으로 하나씩 요소로 변환하여 배열로 반환한다.
```jsx
const day = "mon/tue/wed";
day.split("/"); //['mon', 'tue', 'wed']
```

### ✔배열의 요소에 변수명 주기
배열의 각 요소에 각각 다른 변수명 주려면, 변수를 선언할 때 배열의 길이만큼 변수이름을 `[]` 안에 넣어주면 된다.
```jsx
const arr = [1, 2, 3];
const [num1, num2, num3] = [1, 2, 3];

console.log(num1); // 1
console.log(num2); // 2
console.log(num3); // 3
```
