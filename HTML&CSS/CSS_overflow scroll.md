# overflow scroll 커스텀
- ::-webkit-scrollbar
- ::-webkit-scrollbar-thumb
- ::-webkit-scrollbar-track

## ✔::-webkit-scrollbar
스크롤바 전체를 가리킨다.   
기본적으로 너비나 배경색을 변경할 수 있다.
```css
body::-webkit-scrollbar{
  width: 5px; 
  background-color: #fff;
}
```

## ✔::-webkit-scrollbar-thumb
스크롤바의 이동하는 막대를 가리킨다.   
```css
body::-webkit-scrollbar-thumb{
  border-radius: 10px; 
  background-color: rgba(255,255,255,0.7);
}
```

## ✔::-webkit-scrollbar-track
스크롤바의 이동막대를 제외한 영역을 가리킨다.   
```css
body::-webkit-scrollbar-track{
  background-color: rgba(255,255,255,0.2);
}
```

