// let dragged;
// const tree = document.querySelector('.tree_container')
// /* 드래그 가능한 대상에서 발생하는 이벤트 */

// tree.addEventListener("dragstart", (event) => {
//     // 드래그한 요소에 대한 참조 저장
//     dragged = event.target;
//     // 반투명하게 만들기
//     dragged.style.transform = 'scale(2)';
//   });

//   tree.addEventListener("dragenter", (event) => {
//     // 드래그 가능한 요소가 대상 위로 오면 강조
//     event.target.style.opacity = 0.5;
//   });

const wrap = document.querySelector('.wrap');
console.log(wrap)
const tree_container = document.querySelector('.tree_container');
const tree = tree_container.querySelector('.christmas_tree');
const moon = wrap.querySelector('.moon')
const home = wrap.querySelector('.home');
const houses = home.querySelector('.houses');
console.log(moon)
// alert('hello world')

moon.addEventListener('click',(e) => {
    tree_container.classList.toggle('active')
})
// window.addEventListener('scroll', (e) => {
//     console.log(window)
//     let scroll = window.scrollY;
//     console.log(scrollY)
//     if(scroll > 200 ){
//         tree_container.style.transform = `scale(5)`
//     }
// })

window.addEventListener('scroll', (e) => {
    let scroll = window.scrollY
    console.log(scroll)
})



