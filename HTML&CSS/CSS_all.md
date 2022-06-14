# all
- 스타일 속성을 초기값, 상속값 등으로 변경한다.   
- all의 값에는 `initial`, `inherit`, `unset`, `revert`가 있다.
- all이 요소 css의 상단에 있는 경우 잘 안먹힌다. 맨 아래에 두자.

```html
<!-- CSS -->
<style>
  body{background: #ddd; color: red; font-weight: bold;}
  .test{background: #fff; color: blueviolet; all: ;}
</style>

<!-- HTML -->
<body>
  안녕하세요.
  <div class="test">안녕하세요.</div>
</body>
```
   
- **`initial`** : 요소의 모든 속성을 **초기값**으로 변경한다.   
color은 black으로 background는 없는걸로 변한다.
- **`inherit`** : 요소의 모든 속성을 **상속값**으로 변경한다.   
color, background는 body의 style과 동일하고, test에는 없고 body에 있는 font-weight까지 적용된다.
- **`unset`** : 요소의 모든 속성을 **부모 요소가 있는 경우 상속값으로, 없는 경우 초기값**으로 변경한다.   
test에 적용하면 body의 css값을 받아오고, body에 적용하면 body의 부모 요소는 없으므로 초기값이 된다.
