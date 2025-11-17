// window.setTimeout()

document.getElementById("btn1").addEventListener("click", () => {

  window.setTimeout(function() {
    alert("3초 후 출력!");
  }, 3000);

});


// window.setInterval()

// 현재 시간을 문자열로 반환하는 함수
function currentTime() {

  const now = new Date();

  let hour = now.getHours();   // 시
  let min  = now.getMinutes(); // 분
  let sec  = now.getSeconds(); // 초
  // 1의 자리만 나올 때 1, 2 이렇게 나옴
  // 디지털 시계 모양에 따라 1의 자리일때 01, 02 .. 로 표현

  if(hour < 10) hour = "0" + hour;
  if(min < 10) min = "0" + min;
  if(sec < 10) sec = "0" + sec;
  // 12 : 40 : 30
  return hour + " : " + min + " : " + sec;
  //return `${hour} : ${min} : ${sec}`;
}

let interval; // setInterval을 저장하기 위한 변수

function clockFn() {

  const clock = document.getElementById("clock");
  clock.innerText = currentTime();

  interval = setInterval(function() {
    clock.innerText = currentTime();
  }, 1000);
}

clockFn();

// window.clearInterval()
document.getElementById("stop").addEventListener("click", () => {
  window.clearInterval(interval);
})

