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
