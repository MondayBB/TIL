# background
## 📌background-image
### gradient
- **선형 그라디언트 linear-gradient(direction, color1, color2, ...)**   
**direction** : to right, to bottom right, 0.5turn, 60deg 등   
**repeating-linear-gradient()** : 선형 그라디언트 반복
[linear-gradient 참고](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
```CSS
/* 기본 */
background-image: linear-gradient(to right, blue, red); 

/* 투명도 */
background-image: linear-gradient(60deg, white 10%, black 20%);
```


- **방사형 그라디언트 radial-gradient(shape size, color1, color2, ...)**   
**shape size** : circle(원형)   
**repeating-radial-gradient()** : 원형 그라디언트 반복   
[radial-gradient 참고](https://www.w3schools.com/css/css3_gradients_radial.asp)
```CSS
background-image: radial-gradient(circle, red, yellow, green);
background-image: radial-gradient(red 10%, yellow 50%, green 90%);
/* 겉에 있는 색깔은 안쪽에 있는 색깔보다 %가 높아야 한다. */
```

- **원뿔형 그라디언트 conic-gradient(color1, color2,...)**   
**repeating-conic-gradient()** : 원뿔형 그라디언트 반복     
[conic-gradient 참고](https://www.w3schools.com/css/css3_gradients_conic.asp)
```CSS
background-image: conic-gradient(red 10%, yellow 50%, green 90%);

/* red 영역 0deg부터 180deg까지 */
background-image: conic-gradient(red 0deg, red 180deg, yellow, green);

/* 90deg에서 시작 */
background-image: conic-gradient(from 90deg, red 0deg, red 180deg, yellow, green);

/* 중심위치가 60% 70%로 이동 */
background-image: conic-gradient(at 60% 70%, red 0deg, red 180deg, yellow, green);
```
