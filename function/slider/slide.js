// 변수 지정
const introSlider = document.querySelector("#introSlider");
const introSlides = document.querySelectorAll(".introSlides");
let slideShow = introSlider.querySelectorAll(".show");

let currentIdx = 0;

const introPrev = document.querySelector("#prev");
const introNext = document.querySelector("#next");


// 이벤트 시작, 종료
let currentTime = new Date().getTime();

  // 이벤트 시간
const eventStartTime = new Date(2022,7-1,18,10,0).getTime();
const eventEndTime = new Date(2022,7-1,25,17,1).getTime();

// 인트로배너 시작, 종료
function eventBan(eventStartTime, eventEndTime, slideIndex){
  if(currentTime >= eventStartTime && currentTime < eventEndTime){
    introSlides[slideIndex].classList.remove("hide");
    introSlides[slideIndex].classList.add("show");
    slideShow = introSlider.querySelectorAll(".show");
  }else{
    introSlides[slideIndex].classList.remove("show");
    introSlides[slideIndex].classList.add("hide");
    slideShow = introSlider.querySelectorAll(".show");
  }
}
eventBan(eventStartTime, eventEndTime, 0);

// 특정시간에 페이지 새로고침
function introReload(){
  currentTime = new Date().getTime();
  if((currentTime >= eventStartTime && currentTime < eventStartTime+7500) || (currentTime >= eventEndTime && currentTime < eventEndTime+7500)){
    location.reload();
  }
}


// introSlider의 너비
let bodyWidth = document.body.clientWidth;
introSlider.style.width = `${slideShow.length*bodyWidth}px`;


// intro ban menu list 생성 함수
const introBanMenu = document.querySelector(".introBanMenu");
let introBanMenuLi = introBanMenu.querySelectorAll("li");

function creatLi(){
  for(let i=0; i<slideShow.length; i++){
    let introBanMenuCreate = document.createElement("li");
    introBanMenuCreate.classList.add("show");
    introBanMenu.append(introBanMenuCreate);
  }
  introBanMenuLi = introBanMenu.querySelectorAll("li");
}
creatLi();

let introBanMenuLiShow = introBanMenu.querySelectorAll("li");
introBanMenuLiShow[0].classList.add("active");


// 도트 클릭하면 해당 슬라이드로 이동
function dotClick(e){
  e.addEventListener("click", function(){
    let idx = introBanMenuLiArr.indexOf(e);
    introSlider.style.transform = `translate3d(${idx * -(bodyWidth)}px, 0px, 0px)`;
    currentIdx = idx;
    for(let i=0; i<slideShow.length; i++){
      introBanMenuLi[i].classList.remove("active");
    }
    this.classList.add("active");
  });
}
const introBanMenuLiArr = Array.from(introBanMenuLi);
introBanMenuLiArr.forEach(dotClick);


// 좌우 슬라이드
function banLiLoop(currentIdx){
  for(let i=0; i<introBanMenuLiShow.length; i++){
    introBanMenuLiShow[i].classList.remove("active");
  }
  introBanMenuLiShow[currentIdx].classList.add("active");
}

function nextSlide(e){
  e.preventDefault();
  currentIdx++;
  if(currentIdx >= slideShow.length){
    currentIdx = 0;
    introSlider.style.transform = `translate3d(${currentIdx* bodyWidth}px, 0px, 0px)`;
    banLiLoop(currentIdx);
  } else{
    // introSlider.style.left = `${currentIdx* -(bodyWidth)}px`;
    introSlider.style.transform = `translate3d(${currentIdx* -(bodyWidth)}px, 0px, 0px)`;
    banLiLoop(currentIdx);
  }
  return currentIdx;
}
function prevSlide(e){
  e.preventDefault();
  currentIdx--;
  if(currentIdx < 0){
    currentIdx = slideShow.length-1;
    introSlider.style.transform = `translate3d(${currentIdx* -(bodyWidth)}px, 0px, 0px)`;
    banLiLoop(currentIdx);
  } else{
    introSlider.style.transform = `translate3d(${currentIdx* -(bodyWidth)}px, 0px, 0px)`;
    banLiLoop(currentIdx);
  }
  return currentIdx;
}
introNext.addEventListener("click",nextSlide);
introPrev.addEventListener("click",prevSlide);



// 7초마다 슬라이드 롤링
setInterval(function(){
  next.click();
  introReload();
  curPos = -(currentIdx * bodyWidth);
}, 7000); 


// 스와이프
let startPos = 0;
let offset = 0;
let curPos = 0;
const introContainer = document.querySelector("#introContainer");
// const screenWidth = introContainer.clientWidth; -> bodyWidth 로 대체
console.log(`bodyWidth = ${bodyWidth}`);
// introSlider 가 스와이프 됨에 따라 introslides가 보여짐

window.onload = function(){
  // 터치 시작 위치
  introSlider.addEventListener("touchstart", (e) => {
    startPos = e.touches[0].pageX;
  });

  // 스와이프 하고 있는 동안 따라오기  
  introSlider.addEventListener("touchmove", (e)=>{
    offset = curPos + (e.targetTouches[0].pageX - startPos);
    introSlider.style.transform = `translate3d(${offset}px, 0px, 0px)`;
    introSlider.style.transitionDuration = "100ms";
  });

  introSlider.addEventListener("touchend", (e) => {
    // sum = 이동한 거리
    const sum = curPos + (e.changedTouches[0].pageX - startPos);
    let destination;
    if((e.changedTouches[0].pageX - startPos) >= 0){
      destination = Math.ceil(sum / bodyWidth) * bodyWidth;
    }else{
      destination = Math.floor(sum / bodyWidth) * bodyWidth;
    }
    
    if(destination > 0){
      destination = 0;
    }else if(destination < -(bodyWidth*(slideShow.length-1))){
      destination = -bodyWidth*(slideShow.length-1);
    }
    introSlider.style.transform = `translate3d(${destination}px, 0px, 0px)`;
    curPos = destination;
    introSlider.style.transitionDuration = "500ms";
    currentIdx = -(curPos / bodyWidth);
    banLiLoop(currentIdx);
    
  });
}