//1.입출력
//1-1. 입력
//1-2. 출력
//.prompt();
//.confirm();

//1-2.출력
// const msg = "<h2>"+hello java+"</h2>";
// console.lgo(msg);

//alert(msg);
//document.write("<h1>"+msg+"</h1>");

//2. DOM - Document Object Model
//2-1. DOM 선택 메소드 [old]
//document.getElementById("아이디")
// document.getElementsByClassName("클래스")
// document.getElementsByName("폼네임")

//2-2. New [jQuery 선택자 --> css선택자 방식]
// document.querySelector("#아이디");
// document.querySelector(".클래스");
// document.querySelector("태그");

// //복수선택
// document.querySelectorAll("p");

//1. video_list 클래스르 선택
//const: 상수 선언 키워드
//1et: 변수 선언 키워드
//var: (오래된, 가급적 사용하지 않을 언제가 없어질)변수 선언 키워드
// 자바 스크립트 자료형은 데이터 유형에 따라 동작 할당됨 vs 자바 와 큰차이!
    const firsitLi=document.querySelectorAll(".video_list li")[0];

//2.firstLi에 마우스 클릭 감지 , 이벤트 발생하면 처리할 코드 작성
// callback function
    firsitLi.addEventListener("click",function(){
    //2-1. 숨겨둔 video_modal이 있다면,
    const modal= document.querySelector("#video_modal");
    modal.classList.remove("d-none");
});

/* open_video_modal 메소드가 있다면?
function open_video_modal(){
    //.....
}
*/