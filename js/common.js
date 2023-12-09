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

const wrap = document.querySelector('.all_wrap');
console.log(wrap)
const tree_container = document.querySelector('.tree_container');
const tree = tree_container.querySelector('.christmas_tree');
const moon = wrap.querySelector('.moon')
const home = wrap.querySelector('.home');
const houses = home.querySelector('.houses');
console.log(moon)
// alert('hello world')

// moon.addEventListener('click',(e) => {
//     tree_container.classList.toggle('active')
//     console.log('hello');
// })
window.addEventListener('scroll', (e) => {
    console.log(window)
    let scroll = window.scrollY;
    console.log(scrollY)
    if(scroll > 100){
        wrap.classList.add('scrolled');
    }else{
        wrap.classList.remove('scrolled');
    }
})




const deco =() =>{
    const areas = document.querySelectorAll('.dragarea');
    const stickers = document.querySelectorAll('.sticker');
    let url, decoName;
    
    stickers.forEach(sticker => {
        sticker.addEventListener('dragstart', () => {
            getIndex(sticker.dataset.name);
        })
    
        sticker.addEventListener('dragend', () => {
    
        })
    })
    
    function getIndex(name) {
        decoName = name;
        url = `./images/stick_${decoName}.png`
    }
    
    function checkSuccess(name) {
        stickers.forEach(sticker => {
            if (sticker.dataset.name === name) {
                sticker.style.display = 'none'
            }
        })
    }
    
    areas.forEach(area => {
        area.addEventListener('dragover',(e) => {
            e.preventDefault();
        })
        area.addEventListener('dragleave', (e) => {
            e.preventDefault();
        })
    
        area.addEventListener('drop',(e) => {
            console.log(decoName, area.dataset.name)
            let match = area.dataset.name === decoName;
            if(!match) {
                area.classList.add('error');
            }else{
                console.log(url)
                area.setAttribute('src', url);
                // area.setAttribute('src', url);
                // area.style.backgroundImage = url;
                // shadow
    
                checkSuccess(decoName)
            }
        })
    })
}

deco();