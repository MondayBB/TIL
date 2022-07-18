// 변수 지정
const container = document.querySelector(".container");
const slideUl = document.querySelector("#slider");
const slideLi = document.querySelectorAll(".slide");
let slideAppear = slideUl.querySelectorAll(".appear");
let index = 0;

const minibar = document.querySelector(".minibar");
const minibarLi = minibar.querySelectorAll("li");
let minibarLiAppear = minibar.querySelectorAll(".appear");

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");


// slide container의 너비
slideUl.style.width = `${slideAppear.length * 100}%`;

minibarLiAppear[0].classList.add("active");


// 이벤트 오픈과 종료
const eventEndDate = new Date(2022,7-1,17,20,27).getTime();
const eventStartDate = new Date(2022,7-1,17,20,26,30).getTime();
const introDate = new Date().getTime();

// 이벤트 종료
if(introDate >= eventEndDate){
  slideLi[3].classList.remove("appear");
  slideLi[3].classList.add("hide");
  minibarLi[3].classList.remove("appear");
  minibarLi[3].classList.add("hide");
}
// 이벤트 오픈
if(eventStartDate <= introDate){
  slideLi[1].classList.remove("hide");
  slideLi[1].classList.add("appear");
  minibarLi[1].classList.remove("hide");
  minibarLi[1].classList.add("appear");
}

// 특정 시간에 페이지 새로고침
function eventEndTime(){
  const introDate = new Date().getTime();
  if(introDate >= eventEndDate && introDate <= eventEndDate+5000){
    location.reload();
  }
  if(introDate >= eventStartDate && introDate <= eventStartDate+5000){
    location.reload();
  }
}
minibarLiAppear = minibar.querySelectorAll(".appear");
slideAppear = slideUl.querySelectorAll(".appear");


// 도트 클릭하면 해당 슬라이드로 이동
let minibarLiArr = Array.from(minibarLiAppear);
minibarLiArr.forEach(function(e){
  e.addEventListener("click", function(){
    for(let i=0; i<minibarLiAppear.length; i++){
      minibarLiAppear[i].classList.remove("active");
    }
    e.classList.add("active");
    let liIndex = minibarLiArr.indexOf(e);
    index = liIndex;
    slideUl.style.left = `${index* -100}%`;
  })
})



// 좌우 슬라이드
function nextSlide(){
  index++;
  if(index >= slideAppear.length){
    index = 0;
    slideUl.style.left = `${index* -100}%`;
    minibarLiAppear[slideAppear.length-1].classList.remove("active");
    minibarLiAppear[index].classList.add("active");
  } else{
    slideUl.style.left = `${index* -100}%`;
    minibarLiAppear[index-1].classList.remove("active");
    minibarLiAppear[index].classList.add("active");
  }
}
function prevSlide(){
  index--;
  if(index < 0){
    index = slideAppear.length-1;
    slideUl.style.left = `${index* -100}%`;
    minibarLiAppear[0].classList.remove("active");
    minibarLiAppear[index].classList.add("active");
  } else{
    slideUl.style.left = `${index* -100}%`;
    minibarLiAppear[index+1].classList.remove("active");
    minibarLiAppear[index].classList.add("active");
  }
}
next.addEventListener("click",nextSlide);
prev.addEventListener("click",prevSlide);


setInterval(function(){
  next.click();
  eventEndTime();
  console.log(new Date());
}, 5000);



// 모바일 스와이프
let startPos = 0; // touchstart 지점에서 찍히는 screenX
let offset = 0; // touch를 시작하고 나서의 변위, 변위 = 나중 위치 값 - 처음 위치 값
let curPos = 0; // 현재 슬라이드의 위치, inner가 마지막에 움직이는 위치 정의
const screenWidth = container.clientWidth;
// clientWidth = padding을 포함한 px단위의 요소 가시너비 반환

window.onload = function () {
  // touchstart = 하나 이상의 터치 포인트가 터치 표면에 배치되면 이벤트 시작
  // 터치를 드래그함으로써 이미지를 넘길 것이기 때문에 터치를 시작한 위치 구하기
  container.addEventListener("touchstart", (e) => {
    startPos = e.touches[0].pageX;
    // touch.pageX = 스크롤 오프셋을 포함하여 뷰포트를 기준으로 터치 포인트의 x 좌표를 반환
    console.log(startPos);
  });

  // touchmove = 하나 이상의 터치 포인트가 터치 표면을 따라 이동할 때 이벤트 시작
  // 스와이프 하고 있는 동안 이미지가 따라와야 함
  // targetTouches = 터치 표면과 여전히 접촉하고 있고, 현재 대상 요소와 동일한 대상 내에서 이벤트가 발생한 터치 포인트의 TouchList 모든 개체를 나열
  container.addEventListener("touchmove", (e) => {
    // e.targetTouches[0].pageX = x좌표 드래그 값
    offset = curPos + (e.targetTouches[0].pageX - startPos); // 터치 드래그 값 - 터치 시작 위치
    if(offset < -(screenWidth*slideAppear.length)){
      offset = -(screenWidth*slideAppear.length);
      slideUl.style.left = `${offset}px`;
    }else if(offset > 0){
      offset = 0;
      slideUl.style.left = `${offset}px`;
    }else{
      slideUl.style.left = `${offset}px`;
    }
    // console.log(offset);
    // console.log(`${screenWidth*slideAppear.length}임`);
    // slideUl.style.transform = `translateX(${offset}px)`;
    slideUl.style.transitionDuration = `0ms`;
    // console.log(curPos);
  });

  // touchend = 터치 표면에서 하나 이상의 터치 포인트가 제거될 때 발생
  container.addEventListener("touchend", (e) => {
    // e.changedTouches[0].pageX = 터치가 끝난 지점
    console.log(e.changedTouches[0].pageX);
    console.log(e.changedTouches[0].pageX - startPos); // 터치가 끝난 지점 - 터치를 시작한 지점
    // const sum = curPos + (e.changedTouches[0].pageX - startPos); // 터치 시작점에서 움직인 거리
    const sum = curPos + (e.changedTouches[0].pageX - startPos); // 터치 시작점에서 움직인 거리
    let destination = Math.round(sum / screenWidth) * screenWidth;
    console.log("destination=" + destination);
    if (destination > 0) {
      destination = 0;
    } else if (destination < -(screenWidth * (slideAppear.length - 1))) {
      destination = -(screenWidth * (slideAppear.length - 1));
    }

    // slideUl.style.transform = `translate3d(${destination}px, 0px, 0px)`;
    slideUl.style.left = `${destination}px`;
    slideUl.style.transitionDuration = `300ms`;
    curPos = destination;

    setTimeout(() => {
      slideUl.style.transitionDuration = `0ms`;
    }, 300);
  });
};