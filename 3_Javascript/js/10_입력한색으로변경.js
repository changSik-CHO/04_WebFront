// 배경색 적용할 div 배열
const boxList = document.querySelectorAll(".box");

// 배경색 입력할 input 배열
const inputList = document.querySelectorAll(".color-input");

// 두 배열의 요소의 갯수, 순서가 같으니 index 번호를 공유할 수 있음
document.querySelector("#changeButton")
.addEventListener("click", function() {

  for(let i = 0; i < boxList.length; i++) {
    boxList[i].style.backgroundColor = inputList[i].value;
    // i는 반복될때마다 1씩 증가하므로 0,1,2,3,4 
    // boxList[0].style.backgroundColor = inputList[0].value;
    // boxList[1].style.backgroundColor = inputList[1].value;
    // boxList[2].style.backgroundColor = inputList[2].value;
    // boxList[3].style.backgroundColor = inputList[3].value;
    // boxList[4].style.backgroundColor = inputList[4].value;
  }

});