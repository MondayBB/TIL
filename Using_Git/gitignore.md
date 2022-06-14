# 📌.gitignore
원하지 않는 파일이나 폴더를 git에 올릴 때 제외할 수 있는 설정 파일

## 생성방법   
**1. .git 폴더가 생긴 폴더에 .gitignore 파일을 생성한다.**   
**2. 생성된 .gitignore 파일에 제외하고 싶은 폴더나 파일을 작성한다.**
- 폴더는 /폴더명/ ex) 폴더명이 img라면 => /img/
- 파일은 /파일명 ex) img폴더 안에 있는 intro.jpg 파일 => /img/intro.jpg
- 동일한 확장자 전부 제외 *.확장자 ex) js확장자 전부 => /*.js


**✔ git status하면 .gitignore에 작성된 파일은 빠진 리스트가 나열된다.   
.gitignore도 나오는데, 협업자가 확인하기 위해 이 파일은 업로드한다.**
***

## repository 생성 시 gitignore 생성
- repository 생성할 때 gitignore을 생성할 수 있다.   
- Add.gitignore에서 내 프로젝트에 맞는 .gitignore 템플릿을 지정하여 생성 가능하다.
***

## 유용한 사이트
- [gitignore 템플릿 사이트](https://www.toptal.com/developers/gitignore)
