# 📌클래스

**함수**가 특정 알고리즘을 포장하는 기술이라면, **클래스**는 이렇게 만들어진 수많은 변수와 함수 중 연관있는 변수와 함수만을 선별해 포장하는 기술이다.  
클래스를 사용하는 이유는 객체 단위로 코드를 그룹화하고 코드의 재사용성을 위함이다.

### 클래스와 함수의 차이

| 클래스                                    | 함수                                      |
| ----------------------------------------- | ----------------------------------------- |
| 연관 있는 변수와 함수의 집합              | 특정 기능을 하는 변수 + 구문              |
| 객체 단위의 코드 그룹화                   | 기능 단위의 코드 그룹화                   |
| 객체 단위의 중복 코드 제거 및 코드 재사용 | 기능 단위의 중복 코드 제거 및 코드 재사용 |

### 1. 객체 단위의 코드 그룹화

- 클래스의 대표적인 기능은 연관 있는 변수와 함수를 그룹화하는 기능이다.
- 현업에서 협업하다보면 함수 이름이나 변수 이름이 같아 충돌하는 일이 발생한다. 이를 예방하기 위해 클래스로 연관 있는 변수나 함수를 그룹화한다.

### 2. 객체 단위의 중복 코드 제거 및 코드 재사용성

- 클래스를 이용하면 객체 단위로 코드를 재사용할 수 있다.
- 예를 들어 탭패널을 여러개 만든다면, 클래스 하나로 독립적으로 동작하는 탭패널을 모두 만들 수 있다.

---

## ✔ 클래스 생성 방법

### constructor()

- 객체의 기본 상태를 설정해주는 생성자 메서드, new에 자동으로 호출된다.
- constructor가 클래스 내부에 없으면 해당 클래스는 본문이 비워진 채로 만들어진다.
- 클래스를 함수 방식으로 만들 때에는 따로 명시적으로 만들 필요가 없다. 모든 함수의 프로토타입은 constructor 프로퍼티를 기본으로 갖고 있기 때문이다.

### 메서드

- 클래스에서 메서드 사이에는 쉼표를 넣지 않는다.
- 정의한 메서드는 class명.prototype에 저장된다.

### 클래스 생성과 호출-1(기본)

```javascript
// 생성
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

// 호출
let user = new User("yejin");
user.sayHi(); // yejin

// 생성 확인
console.log(typeof User); // function
console.log(User === User.prototype.constructor); // true
console.log(Object.getOwnPropertyNames(User.prototype)); // ['constructor', 'sayHi']
```

- User 클래스는 constructor과 sayHi라는 메서드를 가지고 있다.
- User.prototype에는 sayHi: function, constructor: User(위의 생성확인 코드에서 확인할 수 있다.)가 저장된다.
- User 클래스의 타입은 function이다.

### 클래스 생성과 호출-2(함수)

```javascript
// 생성
function User2(name) {
  this.name = name;
  console.log("user2");
}

// 메서드 추가
User2.prototype.sayHi = function () {
  console.log(this.name);
};

// 호출
let user2 = new User2("yejin");
user2.sayHi(); // yejin
```

- 함수식으로 작성할 때는 class라는 키워드 없이도 클래스 역할을 하는 함수를 선언할 수 있다.
- 모든 함수의 프로토타입은 constructor 프로퍼티를 기본으로 갖고 있기 때문에 constructor를 명시적으로 만들 필요가 없다.

### 기본생성과 함수생성의 차이

```javascript
console.log(User()); //TypeError: Class constructor User cannot be invoked without 'new'

console.log(User2()); // user2가 먼저 뜨고 undefined가 반환된다.
```

- 기본 방법으로 생성한 클래스는 new 없이 호출할 수 없다. 이 클래스의 타입은 함수지만 에러가 뜬다.
- 함수 방법으로 생성한 클래스는 new 없이 호출할 수는 있다. 하지만 undefined가 나온다.

<!--
### ✔ **리터럴 방식**

- 유일하게 존재하기 때문에 재활용이 불가하다.
- 생성자가 존재하지 않는다.
- 프로퍼티와 메서드가 끝날 때는 `; 세미콜론`이 아닌 `, 쉼표`가 온다.
- 객체 내부에서 해당 객체의 프로퍼티와 메서드에 접근하려면 해당 객체를 나타내는 `this` 속성과 접근 연산자를 사용해야 한다. 여기서 `this`는 `인스턴스 변수`를 가리킨다.

```jsx
let 인스턴스 변수 = {
	프로퍼티1 : 초기값,
	프로퍼티2 : 초기값,

	메서드0 : function(){
		//내부에서 접근 방법
		console.log(this.프로퍼티1);
		this.메서드2();
	},
	메서드1 : function(){},
	메서드2 : function(){},
}
//외부에서 접근 방법
인스턴스 변수.프로퍼티1;
인스턴스 변수.메서드1(); //함수니까 뒤에 ()괄호가 온다.
```

 -->
