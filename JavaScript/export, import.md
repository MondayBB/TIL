# 다른 파일에 있는 변수 불러오기
- main.js : 불러온 변수가 사용될 파일
- sub.js : 불러올 변수가 저장된 파일
- index.html : main.js가 위치할 html 파일

### ✔index.html
메인으로 사용될 js파일을 html에 불러올 때는 `type`을 `module`로 작성한다.
```html
<script type="module" src="main.js"></script>
```
   
### ✔sub.js
export를 사용하여 내보낸다.
```jsx
const test = "abcdefg";

//방법1
export default test;

//방법2
export {test};
```

### ✔main.js
import ~ from 을 사용하여 불러온다. `import 변수명/함수명 from "파일명"`   
`./sub.js` 는 `main.js`와 같은 위치에 있다는 뜻이다.
```jsx
//방법1
import test from "./sub.js";

//방법2
import {test} from "./sub.js";

console.log(test);
```

[참고](https://ko.javascript.info/import-export)
