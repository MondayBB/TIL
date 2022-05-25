# 변수를 선언하는 방법
변수를 선언하는 방법에는 3가지가 있다.
- **var** (사용X)
- **let** (값 변경 가능)
- **const** (값 변경 불가)   
```jsx
// var는 먼저 선언되지 않아도 호출할 수 있다.
console.log(a); // undefined
var a = 5;
console.log(a);

// let은 먼전 선언되어야만 호출할 수 있다.
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
b = 20;
console.log(b); // 20

// const에게 할당된 값은 변경할 수 없다.
const b = 10;
b = 50;
console.log(b); //TypeError: Assignment to constant variable.
```
## ⭐ **기본적으로 const를 사용하고, 변수를 업데이트 할 때 let을 사용한다. var는 절대 쓰지 않는다.**

***

# var 호이스팅(hoisting)이란?

var로 선언한 모든 변수가 함수의 최상위로 끌어올려지는 현상 (hoist : 끌어올리다)

## ✔선언 전 호출이 가능하다.

```jsx
// var
console.log(a1); //undefined
var a1 = 1;
console.log(a1); //1

// let
console.log(a2);
let a2 = 1;
// Uncaught ReferenceError: Cannot access 'a2' before initialization
```

위에 코드를 보면 a1이 선언되기 전 a1이 undefined로 호출되는 것을 확인할 수 있다.

코드는 위에서 아래로 읽기 때문에 에러가 나는게 정상이지만, var는 스크립트가 실행될 때 호이스팅이 발생하여 선언한 변수가 끌어올려진다. **하지만 할당된 값은 호이스팅되지 않고 선언만 호이스팅된다.**

## ✔선언 전 값 할당이 가능하다

```jsx
// var
b1 = 2;
var b1;
console.log(b1); //2

// let
b2 = 2;
let b2;
console.log(b2);
// Uncaught ReferenceError: Cannot access 'b2' before initialization
```

var는 값을 할당하고 변수를 나중에 선언해도 된다.

## ✔같은 변수를 중복 선언할 수 있다

```jsx
// var
var c1 = 4;
console.log(c1); //4
var c1 = 3;
console.log(c1); //3

// let
let c2 = 4;
console.log(c2);
let c2 = 3;
console.log(c2);
// Uncaught SyntaxError: Identifier 'c2' has already been declared
```

같은 이름의 변수는 중복 선언 시 오류가 발생하는데, **var는 중복 선언을 해도 에러가 뜨지 않는다.**

## ✔지역변수로 선언한 변수를 전역에서도 호출할 수 있다.

```jsx
// var function
function test(){
  var d = 10;
  console.log(d);
}
test(); // 10
console.log(d); // Uncaught ReferenceError: d is not defined
```

var는 **함수에서는 지역변수로 선언이 된다.** 그래서 지역변수로 선언한 함수를 전역변수에서 호출하면 에러가 발생한다.

하지만 **그 외에 for문이나 if문 등에서는 지역변수로 선언되지 않는다.**

```jsx
// var else
for(var i=0; i<5; i++){
  console.log(i); // 0,1,2,3,4 출력
}
console.log(i); // 5 출력

// let
for(let j=0; i<5; i++){
  console.log(j);
}
console.log(j); //Uncaught ReferenceError: j is not defined
```

위에 코드를 보면 for문 안에서 var로 선언된 지역변수 i가 전역에서 호출이 되는 것을 확인할 수 있다. 호이스팅 때문이다.

# ⭐결론 = let을 사용하자⭐
