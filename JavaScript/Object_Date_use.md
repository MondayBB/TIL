# 🔥 Date 객체를 회사 사이트에 적용

## 이벤트 종료 타이머 생성
이벤트 종료 시간에 "event-stamp.png" 이미지가 화면을 덮으면서 종료 alert()이 실행된다.

HTML

```html
<div class="event-end" id="eventEnd">
   <img src="/event-stamp.png">
   <span></span>    
</div>
```

CSS

```css
.event-end{
	position: absolute; 
	width: 100%; 
	height: 100%; 
	background: rgba(0,0,0,0.8); 
	z-index: 111; 
	display:block;
}
.event-end > img{
	position: fixed; 
	top: 50%; 
	left: 50%; 
	transform: translate(-50%,-50%);
}
.event-end > span{
	width: 50px;
	height: 50px;
	position: fixed;
	right: 0;
	bottom: 0;
}
```

JavaScript

```jsx
<script>
    let nowDate = new Date();
    let endDate = new Date(2022,3,25,17,0,0,0);

    function viewEnd(mm){
      mm = nowDate > endDate;
      if(mm == true){
        document.getElementById('eventEnd').style.display = "block"
        alert('마감된 이벤트로 현재 페이지 내에서 이벤트가로 구매시 동의없이 환불처리될 수 있습니다.');
      }else{
        document.getElementById('eventEnd').style.display = "none";
      }
    }
    viewEnd();
  </script>
```
