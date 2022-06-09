# React 기본세팅
아래 CDN 링크가 삽입되어야만 React 사용이 가능하다

```html
<script crossorigin  src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script crossorigin  src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
```

CDN을 통해 React를 사용한다면, `crossorigin` 속성과 함께 사용하는 것을 권장한다.   

### ❓CDN이란?
런타임(코드가 동작하는 시점) 동안에 가상 돔을 비교하기 위해 사용되는 코드

### ❓crossorigin이란?
- element가 CORS 요청을 처리하는 방식을 명시하며 element가 fetch한 데이터를 CORS 가능하게 한다.
- 특정 element에서는 CORS 세팅 속성이 될 수도 있다.
- `audio`, `img`, `link`, `script`, `video` 태그에서 사용할 수 있다.

### ❓CORS란?
- Cross-Origin Resource Sharing 의 줄임말로 번역하자면 `교차(다른) 출처 리소스 공유` 이다.
- https://evan-moon.github.io/2020/05/21/about-cors/
