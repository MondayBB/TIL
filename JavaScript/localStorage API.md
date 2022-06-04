# localStorage
- 브라우저에 값을 저장하고, 불러올 수 있다.
- 브라우저가 다시 시작해도 데이터는 유지된다. 
- 저장된 값은 개발자도구에서 Application - Storage - Local Storage에서 확인할 수 있다.   

### 📌localStorage.setItem(key, value)
key와 value 값을 저장한다.
```jsx
localStorage.setItem("name", "yejin");
```   

### 📌localStorage.getItem(key)
저장된 key의 value값을 불러온다.
```jsx
localStorage.getItem("name");
//name의 값인 yejin이 반환된다.
```   

### 📌localStorage.removeItem(key)
해당 key와 그 key의 value 값을 삭제한다.
```jsx
localStorage.removeItem("name");
//name과 그 값인 yejin이 삭제된다.
```
