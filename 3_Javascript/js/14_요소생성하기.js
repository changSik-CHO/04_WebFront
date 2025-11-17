const createBox 
= document.querySelector("#createBox"); // button

const container 
= document.querySelector('.container'); // div

createBox.addEventListener("click", () => {

  // 1. div 요소 생성
  const box = document.createElement("div");
  // <div></div>
  
  // 2. 만들어진 div요소 "box" 클래스 추가
  box.classList.add("box"); // <div class="box"></div>
  console.log(box);

  // 3. input 요소 생성(+ 속성 부여)
  const input = document.createElement("input"); 
  // <input>
  input.type = "text";  // <input type="text">

  // 4. 생성된 input을 box의 마지막 자식으로 추가
  box.append(input);
  /*
  <div class="box">
    <input type="text">
  </div>
  */

  // 5. 만들어진 div 요소 container의 마지막 자식으로 추가
  container.append(box);

});

console.log(container.classList);

/*
요소.classList : 요소의 클래스 목록(배열)
-> 클래스 존재여부, 추가, 제거 등 할 수 있음

요소.classList 
-> 요소 클래스 목록이 배열 형식으로 반환

요소.classList.contains("클래스명")
-> 클래스가 있으면 true, 없으면 false 반환

요소.classList.add("클래스명");
-> 클래스 추가

요소.classList.remove("클래스명");
-> 클래스 제거

*/

// innerHTML로 요소 추가하기
const innerHTMLBox = document.querySelector("#innerHTMLBox"); // button

innerHTMLBox.addEventListener("click", () => {
  container.innerHTML += "<div class='box'><input type='text'></div>";
});

