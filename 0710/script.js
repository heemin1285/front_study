// 불린으로 형변환
// true, false 로 변경
// 뭔가 존재한다 싶으면 true
// 없다는 느낌은 전부 false
let a = Boolean(1);
let b = Boolean(0);
console.log(typeof a, a);
console.log(typeof b, b);



//스페이스 바 하나도 문자 하나이므로 true
// 빈 문자열이 false임

let c = Boolean("");
console.log(typeof c, c);


//null, undefined,NaN이런 느낌들은 false10

a = Boolean(null);
console.log(typeof a, a);

//연산자 (+, -, *, /, %, **)
let x=y=z= 10+20;

// 논리연산자 (&&, ||, !)
// 비트연산자 (&,|,~,^,>>,<<)

//동등 연산자(==)
let num1 = 10;

// prompt로 사용자에게 숫자 하나를 입력 받아서 
// 입력받은 숫자와 num1에 있는 값이 같은지
// 다른지 결과를 출력

//let num2 = prompt("숫자를 입력해라");
let num2 = "10"

// == 연산자 : 자료형 상관없이 같냐라고 물어봄
// !=
console.log(num1 == num2);
console.log(false==0);
console.log("" ==0);


// === 연산자 : 일치연산자의 엄격버전(자료형 까지 구분함)
// !==
console.log(num1 === num2);
console.log(false===0);
console.log("" ===0);






