# flex
- css3에 새롭게 추가된 레이아웃 정렬 방식
- 부모요소에 `display: flex`를 적용해줘야 자식요소에서 flex의 정렬기능을 사용할 수 있다. 
- 부모요소를 [flex container](#flex-container), 자식요소를 [flex item](#flex-item) 이라 부른다.

***

## 📌#flex-container
flex container의 속성은 아래와 같다
- flex-direction : row(기본값), row-reverse, column, column-reverse
- flex-wrap : nowrap(기본값), wrap, wrap-reverse
- flex-flow
- justify-content : flex-start(기본값), flex-end, center, space-between, space-around
- align-items : stretch(기본값), flex-start, flex-end, center, baseline
- align-content : stretch(기본값), flex-start, flex-end, center, space-between, space-around

### ✔flex-direction
**- 자식요소들의 배치 방향을 결정하는 속성**
- row : 자식요소들이 왼쪽에서 오른쪽으로 배열된다.
- row-reverse : 자식요소들이 오른쪽에서 왼쪽으로 배열된다.
- column : 자식요소들이 위에서 아래로 배열된다.
- column-reverse : 자식요소들이 아래에서 위로 배열된다.

### ✔flex-wrap
**- 자식요소들이 부모요소의 영역을 넘어갈 경우 줄바꿈을 할지 결정하는 속성**
- nowrap : 줄바꿈하지 않는다.
- wrap : 줄바꿈한다.
- wrap-reverse : 줄바꿈하고 위아래가 바뀐다.

### ✔flex-flow
**flex-direction과 flex-wrap을 한번에 지정**할 수 있는 축약속성이다.
flex-direction과 flex-wrap 순으로 한칸 띄워 작성한다.

### ✔justify-content(좀 더 공부)
**- 자식요소의 메인축을 정렬하는 속성, 메인축은 flex-direction에서 설정한다.**
- flex-start : 메인축의 시작 지점을 기준으로 자식요소를 정렬
- flex-end : 메인축의 마지막 지점을 기준으로 자식요소를 정렬
- center : 메인축의 자식요소를 가운데에 정렬
- space-between : 메인축의 첫번째 자식요소는 시작점에 마지막 자식요소는 끝 지점에 정렬하고, 나머지 자식요소는 동일한 간격으로 배열
- space-around : 메인축을 자식요소 둘레에 동일한 간격으로 정렬

### ✔align-items(좀 더 공부)
**- 자식요소의 교차축을 정렬하는 속성**
- stretch : 부모요소의 높이만큼 자식요소를 늘려 전체높이를 채운다
- flex-start : 교차축의 시작지점을 기준으로 자식요소를 정렬 
- flex-end : 교차축의 마지막 지점을 기준으로 자식요소를 정렬
- center : 교차축의 자식요소를 가운데 정렬
- baseline : 글꼴의 기준선인 baseline을 기준으로 자식요소를 정렬

### ✔align-content(좀 더 공부)
**- 자식요소가 여러줄로 나열되어 있을 때 교차축을 정렬하는 속성**
- stretch : 부모요소의 높이만큼 자식요소를 늘려 전체높이를 채운다
- flex-start : 교차축의 시작지점을 기준으로 자식요소를 정렬 
- flex-end : 교차축의 마지막 지점을 기준으로 자식요소를 정렬
- center : 교차축의 자식요소를 가운데 정렬
- space-between : 첫번째 줄은 시작점에 마지막 줄은 끝점에 정렬하고 나머지 줄은 사이에 동일한 간격으로 정렬
- space-around : 교차축을 기준으로 자식요소의 둘레에 동일한 간격으로 정렬

***
## 📌#flex-item
flex item의 속성은 아래와 같다
- flex
- flex-grow
- flex-shrink
- flex-basis : auto(기본값), 0, px, em, %, fill, content, max-content, min-content, fit-content
- align-self : auto(기본값), stretch, flex-start, flex-end, center, baseline
- order

### ✔flex
**- flex-grow, flex-shrink, flex-basis를 한번에 지정할 수 있는 축약속성**
한 칸 씩 띄워 사용하면 된다.

### ✔flex-grow(좀 더 공부)
**- 자식요소의 확장너비 비율을 설정**

### ✔flex-shrink(좀 더 공부)
**- 자식요소의 축소너비 비율을 설정**

### ✔flex-basis(좀 더 공부)
**- 자식요소의 기본 너비를 설정**
- 값이 0일 경우 자식요소의 너비값은 부모요소를 기준으로 동일한 비율로 설정된다.
- auto와 0을 많이 사용한다. 
- width와 basis 중 하나만 사용하는 것이 좋다

### ✔align-self
**- 개별 자식요소의 교차축을 정렬하는 속성**
- align-items가 모든 자식요소의 교차축을 정렬하는 거라면 align-self는 특정 자식요소에 스타일을 줘서 개별적으로 정렬한다.
- align-self가 align-items보다 우선 적용된다.

[참고 사이트](https://www.biew.co.kr/entry/CSS-FlexFlexible-Box-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC)
