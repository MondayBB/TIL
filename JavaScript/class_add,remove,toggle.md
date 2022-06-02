**⭐ 본문에 사용된 함수**
- classList.contains()
- classList.remove()
- classList.add()
- classList.toggle()   
```jsx
const h1 = document.querySelector(".hello:nth-of-type(1) h1");
/* function colorChange(){
  const currentColor = h1.style.color;
  let newColor;
  if(currentColor == "blue"){
    newColor = "tomato";
  }else{
    newColor = "blue";
  }
  h1.style.color = newColor;
} */

/* function colorChange(){
  const clickedClass = "clicked";
  if(h1.classList.contains(clickedClass)){
    h1.classList.remove(clickedClass);
  }else{
    h1.classList.add(clickedClass);
  }
} */

function colorChange(){
  h1.classList.toggle("clicked");
}
h1.addEventListener("click", colorChange);



// classList.contains();
// 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다.

// classList.remove();
// 삭제

// classList.add();
// 클래스 추가

//classList.toggle()
// 전원버튼 같은 기능, 토큰이 존재한다면 토큰을 제거하고 존재하지 않는다면 토큰을 추가한다.
```
