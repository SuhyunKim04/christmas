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

const docs = document.documentElement;
const wrap = document.querySelector('.all_wrap'); 
const tree_container = document.querySelector('.tree_container');
const tree = tree_container.querySelector('.christmas_tree');
const moon = wrap.querySelector('.moon')
const home = wrap.querySelector('.home');
const houses = home.querySelector('.houses');  
const tree3 = document.querySelector('.tree3');
const tree2 = document.querySelector('.tree2');
const tree4 = document.querySelector('.tree4');

 
 
window.addEventListener('scroll', (e) => {
    console.log(window)
    let scroll = window.scrollY;
    console.log(scrollY)
    if(scroll > 100){
        wrap.classList.add('scrolled');
    }else{
        wrap.classList.remove('scrolled');
    }

    docs.style.setProperty('--x', `-${scroll * 0.5}px`)
    docs.style.setProperty('--y', `-${scroll * 0.1}px`)
    tree3.style.transform = `translateX(${scroll * 0.8}px)`
    tree2.style.transform = `translateY(${scroll * 0.8}px)`
    tree4.style.transform = `translate(-${scroll * 0.5}px, -${scroll * 0.5}px)`
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
const close = document.querySelector('.close');
const menuTab = () =>{
    const modal = document.querySelector('.modal');
    const tabContainer = modal.querySelector('.tab_container');
    const tabContents = modal.querySelectorAll('.tab_contents');
    const tabMenus = modal.querySelectorAll('.tab_menu li');
    let currentIndex = 0;
    tabContents[currentIndex].classList.add('on')
    
    
    tabMenus.forEach((menu,index) => {
        menu.addEventListener('click',(e) => {  
            let status = menu.classList.contains('active');
            if( !status ){
                menuReset();
                menu.classList.add('active');
                currentIndex = index;
                console.log(currentIndex);
            } else{
                menu.classList.remove('active');
            }
            tabContents.forEach(content => {
                content.classList.remove('on')
            })

            tabContents[currentIndex].classList.add('on')

        })
        closeModal();
    })

    function menuReset() {
        tabMenus.forEach(menu => {
            menu.classList.remove('active');
        })
    }
    function closeModal (){
        close.addEventListener('click', (e) => {
          modal.style.display = 'none'
    
        })
    }
}



deco();
menuTab();