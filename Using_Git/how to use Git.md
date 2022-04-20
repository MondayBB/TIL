> **참고 : https://hackmd.io/@oW_dDxdsRoSpl0M64Tfg2g/ByfwpNJ-K**
>

# Git 설정하기

## 1. Git을 설치한다. [https://git-scm.com/downloads](https://git-scm.com/downloads)

## 2. 설치 후 Git bash를 연다

## 3. Git bash 환경설정

**1. 유저 이름 설정**   
git config —global user.name “my name”   
2. 유저 이메일 설정, 가입 시 사용한 이메일      
git config —global user.email “my email”   
3. 입력 정보 확인   
git config —list   

## 4. Github에 코드 업로드 하기

**1. 초기화**   
git init   
**2. 업로드할 파일 더하기**   
git add .  전체파일 업로드 대기    
git index.html   index.html 업로드 대기   
**3. 대기 상태 확인**   
git status   
**4. 커밋 작성**   
git commit -m “commit message”   
**5. Github 안의 repository랑 로컬파일 연결**   
git remote add origin https://github.com/~~~   
**6. 연결 확인**   
git remote -v   
**7. 연결한 Github repository에 올리기**   
git push origin master   
git push origin main   

## 5. 초기설정 후 코드 업로드

git add index.html → git commit -m “commit message” → git push origin main  반복   

## 6. 내 브렌치

**1. Github에서 소스코드 다운**   
git clone https://github.com/~~~~   
**2. Github에 내 브렌치 만들기**    
git checkout -b 브랜치이름   
**3. 브렌치에 소스코드 업로드**   
git add index.html → git commit -m “commit” → git push origin 브렌치 이름   

## 7. 마스터 브렌치에서 소스코드 가져오기

**1. 내 소스 먼저 커밋(작성한 내용이 사라지면 안되니까)**   
git add index.html → git commit -m “commit”   
**2. 마스터 브랜치에서 소스 가져오기**   
git pull origin master   

## 8. 브렌치끼리 이동하기

git checkout master → master 브렌치로 이동   
