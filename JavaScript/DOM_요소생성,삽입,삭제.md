**⭐본문에 작성된 함수**

- document.createElement(tag)
- document.createTextNode(text)
- node.append()
- node.prepend()
- node.before()
- node.after()
- node.replaceWith()
- node.remove()

---

# [**요소 생성]**

# document.createElement(tag)

**태그**를 이용하여 새로운 노드를 만든다.

```jsx
let tit = document.createElement("h1");
tit.innerHTML = "안녕!";
document.body.append(tit); //body에 tit를 삽입했다.
```

# document.createTextNode(text)

**텍스트**를 이용해 새로운 텍스르 노드를 만든다.

텍스트 노드를 만들려면 `createTextNode()`를 사용해야 한다.

```jsx
let titText = document.createTextNode("하세요!");
tit.append(titText); //createElement로 만든 tit에 titText노드를 삽입했다.
```

---

# [요소 삽입]

# node.append()

노드나 문자열을 node 끝에 삽입한다.

괄호 안에는 노드나 문자열이 들어온다. 태그만 달랑 넣을 수 없다.

body안에 바로 삽입할 때는 `document.body.append()` 로 사용한다.

```jsx
document.body.append(tit); //body에 변수 tit를 삽입했다.
// 결과 => 안녕!
```

특정 변수안에 삽입하고 싶을 때는 `변수.append()` 로 사용한다.

```jsx
tit.append(titText); //createElement로 만든 변수 tit에 변수 titText를 삽입했다.
// 결과 => 안녕!하세요!
```

# node.prepend()

노드나 문자열을 node 맨 앞에 삽입한다.

```jsx
tit.prepend(titText);
// 결과 => 하세요!안녕!
```

# node.before()

노드나 문자열을 node 이전에 삽입한다.

```jsx
tit.before(titText); // tit 노드 앞에 titText 노드가 생성된다.
// 결과 => 하세요!\n 안녕!
```

# node.after()

노드나 문자열을 node 다음에 삽입한다.

```jsx
tit.after(titText); // tit 노드 뒤에 titText 노드가 생성된다.
// 결과 => 안녕!\n 하세요!
```

# node.replaceWith()

node를 새로운 노드나 문자열로 대체한다.

```jsx
tit.replaceWith(titText); // 변수tit를 titText로 교체된다.
// 결과 => 하세요!
```

📌 **요소 삽입 정리**

- node 안에 노드나 텍스트가 삽입되는 메서드 : node.append(), node.prepend()
- node 바깥에 노드나 텍스트가 삽입되는 메서드 : node.before(), node.after()
- 기존 node와 교체하는 메서드 : node.replaceWith()

---

# [요소 삭제]
# node.remove()
노드를 삭제한다.
```jsx
let tit = document.createElement("h1");
tit.innerHTML = "안녕!";
document.body.append(tit);

let titText = document.createTextNode("하세요!");
tit.append(titText);

titText.remove();
// 결과 => 안녕!
```
