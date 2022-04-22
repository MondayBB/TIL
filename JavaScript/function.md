## **⭐** 함수 선언문과 함수 표현식

### 함수 선언문

- 주요 코드 흐름 중간에 독자적인 구문 형태로 존재
- **함수 선언문이 정의되기 전에 호출할 수 있다.**
- 전역 함수 선언문은 어디에서든 사용할 수 있다.
- 엄격 모드에서 **코드 블록 내에 위치**한 함수가 선언문이라면 **블록 밖에서 호출할 수 없다.**

### 함수 표현식

- 표현식이나 구문 구성 내부에 생성
- 코드의 실행 흐름이 **해당 함수에 도달했을 때 함수 생성. 즉, 도달 전에 호출할 수 없다.**
- 엄격 모드에서 **코드 블록 내에 위치**한 함수가 표현식이라면 **블록 밖에서도 호출할 수 있다.**

---

## **⭐ 함수 선언문**

```jsx
add(20,30); //50, 함수 선언문이 정의되기 전에 호출할 수 있다.
function add(num1, num2){
  return console.log(num1 + num2);
}
add(10,20); //30
```

.

**함수 선언문 호출 방법1 -** 기본 호출 방법

```jsx
function add(num1, num2){
  return num1 + num2;
}

console.log(add(10,20)); //30
```

.

**함수 선언문 호출 방법2 -** 변수에 함수 값을 할당한다.

```jsx
function add(num1, num2){
  return num1 + num2;
}

let result = add(10,20); //result = 30
console.log(result); //30
```

.

**함수 선언문 호출 방법3** - 변수에 함수식을 할당하고 변수를 함수처럼 호출한다.

변수가 함수 그자체가 되어 함수처럼 호출할 수 있다.

```jsx
function add(num1, num2){
  return num1 + num2;
}

let result = add; //함수를 통째로 할당한다.
console.log(result); //result = function add(num1, num2){return num1 + num2}
console.log(result(10,20)); //30, 변수를 함수처럼 호출
// result(10,20) = function add(10, 20){return 10 + 20}
```

---

## **⭐ 함수 표현식**

```jsx
let add = function(num1, num2){
  return console.log(num1 + num2);
}
add(10,20); //30
```

---

## **⭐ 엄격모드에서 코드블록 내에 위치한 함수 호출**

### 함수 선언문 호출

함수가 선언된 블럭에서 호출해야 한다.

```jsx
//틀린 함수 선언문 호출
function hi(){
  function hello1(){
    alert("안녕")
  }
  function hello2(){
    alert("하세요.");
  }
}
hello1(); //Uncaught ReferenceError: hello1 is not defined
hi();
```

```jsx
//옳은 함수 선언문 호출
function hi(){
  function hello1(){
    alert("안녕")
  }
  hello1();
}
hi();
```

### 함수 표현식 호출

함수가 선언된 블럭 바깥에서 호출할 수 있다. **대신 변수는 바깥에서 선언해줘야 한다.**

```jsx
//함수 표현식 사용
let hello1; //변수 선언은 바깥에서 해줘야 호출된다.
function hi(){
  hello1 = function(){
    alert("안녕")
  }
}
hi(); // 순서대로 읽기때문에 hi() 먼저 호출해줘야 hello1()이 호출된다.
hello1();
```

---

## **⭐ 함수 즉시 호출 방법**

변수에 함수를 할당하면서 괄호로 감싸주면 바로 실행할 수 있다. 

**let 변수이름 = (function(매개변수){함수식} (매개변수 값))**

```jsx
let add = (function(num1, num2){
  return console.log(num1 + num2);
}(10,20)); //30 
```
