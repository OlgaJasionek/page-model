const closeBtn= document.querySelector('.nav-header')
const menuBtn= document.querySelector('.menu-box1')
const nav= document.querySelector('.navbar')
const header= document.querySelector('.home')
const heroImage=document.querySelector('.hero-image')
const pageInfo=document.querySelector('.page-info')
const miniNav=document.querySelector('.mini-nav')
const cardsGroup=document.querySelector('.cards-group')
const juryVotes=document.querySelector('.jury-votes')
const comments=document.querySelector('.comments')
const footer=document.querySelector('.footer-links')
const navItem=document.querySelectorAll('.nav-item')
console.log(navItem);

const openNav=()=>{
  nav.classList.remove('close')
  header.classList.add('shift-header','dark-mood')
  heroImage.classList.add('shift-header')
  pageInfo.classList.add('shift-header')
  miniNav.classList.add('shift-header')
  cardsGroup.classList.add('shift-header')
  juryVotes.classList.add('shift-header')
  comments.classList.add('shift-header')
  footer.classList.add('shift-header')
}
console.log(openNav);
const closeNav=()=>{
  nav.classList.add('close')
  header.classList.remove('shift-header','dark-mood')
  heroImage.classList.remove('shift-header')
  pageInfo.classList.remove('shift-header')
  miniNav.classList.remove('shift-header')
  cardsGroup.classList.remove('shift-header')
  juryVotes.classList.remove('shift-header')
  comments.classList.remove('shift-header')
  footer.classList.remove('shift-header')
}

for(const item of navItem){
  item.addEventListener('click', closeNav)
}
menuBtn.addEventListener('click', openNav)
closeBtn.addEventListener('click', closeNav)
window.addEventListener('dblclick', closeNav)