# a태그의 속성

## ✔download

- href에 지정된 파일을 다운로드 해준다.
- 이미지, 엑셀, html 등 다양한 파일을 다운로드 할 수 있다.(링크로 작성하면 페이지 다운로드가 아닌 페이지로 연결된다.)
- `download`만 사용하면 실제 파일이름으로 다운로드 되고, `download="filename"`을 적어주면 적어준 이름으로 다운로드 된다.

```html
<!--logo.png 이름으로 다운로드 된다.-->
<a href="/images/logo.png" download></a>
<!--new.png 이름으로 다운로드 된다-->
<a href="/images/logo.png" download="new.png"></a>
<a href="/images/logo.png" download="new"></a>
<!--jpg 형식으로 다운로드 된다.-->
<a href="/images/logo.png" download="new.jpg"></a>
```
