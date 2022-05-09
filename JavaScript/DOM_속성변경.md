# .addEventListener(이벤트, 핸들러함수, 옵션)

- 이벤트 : click과 같은 이벤트 이름
- 핸들러 함수 : 이벤트가 발생했을 때 실행되는 함수
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

addEventListener는 호출할 때마다 다른 핸들러함수를 붙일 수 있다.

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
