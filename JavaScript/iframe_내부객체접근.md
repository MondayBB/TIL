# iframe의 내부 객체 접근하는 방법
iframe의 내부 객체에 접근하는 방법에는 2가지가 있다.
   
### ✔ contentWindow
iframe의 window 객체에 접근한다.   
   
**ex 사용예시**
```jsx
obj.contentWindow.document.body;
obj.contentWindwo.document.querySelector('#id');
```
   
### ✔ contentDocument   
iframe의 document 객체에 접근한다.   
contentWindow와 다르게 document를 생략한다.

**ex 사용예시**
```jsx
obj.contentDocument.body;
obj.contentDocument.querySelector('#id');
```
   
***
### **아래는 버튼을 누르면 iframe이 나오고, iframe에 주문 버튼 태그가 생성되는 예제이다.**

외부 HTML
```html
<div>
  버튼을 누르면 메뉴가 나옵니다.
  <button id="btn" onclick="show()">버튼</button>
  <div id="iframeBtn" style="display: none">
    <iframe id="fr" src="/ex01.html" frameborder="0"></iframe>
  </div>
</div>
```
   
내부 HTML
```html
<div id="detail">
  <h2>메뉴</h2>
  <ul>
    <li>짜장면</li>
    <li>짬뽕</li>
    <li>쟁반짜장</li>
    <li>탕수육</li>
  </ul>
</div>
```
   
공통 JavaScript
```jsx
let btn = document.querySelector("#btn");
let iframeBtn = document.querySelector("#iframeBtn");
let fr = document.querySelector("iframe");
let addBtn = document.createElement("button");
addBtn.innerHTML = "주문";
```
  
contentWindow 사용
```jsx
function show() {
  let fr2 = fr.contentWindow.document.querySelector("#detail");
  iframeBtn.style.display = "block";
  fr2.append(addBtn);
}
```
   
contentDocument 사용
```jsx
function show() {
  let fr2 = fr.contentDocument.querySelector("#detail");
  iframeBtn.style.display = "block";
  fr2.append(addBtn);
}
```
