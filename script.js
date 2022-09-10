let backProjectBtn = document.querySelector('.banner-btns > button')
let backProject = document.querySelector('.selection-model')
let backProjectCloseBtn = document.querySelector('.selection-model > img')
let backProjectActiveBtn = document.querySelectorAll('.back-project-stand > button')
let pladgeBtns = document.querySelectorAll('.pladge-btns button')
let successMsg = document.querySelector('.success')
let successBtn = document.querySelector('.success button')
let all = document.querySelectorAll('.main, .statics, .banner')
let menu = document.querySelector('nav ul')
let menuBtn = document.querySelector('.menu-btn')


menuBtn.addEventListener('click',(e)=>{
    if(menu.className == ''){
        menu.classList.add('show')
        menuBtn.src = 'images/icon-close-menu.png'
        document.querySelector('main').style.opacity = '0.4'
    }else{
        menu.classList.remove('show')
        menuBtn.src = 'images/icon-hamburger.png'
        document.querySelector('main').style.opacity = '1'
    }
})

backProjectBtn.addEventListener('click',e=>{
    backProject.classList.remove('hide')
    all.forEach(a=>{
        a.style.opacity = '0.3'
    })
})
backProjectActiveBtn.forEach(btn=>{
    if(btn.parentElement.lastElementChild.className != 'pladge hide') return

    btn.addEventListener('click',e=>{
        if(btn.parentElement.lastElementChild.className == 'pladge hide'){
            btn.parentElement.lastElementChild.classList.remove('hide')
            btn.id = 'active'
            btn.parentElement.style.border = '1px solid hsl(176, 50%, 47%)'
        }else{            
            btn.parentElement.lastElementChild.classList.add('hide')
            btn.id = ''
            btn.parentElement.style.border = '1px solid hsl(0, 0%, 75%)'
        }
        
    })
})
backProjectCloseBtn.addEventListener('click',e=>{
    backProject.classList.add('hide')
    all.forEach(a=>{
        a.style.opacity = '1'
    })
})


pladgeBtns.forEach(btn=>{
    btn.addEventListener('click',e=>{
        backProject.classList.add('hide')
        successMsg.classList.remove('hide')
        all.forEach(a=>{
            a.style.opacity = '0.5'
        })
        window.scrollTo(0,0)
    })
})
successBtn.addEventListener('click',e=>{
    successMsg.classList.add('hide')
    location.reload()
})

if(window.innerWidth < 680){
    menuBtn.src = 'images/icon-hamburger.png'
}