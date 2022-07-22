# meta 태그

- HTML 문서에 대한 정보인 메타 데이터를 정의한다. (메타 데이터 : 데이터에 대한 정보)
- meta 태그는 반드시 head 태그 안에 위치해야 한다.

## ✔ viewport

- 뷰포트의 너비와 크기를 제어하여 모든 기기에서 올바른 크기로 조정할 수 있다.
- meta name이 viewport라면 content 속성이 들어가야 한다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!-- 페이지의 너비값은 장치의 너비값을 갖는다 -->
<meta name="viewport" content="width=1000px" />
<!-- 장치의 너비가 얼마이든 페이지가 1000px의 화면으로 보여진다 -->
```

- **width** : 뷰포트의 너비를 정한다.
  - `device-width` : 뷰포트의 너비를 장치의 너비로 설정한다. 디바이스의 너비가 뷰포트의 너비이다.
  - 픽셀단위로 설정할 수도 있다.
- **height** : 뷰포트의 높이를 정한다. 사용은 width와 같다.
- **initial-scale** : 페이지가 처음 로드될 때 확대, 축소 크기를 정한다.

## ✔ http-equiv

- `content` 속성에 명시된 값에 대한 http 헤더를 제공한다.
- 반드시 `content` 속성을 함께 명시해야 한다.

```html
<meta http-equiv="refresh" content="5;https://www.naver.com" />
<!-- 5초 뒤 네이버 페이지로 이동한다.  -->
<meta http-equiv="default-type" content="preferred stylesheet" />
```

- **refresh** : 문서를 새로고침할 시간을 명시한다.
  - `시간;주소` 를 입력하면 시간이 흐른 뒤 주소로 이동한다.
  - `refresh` 속성값은 사용자로부터 페이지에 대한 제어를 빼앗아오기 때문에 주의하여 사용한다.
- **default-type** : 우선적으로 적용할 스타일 시트를 명시한다.
  - `content` 속성 값은 동일한 문서에 존재하는 `link` 태그의 title 속성값과 일치하거나, 동일한 문서에 존재하는 `style` 태그의 title 속성값과 일치해야한다.
