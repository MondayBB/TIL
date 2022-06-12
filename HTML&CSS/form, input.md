# 📌form
input의 유효성 검사를 작동시키기 위해서는 input이 form으로 감싸져있어야 한다.

# 📌input
- **required** : input에 반드시 값을 입력해야 한다. 값이 없는데 제출할 경우 경고창이 뜬다.
- **maxlenght** : 최대 입력 글자 수를 지정할 수 있다. ex) maxlength = "15"
- **placeholder** : 입력창 안에 미리보기용 문자를 넣는다. ex) placeholder = "아이디를 입력하세요."
- **type="submit"** : input 값이 제출된다. 클릭이나 **엔터**를 누르면 제출된다.   
*submit으로 값을 제출할 경우 페이지가 새로고침되며, 이 행동을 막으려면 js에서 `preventDefault()` 함수를 사용하면 된다.   
- **disabled** : input에 값을 입력할 수 없게 한다. 기본값은 `true`로 `true`이면 값을 입력할 수 없고 `false` 이면 입력할 수 있다.
    
[그 외 다양한 input 속성](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input)
