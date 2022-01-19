
let pointDay = prompt("계산할 기념일을 입력해 주세요.", "2021-7-20");
// let days = prompt("계산할 D-day일자를 입력해 주세요.", "100");

let now = new Date(); // 현재 시간을 가진 객체를 생성
let dDay = new Date(pointDay); // 인자로 정해진 시간을 가진 객체를 생성

let toNow = now.getTime(); // getTime() 시간 정보 (1970년 1월 1일 이후 밀리초)
let todDay = dDay.getTime(); // 1970년 1월 1일 이후로 부터 표적하는 시간까지 경과된 초

console.log(toNow, todDay);

let passTime = toNow - todDay; // 지난시간 = 오늘시간 - 표적한 시간
console.log("지난시간", passTime); // 지난시간 2455536550
  //Math.trunc() | 정수 부분을 반환함
let passDay = Math.trunc(passTime / (1000*60*60*24)) // 지난시간 밀리초를 일자로 계산 (밀리초*초*분*시간)
console.log("지난일자", passDay) // 28일 경과

document.getElementById("accent").innerHTML = passDay + "일 경과";
document.getElementById("firstDay").innerHTML = pointDay;

// 100일 이후 기념일 날짜
let itemDate = document.querySelectorAll(".item-date"); //배열
let itemPoint = document.getElementById("pointDay"); //변수 데이터
function calcDate(days) {
let theTime = days * (1000*60*60*24); // 100일 지난 날짜 시간(1000/1초)으로 환산 
let futureTime =  todDay + theTime; // 시작일 + 100일 시간 -> 100일 후의 시간
let someDay = new Date(futureTime); //지난 사간을 새로운 날짜 객체로 생성 object -> 객체
console.log(typeof someDay, someDay);

let year = someDay.getFullYear();
let Month = someDay.getMonth() + 1;
let date = someDay.getDate();
console.log(year, Month, date);

let dateId = "date" + days; //date100 | date500

if (itemDate) {
  document.getElementById(dateId).innerHTML = year + "년 " + Month + "월 " + date + "일";
} 

}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
