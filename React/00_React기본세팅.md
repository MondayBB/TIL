# ✔React 기본세팅

아래 CDN 링크가 삽입되어야만 React 사용이 가능하다

```html
<script
  crossorigin
  src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"
></script>
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

# ✔JSX 세팅

- 자바스크립트를 확장한 문법이다.
- HTML에서 사용한 문법과 흡사한 문법을 이용해서 React 요소를 만들 수 있게 한다.
- HTML과 비슷해서 JSX로 React 요소를 만들면 읽기 쉽다.
- Babel을 삽입해줘야 사용 가능하다.
- 컴포넌트의 첫 글자는 반드시 대문자여야 한다
- jsx에서 javascript를 사용하려면 `{}` 중괄호 안에 작성해야 한다.

## 📌html과 jsx의 다른 점

html과 jsx에서는 같은 기능을 각각 이렇게 작성해야 한다.

| html  |    jsx    |
| :---: | :-------: |
|  for  |  htmlFor  |
| class | className |

# ✔Babel

- 개발자들이 실행 환경에 구애받지 않고 항상 최신 문법의 자바스크립트(ES6)로 코딩할 수 있도록 도와주는 유용한 도구이다.
- TypeScript와 JSX로 적은 코드도 브라우저가 이해할 수 있는 형태로 바꿔준다.

Babel을 설치하는 더 나은 방식이 있지만, 지금은 배우는 단계이기 때문에 임시로 아래 방식을 사용한다.  
이 방식은 느리기 때문에 더 나은 방식을 사용하도록 하자.(더 나은 방식이 뭔지 아직 안알려줌)
**주의! Babel script를 넣은 후에 babel을 사용할 js파일이 포함된 script에 type="text/bable"을 꼭 작성해준다.**

```jsx
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel" src="js.js"></script>
```
