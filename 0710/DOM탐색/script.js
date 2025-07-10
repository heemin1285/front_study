// let = box document.getElementById('box');
// box.style.background = 'red';
// console.log(box)

// // 선택자를 이용헤서 요소를 선택 할 수 있음
// const box2 = document.querySelector('#box')
// box2.style.color ='white'


//  선택자에 해당하는 요소중 첫번째꺼 하나만 가져옴
// const bg = document.querySelector('.bg');
// bg.style.background = 'pink';

//선택자에 해당하는 모든 요소를 가져옴
const bg = document.querySelectorAll('.bg');

for(let i=0; i<bg.length; i++){

  bg[i].style.background = 'pink';


}

for(let b of bg){

  b.style.background = 'pink';

}

const li = document.querySelectorAll('ul>li');
for(let l of li){

  l.innerHtml = 'ㅋㅋㅋ';

  
}



