**⭐본문에 작성된 함수**

- getElementById()
- getElementsByClassName()
- getElementsByTagName()
- querySelector()
- querySelectorAll()

---

공통 html

```html
<div id="text" style="font-size:1.8em">
	클릭하면 글자가 커집니다.
</div>
<div class="textColor" style="color:yellow">
	클릭하면 글자가 어두워집니다.
</div>
<div class="textColor" style="color:#000">
	클릭하면 글자가 밝아집니다.
</div>
```

# document.getElementById()

해당 페이지에서 같은 이름의 **id 선택자**를 불러온다.

뒤에 onclick을 붙이면 해당 id 선택자를 클릭 시 이벤트를 실행할 수 있다.

```jsx
<script>
  document.getElementById('text').onclick = function(){
    this.style.fontSize = "5em"
  }
</script>
```

# document.getElementsByClassName()

해당 페이지에서 같은 이름의 **class 선택자**를 불러온다.

같은 이름의 class가 여러개일 경우 뒤에 **인덱스를 넣어 배열처럼 사용할 수 있다.** 

```jsx
<script>
document.getElementsByClassName('textColor')[0].onclick = function(){
  this.style.color = "#000";
}  
document.getElementsByClassName('textColor')[1].onclick = function(){
	this.style.color = "yellow"
}
</script>
```

# document.getElementsByTagName()

해당 페이지에서 **태그**를 불러온다.

뒤에 인덱스를 넣어 배열처럼 사용할 수 있다.

```jsx
document.getElementsByTagName('div')[1].style.backgroundColor = "#000"
```

---

# document.querySelector()

태그, 아이디, 클래스를 불러오는데 사용하는 요소로 하나의 선택자만 불러올 수 있다.   
다만, 같은 이름이 여러개가 있다면 그 중 첫번째만 호출한다.

```jsx
document.querySelector('div'); //첫번째 div 태그만 불러온다.
document.querySelector('#text'); //id 선택자를 불러오러면 앞에 #을 붙여줘야 한다.
document.querySelector('.textColor'); //class 선택자를 불러오려면 앞에 .을 붙여줘야 한다.
```   
`querySelector()` 은 css형식으로 불러올 수 있어 `getElements~()` 보다 많이 사용한다.
```jsx
// 아래 코드의 html 예시는 따로 없음
const title = document.querySelector(".hello h1");
const title2 = document.querySelector(".hello:nth-of-type(2) h1");
```   
속성 노드까지 접근이 가능하다.
```jsx
let text = document.querySelector('#text');
text.style = 'font-size:50px';
//#text의 폰트 크키가 50px로 변경된다.
```

# document.querySelectorAll()[index]

querySelector와는 같은 이름이 여러개 있어도 불러올 수 있다.

다만, 인덱스 번호로 어떤걸 불러올지 선택해줘야 한다.

인덱스 번호 없이 단독으로 사용을 불가하다.

```jsx
document.querySelectorAll('div')[2]; //세번째 div 태그를 불러온다.
document.querySelectorAll('div'); // 인덱스 번호 없이 단독 사용은 불가하다.
```

---

getElement와 querySelector의 차이

- getElement 는 간단한 변경을 할 때 사용한다.
- querySelector 는 텍스트나 속성을 변경하거나, 새로운 노드를 추가, 삭제할 때 사용한다.

## **⇒ querySelector를 사용하는 것이 좋다**

---

> **주의!** 📌
> 

만약 콘솔 창에서 테스트를 할 때 onclick을 확인할 수 없다는 에러가 뜬다면 먼저 “document.getElementById(’text’)” 를 작성하면 된다.

먼저 선택자를 인식해줘야 테스트할 수 있는 것 같다.
