# Closure

함수가 생성될 당시의 외부 변수를 기억, 생성 이후에도 계속 접근 가능

외부 함수가 종료된 이후에도 내부 함수가 외부 함수에 접근할 수 있다.

```jsx
function outfunc(x){ //외부함수
  return function innerfunc(y){ //내부함수
    document.write(x + y);
  }
}
let add1 = outfunc(5);
add1(1); //6
```

outfunc(5) 함수의 실행이 끝났는데도 innerfun()는 outfunc(5)를 기억하고 접근한다.

```jsx
let add2 = outfunc(8);
add2(2); // 10
add1(15); // 20
```

outfunc() 함수의 매개변수가 달라졌는데도 add1()은 여전히 outfunc(5)를 기억하고 값을 낸다.

75%정도 이해함
