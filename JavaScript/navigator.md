#📌navigator 객체
브라우저와 운영체제에 대한 정보를 제공한다.

## navigatore.geolocation
웹에서 장치의 위치를 알아낼 때 사용

## navigatore.geolocation.getCurrentPosition(successFunc, errorFunc)
현재 위치를 가져온다.
- `successFunc` - 문제없을 때 실행되는 함수 (ex. 위치 정보 제공에 동의했을 때 발생)
- `errorFunc` - 문제있을 때 실행되는 함수 (ex. 위치 정보 제공에 동의하지 않았을 때 발생)   
```jsx
function onGeoOk(position){
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; //경도
  alert(`your location ${lat}, ${lon}`);
}
function onGeoErroe(){
  alert("Can't find your location!");
}

navigatore.geolocation.getCurrentPosition(onGeoOk, onGeoErroe);
```   
