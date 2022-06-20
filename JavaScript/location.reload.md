# 페이지 새로고침
## ✔**loaction.reload(true/false)**   
- true : 새로고침 시 서버에서 불러온다.
- false(기본값) : 새로고침 시 클라이언트 캐시에서 불러온다.


```jsx
function f5(){
  location.reload(); // 기본값 false
};

button.addEventListener("click", f5);
//버튼을 클릭하면 페이지가 새로고침된다.
```
