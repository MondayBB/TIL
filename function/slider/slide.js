// 변수 지정
const sliderWrapper = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider-container");
let slides = document.querySelectorAll(".slide");
let slideCounter = slides.length;
let currentIndex = 0;

const minibar = document.querySelector(".minibar");

const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");



// 슬라이드 도트 생성
function dot(slides){
  for(i=0; i<slides; i++){
    let slidesDot = document.createElement("li");
    minibar.append(slidesDot);
  }
}

// 정해진 시간에 새로고침하는 함수
let eventBanEnd = new Date(2022,7-1,16,22,29,30).getTime();

function eventTime(){
  let introDate = new Date().getTime();
  if(eventBanEnd <= introDate && eventBanEnd+6000 >= introDate){
    location.reload();
  }
}

// 새로고침 시 사라지는 배너
let introDate = new Date().getTime();
if(eventBanEnd <= introDate){
  slides[2].remove();
  slideCounter -= 1;
  sliderContainer.style.width = `${slideCounter * 100}%`;
  dot(slideCounter);
}else{
  sliderContainer.style.width = `${slideCounter * 100}%`;
  dot(slideCounter);
}

// 페이지 로드 시 디폴트 도트
let minibarLi = minibar.querySelectorAll("li");
minibarLi[0].classList.add("active");


// 슬라이드 뷰 왼쪽으로 100%씩 이동
function goToSlide(idx){
  sliderContainer.style.left = `${idx * -100}%`;
  currentIndex = idx;
  sliderContainer.classList.add("animated");
}


// 도트를 누르면 해당 슬라이드로 이동
let minibarLiArr = Array.from(minibarLi);
minibarLiArr.forEach(function(e){
  e.addEventListener("click", function(){
    for(let i=0; i<minibarLi.length; i++){
      minibarLi[i].classList.remove("active");
    }
    e.classList.add("active");
    let minibarLiArrIdx = minibarLiArr.indexOf(e);
    goToSlide(minibarLiArrIdx);
  })
})


// 왼쪽으로 롤링
navPrev.addEventListener("click", () => {
  if(currentIndex != 0){
    goToSlide(currentIndex - 1);
    minibarLi[currentIndex].classList.add("active");
    minibarLi[currentIndex+1].classList.remove("active");
  }else{
    goToSlide(slideCounter - 1);
    minibarLi[slideCounter - 1].classList.add("active");
    minibarLi[0].classList.remove("active");
  }
});
// 오른쪽으로 롤링
navNext.addEventListener("click", () => {
  if(currentIndex < slideCounter-1){
    goToSlide(currentIndex + 1);
    minibarLi[currentIndex].classList.add("active");
    minibarLi[currentIndex-1].classList.remove("active");
  }else{
    goToSlide(0);
    minibarLi[0].classList.add("active");
    minibarLi[slideCounter-1].classList.remove("active");
  }
});


// 5초마다 롤링되는 함수
function introSlide(){
  navNext.click();
  eventTime();
  console.log(new Date())
}
setInterval(introSlide,5000);

