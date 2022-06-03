**⭐ 본문에 사용된 함수**
- classList.contains()
- classList.remove()
- classList.add()
- classList.toggle()   

아래 함수는 요소를 클릭하면 색이 변하는 함수이다.   
`classList` 사용으로 아래 함수의 길이를 줄일 수 있다.
```jsx
const h1 = document.querySelector(".hello:nth-of-type(1) h1");

function colorChange(){
  const currentColor = h1.style.color;
  let newColor;
  if(currentColor == "blue"){
    newColor = "tomato";
  }else{
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", colorChange);
```   
***
## ⭐elem.classList
class를 조작할 수 있는 프로퍼티. `add` `remove` `toggle`이 있다.

**✔ classList.contains()**   
내가 명시한 class가 HTML element의 class에 포함되어 있는지 알려준다.   
존재 여부에 따라 `true`와 `false`를 반환한다.   

**✔ classList.remove()**   
class 삭제   

**✔ classList.add()**   
class 추가   

```jsx
function colorChange(){
  const clickedClass = "clicked";
  //내가 명시한 class Clicked를 clickedClass 변수에 할당. .clicked에는 background-color = "blue"가 있다.
  
  if(h1.classList.contains(clickedClass)){
    h1.classList.remove(clickedClass);
  }else{
    h1.classList.add(clickedClass);
  }
  //h1에 clicked class가 있다면 clicked 삭제, 없다면 clicked 추가하는 조건문
}

h1.addEventListener("click", colorChange);
```   

**✔ classList.toggle()**   
전원버튼 같은 기능, 토큰이 존재한다면 토큰을 제거하고 존재하지 않는다면 토큰을 추가한다.   
```jsx
function colorChange(){
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", colorChange);
//이벤트가 발생할 때마다 clicked 클래스가 추가, 삭제가 반복된다.
```
   
🔥 **모두 같은 기능을 하는 함수인데 toggle()사용으로 길이가 3줄로 줄어들었다.**
