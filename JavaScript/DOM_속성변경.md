**⭐본문에 작성된 함수**
- setAttribute()

---


# .setAttribute(속성, 값)

- 속성 : 해당 태그의 속성 이름
- 값 : 속성에 추가하고 싶은 값

```jsx
let bgColor = document.querySelector('.bgColor');
bgColor.addEventListener('click', popUp);

function popUp(){
  bgColor.setAttribute('style', 'background: red');
}
//bgColor를 클릭하면 배경색이 red로 변경된다.
```

속성 값을 변경하는 것 뿐만 아니라 새롭게 추가하는 것도 가능하다.

```jsx
function popUp(){
  // bgColor.setAttribute('style', 'background: red');
  bgColor.setAttribute('test', '속성 삽입');
}
//<div class="bgColor" style="background: blue;" test="속성 삽입"></div>
```
