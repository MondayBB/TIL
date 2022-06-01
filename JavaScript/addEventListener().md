# ✔.addEventListener(이벤트, 핸들러함수, 옵션)

- 이벤트 : click과 같은 이벤트 이름
- 핸들러 함수 : 이벤트가 발생했을 때 실행되는 함수, **이벤트가 발생해야만 실행되어야 하므로 함수 뒤에 괄호()는 붙이지 않는다.** 
- 옵션 :
    - once : true면 이벤트가 트리거될 때 리스너가 자동으로 삭제
    - capture : 어느 단계에서 이벤트를 다뤄야 하는지 알려주는 프로퍼티
    - passive : true면 리스너에서 지정한 함수가 preventDefault()를 호출하지 않음

```jsx
//html
<div class="bgColor" style="background: blue;"></div>

//script
let bgColor = document.querySelector('.bgColor');
bgColor.addEventListener('click', popUp);

//핸들러 함수 popUp
function popUp(){
  alert('이 색은 파란색입니다.')
}
```

`addEventListener`는 호출할 때마다 다른 핸들러함수를 붙일 수 있다.

```jsx
bgColor.addEventListener('click',popUp);
bgColor.addEventListener('click',popUp2);

function popUp(){
  alert('이 색은 파란색입니다.');
}
function popUp2(){
  alert('이 색은 BLUE입니다.')
}
//popUp()과 popUp1()이 연달아 호출된다. 
```
   
***   
# ⭐이벤트 종류
- click : 요소를 클릭하면 이벤트가 발생한다.
- mouseover : 마우스가 요소 위에 있을 때 이벤트가 발생한다.
- mouseenter : 마우스가 요소 위에 있을 때 이벤트가 발생한다. **버블링이 발생하지 않는다.**
- mouseout : 마우스가 요소를 벗어날 때 이벤트가 발생한다.
- mouseleave : 마우스가 요소를 벗어날 때 이벤트가 발생한다. **버블링이 발생하지 않는다.**   
* 버블링 : 한 요소에 이벤트가 발생하면 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작, 최상단 부모 요소까지 핸들러가 동작하는 현상이다.
