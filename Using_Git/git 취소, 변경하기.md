# git add 취소하기
**git reset HEAD [file]**
git add해서 git status에 올라간 파일은 git reset HEAD를 사용한다.   
- 전체 파일 취소 = git reset HEAD
- 특정 파일 취소 = git reset HEAD index.html

   
# git commit 취소하기
**git reset HEAD^**
- commit을 취소하고 해당 파일은 staged 상태로 워킹 디렉터리에 보존 => **git reset --soft HEAD^**
- commit을 취소하고 해당 파일은 unstaged 상태로 워킹 디렉터리에 보존   
=> **git reset --mixed HEAD^**   
=> **git reset HEAD^** 
=> **git reset HEAD~2** 마지막 2개의 commit을 취소
- commit을 취소하고 해당 파일들은 unstaged 상태로 워킹 디렉터리에서 삭제 => **git reset --hard HEAD^**


# git commit 변경하기
**git commit -amend**
