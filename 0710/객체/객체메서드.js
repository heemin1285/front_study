// // 객체(object)에는 함수(메서드)도 넣을 수 있음

// let user = {

//   name : '홍길동',
//   age : 20

  
// }


// user.hi = () => {

// console.log('hi');

// }

// user.hi();

// function hi(){

// console.log('hi2');

// },

// let user2 = {

//   name : '김자바',
//   age : 20

  
// }
// hi : function(){

//   console.log(user2.name);
//  }

//  user = {name : '홍길동'}
//  user2 = {name : "김자바"}

//  function show(){
//   console.log(this.name);
// }

// user.f = show;
// user2.f = show;

// user.f();
// user2.f();

// //객체 참조

// let a = 'abc';
// let b = a;

// a='qwer';
// console.log(b);

// 배열

let arr =[1,2,3,4];

arr[0] = 20;
arr[1] = "a";

arr.push("zzzzzz");

console.log(arr)


