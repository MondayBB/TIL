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