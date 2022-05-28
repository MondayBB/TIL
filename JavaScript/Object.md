# ⭐Object   
## 📌Object 생성과 호출   
✔**주의할 점**   
- 프로퍼티를 만들 때는 `:` 콜론을 사용한다.
- 이어서 새로운 프로퍼티를 만들 때는 `,` 쉼표를 사용한다. `;`은 함수나 객체가 끝날 때 사용한다. 
  
✔ **객체 호출 방법**
- 방법1, `객체이름.프로퍼티`
- 방법2, `객체이름["프로퍼티"]`   
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
```

## 📌Object 업데이트
- `객체이름.생성할 프로퍼티` 에 값을 할당한다. 그럼 생성된다.   
- ❓ **const로 객체를 생성하면 값을 변경하지 못하는거 아닌가요?**   
→ 여기서 값이 변경된 건 `player`의 프로퍼티 `party`의 값이지 `player`의 값이 아니다. `const`의 값은 `player`이다.

```jsx
player.party = true;
console.log(player.party); // true
```

## 📌Object 연산
- Object의 프로퍼티 값을 연산하는 게 가능하다.    
```jsx
player.points = player.points + 35;
console.log(player.points); //45
```
   
***
# 📌Object 활용 - 계산기 만들기   
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
