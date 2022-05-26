```jsx
const playerName = 'yejin';
const playerPoints = 10;
const playerParty = false;


const player = {
  name : "yejin",
  points : 10,
  party : false,
}
console.log(player.name); // yejin
console.log(player["name"]); // yejin

// object 업데이트
player.party = true;
console.log(player.party); // true
// const의 값은 변경할 수 없다. 여기서 값이 변경된건 party의 값이지 const의 값이 아니다. const의 값은 player이다.

// object 추가
player.lastName = "pizza";
console.log(player);

// 연산 가능
player.points = player.points + 35;
console.log(player.points); //45
```

객체를 활용한 계산기 만들기
```jsx
const calculator = {
  add : function(a, b){
    return a + b;
  },
  minus : function(a, b){
    return a - b;
  },
  multi : function(a, b){
    return a * b;
  },
  div : function(a, b){
    return a / b;
  },
  power : function(a, b){
    return a ** b;
  },
}
const add = calculator.add(522, 255);
const minus = calculator.minus(522, 255);
const multi = calculator.multi(5, 10);
const div = calculator.div(5, 10);
const power = calculator.power(2, 3);
```
