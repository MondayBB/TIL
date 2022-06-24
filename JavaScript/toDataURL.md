# toDataURL(type, encoderOptions)

- 지정한 형식의 데이터 url을 반환한다.
- **type** : 생략가능, 파일 형식을 나타낸다. 기본값은 `"image/png"`이며, `"image/jpeg"`, `"image/webp"`가 있다. (주의 : jpg파일은 jpeg로 작성한다.)
- **encoderOptions** : 파일의 품질을 나타낸다. 숫자로 표시하며 `0`에 가까울수록 품질이 좋지 않다.

사용예시

```jsx
const canvas = document.querySelector("canvas");
let dataURL = canvas.toDataURL(); // png형식의 url 주소가 반환된다.

let dataURL = canvas.toDataURL("image/jpeg"); // jpg형식의 url 주소가 반환된다.

let dataURL = canvas.toDataURL("image/webp"); // webp형식의 url 주소가 반환된다.

let dataURL = canvas.toDataURL("image/jpeg", 0.5); // 품질이 낮다.
```

[참고](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)
