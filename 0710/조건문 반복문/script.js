// 조건문

// if 문

let age=10;
if(age >= 20){

  console.log("성인");

}else if (age >=12) {
  console.log("청소년");
}else{
  console.log("어린이");
}

// 삼항연산자
// 조건식 ? 참 : 거짓
let result = age >= 20? "성인" : "청소년";

//switch 문

let a = 3;

switch(a){

  case 1 : 
  console.log("a는 1일다")
  break;

  case 2 : 
  console.log("a는 2일다")
  break;
  
  default: 
  console.log("a는 1,2가 아니다")

}

//반복문
// for문

//for(초기값; 조건식; 증감식){
//  반복할코드
// }

//1~10까지 합의 결과를 콘솔창에 출력

// let sum = 0;

// for(let i=1; i<=10; i++)
  
//   {

// sum = sum + i;
// }
// console.log(sum);




let total = 0; // 전체결과
let innerTotal = 0; // 각 덩어리당 합계


for(let i=1; i<=10; i++){

    innerTotal = innerTotal+i;
    total = total + innerTotal;

  }


// while 문

// while(조건식){

// 반복할코드

// } 

// 반복종료 - break;
// 반복문 상단으로 돌아감 = continue;




