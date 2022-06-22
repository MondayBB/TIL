# canvas
- canvas 태그에는 css width, height 외에 속성값으로 `width`와 `height` 값을 정해줘야한다. (기본값 `width="300" height="150"`)

## getContext(contextType, contextAttribute)
- `getContext()` 메서드를 사용해서 렌더링 컨텍스트와 그리기 함수를 사용할 수 있다.
- `contextType` : `"2d"`(2차원), `"webgl"`(3차원), `"webgl2"`(3차원), `"bitmaprenderer"`(비트맵)
- `constextAttribute`(생략가능) : [참고](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext)
```jsx
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```
## 📌getContext("2d")의 속성들
### ✔fillStyle
- 내부 도형에 사용할 색상. 기본값은 `#000`

### ✔fillRect
- 사각형 그리기
- 이 사각형의 색은 `fillStyle`로 채운다
```jsx
ctx.fillRect(x, y, width, height);
// x,y 시작점
// width 사각형 너비
// height 사각형 높이
```

### ✔strokeStyle
- 도형이나 선의 획 색상. 기본값은 `#000`

### ✔lineWidth
- 선 너비를 지정. 기본값은 `1.0`


## 📌getContext("2d")의 메서드
### ✔stroke()
- 획을 그린다. 없으면 획이 그려지지 않는다.
- 패스의 중앙에 위치한다.

### ✔moveTo(x,y) ✔lineTo(x,y)
- moveTo(x,y) : x, y 에서 시작해서
- lineTo(x,y) : x, y 까지

### ✔beginPath()
- 새로운 선을 설정하고자 할 때 호출
- `beginPath()`는 새 선을 생성하기 전에 호출된다.
```jsx
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.strokeStyle = "red"
ctx.stroke();
```
위의 코드가 canvas를 클릭하면 해당 색으로 선이 그려지는 코드라고 가정했을 때,   
첫번째 선은 `blue`로 그려지고 두번째 선 생성 시 첫번째 선도 두번째 선과 같이 `red`로 변한다.   
**두번째 선 생성할 때 새롭게 생성한다는 `beginPath()` 메서드를 호출하지 않았기 때문이다.**

```jsx
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red"
ctx.stroke();
```
첫번째 선은 `blue`로 두번째 선은 `red`로 그려진다.
